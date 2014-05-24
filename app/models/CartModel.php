<?php
/**
 * Created by PhpStorm.
 * User: Hoang
 * Date: 12/03/2014
 * Time: 05:13
 */
use Jenssegers\Mongodb\Model as MongoEloquent;

class CartModel extends MongoEloquent{
    protected $connection = 'mongodb';
    protected $collection = 'cart';
    protected $primaryKey = '_id';
    public $timestamps = true;
    protected $user = -1;
    protected $session = null;
    protected $cart;
    protected $fillable = array('user_id', 'session_id', 'product_id', 'quantity', 'key', 'size', 'color');


    public function login(){
        $userID = Auth::user()->getAuthIdentifier();
        if(Cart::totalItems() > 0){
            $this->where('user_id', $userID)->delete();
            $this->setCart();
        }else{
            $this->where('update_at', '<', (time() - (24 * 60 * 60 * 10)))->delete();
            $this->getCart();
        }
    }

    public function setCart(){
        $userID = Auth::check() ? Auth::user()->getAuthIdentifier() : -1;
        foreach(Cart::contents() as $item){
            $data = array(
                'user_id'    => $userID,
                'session_id' => Session::getId(),
                'key'        => $item->id,
                'product_id' => $item->product_id,
                'quantity'   => $item->quantity,
                'size'       => $item->size,
                'color'      => $item->color,
            );
            if($userID != -1){
                if($this->where('user_id', $userID)->where('key', $item->id)->count()>0){
                    $this->where('user_id', $userID)->where('key', $item->id)->update(array('quantity'   => $item->quantity,));
                }else{
                    $this->create($data);
                }
            }else{
                if($this->where('user_id', $userID)->where('session_id', Session::getId())->where('key', $item->id)->count()>0){
                    $this->where('user_id', $userID)->where('session_id', Session::getId())->where('key', $item->id)->update(array('quantity'   => $item->quantity,));
                }else{
                    $this->create($data);
                }
            }
        }
    }

    public function getCart(){
        $userID = Auth::check() ? Auth::user()->getAuthIdentifier() : -1;
        $cart   = $this->where('user_id', $userID)->get();
        foreach($cart as $item){
            $product = Product::find($item->product_id);
            if(empty($product)){
                $item->delete();
                continue;
            }
            if(isset($product->special_price) && $product->special_from_date < time() && $product->special_to_date > time()){
                $price = $product->special_price;
            }else{
                $price = $product->price;
            }
            $data = array(
                'id'         => $item->key,
                'product_id' => $item->product_id,
                'price'      => $price,
                'quantity'   => $item->quantity,
                'name'       => $product->name,
                'slug'       => $product->slug,
                'size'       => $item->size,
                'color'      => $item->color,
            );
            Cart::insert($data);
        }
    }

    public function addItem($data){
        $userID    = Auth::check() ? Auth::user()->getAuthIdentifier() : -1;
        $sessionID = Session::getId();
        $productId = $data['product_id'];
        $product   = Product::find($productId);
        if(empty($product)){return;}
        $qty       = $data['quantity'];
        $color     = $data['color'];
        $size      = $data['size'];
        $update = false;
        $key       = 'P' . $productId . 'S' . $size . 'C' . $color;
        if($qty > $product->quantity){
            $qty = $product->quantity;
        }
        if($key != 'P' . $productId . 'SC'){
            foreach(Cart::contents() as $val){
                if($val->id == 'P' . $productId . 'SC'){
                    $qty += $val->quantity;
                    $val->remove();
                    $this->where('session_id', $sessionID)->where('user_id', $userID)
                        ->where('key', $key)->delete();
                    break;
                }
            }
        }else{
            foreach(Cart::contents() as $item){
                if(preg_match('/^P' . $productId . 'S/',$item->id)){
                    $update = true;
                    $item->quantity += $qty;
                    if( $item->quantity > $product->quantity){
                        $item->quantity = $product->quantity;
                    }
                    break;
                }
            }
        }
        if(!$update){
            if(isset($product->special_price) && $product->special_from_date < time() && $product->special_to_date > time()){
                $price = $product->special_price;
            }else{
                $price = $product->price;
            }
            $cart = array(
                'id'         => $key,
                'product_id' => $productId,
                'user_id'    => $userID,
                'session_id' => $sessionID,
                'name'       => $product->name,
                'slug'       => $product->slug,
                'price'      => $price,
                'color'      => $color,
                'size'       => $size,
                'quantity'   => $qty
            );
            Cart::insert($cart);
        }
        foreach(Cart::contents() as $item){
            if($key == $item->id){
                if($item->quantity >= $product->quantity){
                    $item->quantity = $product->quantity;
                }
                break;
            }
        }
        $this->setCart();
        return $qty;
    }

    public function updateItem($data){
        $userID    = Auth::check() ? Auth::user()->getAuthIdentifier() : -1;
        $sessionID = Session::getId();
        $productId = $data['product_id'];
        $product   = Product::find($productId);
        $qty       = $data['quantity'];
        $color     = $data['color'];
        $size      = $data['size'];
        $key       = 'P' . $productId . 'S' . $size . 'C' . $color;
        $keyOld    = $data['key'];
        $change = ($key != $keyOld) ? true : false;
        if(isset($product->special_price) && $product->special_from_date < time() && $product->special_to_date > time()){
            $price = $product->special_price;
        }else{
            $price = $product->price;
        }
        if($change){
            foreach(Cart::contents() as $item){
                if($key != $keyOld){
                    if($item->id == $keyOld){
                        $qty += $item->quanty;
                        $item->remove();
                        $this->where('key', $keyOld)->where('session_id', $sessionID)->where('user_id', $userID)
                            ->delete();
                        break;
                    }
                }
            }
        }
        if($qty > $product->quantity){
            $qty = $product->quantity;
        }
        foreach(Cart::contents() as $item){
            if($item->id == $key){
                $item->quantity = $qty;
                $item->price = $price;
                $this->where('key', $key)->where('session_id', $sessionID)->where('user_id', $userID)
                    ->update(array('quantity'=> $qty));
                break;
            }
        }
        return array('price'=>$price, 'quantity'=>$qty, 'keyOld'=>$keyOld, 'key'=>$key);
    }

    public function deleteItem($key){
        foreach(Cart::contents() as $item){
            if($item->id == $key){
                $item->remove();
                $userID    = Auth::check() ? Auth::user()->getAuthIdentifier() : -1;
                if($userID != -1){
                    $this->where('user_id', $userID)->where('key',$key)->delete();
                }else{
                    $this->where('session_id', Session::getId())->where('key',$key)->delete();
                }
                break;
            }
        }
    }

} 