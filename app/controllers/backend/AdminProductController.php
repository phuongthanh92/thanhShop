<?php
use HoangVN\Category\Menu;

class AdminProductController extends \BaseController{
    protected $product;
    protected $category;
    protected $attribute;
    protected $group;
    protected $messages;
    protected $attributeNames = array();

    public function __construct(Product $product, Category $category, Attribute $attribute, AttributeGroup $group){
        $this->product   = $product;
        $this->category  = $category;
        $this->attribute = $attribute;
        $this->group     = $group;
        $this->messages  = Lang::get('backend/products/messages.validator');
    }

    protected function getAttribute(){
        $attributes = $this->attribute->all();

        foreach($attributes as $val){
            $this->attributeNames[$val->code] = $val->label;
        }
    }

    public function getIndex(){
        $title   = Lang::get('backend/products/title.management');
        $appends = array();
        $row     = 10;
        if(Input::has('limit') && (int)Input::get('limit') > 0 && (int)Input::get('limit') !== $row){
            $row              = (int)Input::get('limit');
            $appends['limit'] = $row;
        }
        $order  = array('column' => 'updated_at', 'order' => 'DESC');
        $sortBy = 'new';
        if(Input::has('order')){
            $appends['order'] = Input::get('order');
            $sortBy           = $appends['order'];
            switch($appends['order']){
                case 'quantityASC':
                    $order = array('column' => 'quantity', 'order' => 'ASC');
                    break;
                case 'quantityDESC':
                    $order = array('column' => 'quantity', 'order' => 'DESC');
                    break;
                case 'status':
                    $order = array('column' => 'status', 'order' => 'ASC');
                    break;
            }
        }
        $keyword = null;
        if(Input::has('keyword') && Input::get('keyword') !== null){
            $keyword            = Input::get('keyword');
            $appends['keyword'] = $keyword;
            $products           = $this->product->where('name', 'like', '%' . \HoangVN\String\String::asciiToUnicode($keyword) . '%')->orderBy($order['column'], $order['order'])->paginate($row);
        }else{
            $products = $this->product->orderBy($order['column'], $order['order'])->paginate($row);
        }
        $products->appends($appends)->links();
        return View::make('backend.products.index', compact('title', 'products', 'row', 'sortBy', 'keyword'));
    }

    public function getGroup(){
        $group = $this->group->all(array('id', 'group_name'));
        $title = Lang::get('backend/products/title.create');
        return View::make('backend.products.group', compact('title', 'group'));
    }

    public function getCreate($id){
        $category = $this->category->getData();
        $menu     = new Menu();
        $tree     = $menu->buildTree($category);
        $group    = $this->group->find($id);
        if(empty($group)){
            return Response::view('errors.404', array(), 404);
        }else{
            $tmp        = $this->attribute->whereIn('code', $group->group_attributes)->get();
            $attributes = array();
            foreach($tmp as $val){
                $attributes[$val->code] = $val;
            }
            $groups   = $group->group_attributes;
            $title    = Lang::get('backend/products/title.create');
            $count    = $this->product->count();
            $products = $this->product->skip(0)->take(10)->get(array('_id', 'name', 'code', 'image', 'groupAttribute', 'price', 'special_price', 'status'));
            return View::make('backend.products.create', compact('title', 'attributes', 'groups', 'tree', 'id', 'count', 'products'));
        }
    }

    public function postCreate($groupId){
            $group = $this->group->find($groupId);
            if(empty($group)){
                return Response::json(array('success' => false, 'messages' => 'Please check the data'), 400);
            }
            $inputs = Input::all();
            $this->getAttribute();
            $valid = Validator::make($inputs, $this->product->rules, $this->messages, $this->attributeNames);
            $valid->getPresenceVerifier()->setConnection('mongodb');
            if($valid->fails()){
                return Redirect::back()->withInput()->withErrors($valid->messages());
            }else{
                $product = $this->product;
                foreach($group->group_attributes as $val){
                    if(isset($inputs[$val])){
                        if(in_array($val, array('price', 'special_price'))){
                            $product->$val = (int)str_replace('.', '', $inputs[$val]);
                        }elseif($val == 'image'){
                            $images = array();
                            foreach($inputs['image'] as $image){
                                $rules = array(
                                    'upload' => 'image|max:1500'
                                );
                                $validation = Validator::make(array('upload'=>$image), $rules);
                                if(!$validation->fails()){
                                    $fileName      = uniqid() . '.' . $image->getClientOriginalExtension();
                                    $uploadSuccess = $image->move(public_path('images/products'), $fileName);
                                    if($uploadSuccess){
                                        array_push($images, 'public/images/products/' . $fileName);
                                    }
                                }

                            }
                            $product->{$val} = $images;
                        }elseif(in_array($val, array('special_to_date', 'special_from_date'))){
                            if($inputs[$val] != ''){
                                $tmp = DateTime::createFromFormat('d/m/Y', $inputs[$val]);
                                $product->{$val} = $tmp->getTimestamp();
                            }else{
                                $product->{$val} = time();
                            }
                        }else{
                            if(isset($inputs[$val])){
                                $product->{$val} = $inputs[$val];
                            }else{
                                $product->{$val} = '';
                            }
                        }
                    }
                }
                $product->groupAttribute = array('id' => $group->id, 'name' => $group->group_name);
                $product->quantity       = (int)str_replace('.', '', $inputs['quantity']);
                $product->category       = array_map('intval', explode(',', $inputs['category']));
                if(isset($inputs['related_products'])){
                    $product->related_products = $inputs['related_products'];
                }
                $product->quantity = (int)$inputs['quantity'];
                $product->stock    = (int)$inputs['stock'];
                $product->save();
//                Event::fire('product', array($product));
                Session::flash('product_message', $this->messages['create_success']);
            }
        if(Request::ajax()){
            return Response::json(array('success' => true, 'url' => action('AdminProductController@getEdit', $product->_id)), 200);
        }else{
            return Redirect::action('AdminProductController@getEdit', $product->_id);
        }
//    return Response::json(array('success' => false, 'messages' => 'is not ajax request'), 400);
    }

    public function postCheckCode(){
        if(Request::ajax()){
            if(Input::has('code')){
                $productId = Request::segment(4);
                if(!empty($productId)){
                    $product = $this->product->where('_id', $productId)->count();
                    if($product > 0){
                        $count = $this->product->where('code', Input::get('code'))->where('_id', '!=', $productId)->count();
                    }else{
                        return 'false';
                    }
                }else{
                    $count = $this->product->where('code', Input::get('code'))->count();
                }
                if(empty($count) || $count == 0){
                    return 'true';
                }
                return 'false';
            }
            return Response::json(array('success' => false), 400);
        }
        return Response::json(array('success' => false, 'messages' => 'is not ajax request'), 400);

    }

    public function postCheckSlug($slug){
    }

    public function postProduct(){
        if(Input::has('skip')){
            $skip = Input::get('skip');
            if(Input::has('_id')){
                $products = $this->product->where('_id', '!=', Input::get('_id'))->skip($skip)->take(20)->get(array('_id', 'name', 'code', 'image', 'groupAttribute', 'price', 'special_price', 'status'));
            }else{
                $products = $this->product->skip($skip)->take(20)->get(array('_id', 'name', 'code', 'image', 'groupAttribute', 'price', 'special_price', 'status'));
            }
            return Response::json($products, 200);
        }
        return Response::json(array('success' => false, 'messages' => 'is not ajax request'), 404);
    }

    public function getEdit($id){
        $product = $this->product->find($id);

        if(empty($product)){
            return Response::view('errors.404', array(), 404);
        }else{
            $category     = $this->category->getData();
            $menu         = new Menu();
            $count        = $this->product->count() - 1;
            $treeSelected = $product->category;
            $tree         = $menu->buildTree($category, 0, $treeSelected);
            $group        = $this->group->find($product->groupAttribute['id']);
            $groups       = $group->group_attributes;
            $tmp          = $this->attribute->whereIn('code', $groups)->get();
            $attributes   = array();
            foreach($tmp as $val){
                $attributes[$val->code] = $val;
            }
            $related_products = (isset($product->related_products) && is_array($product->related_products))
                ? json_encode($product->related_products) : 'null';
            $products = $this->product->where('_id', '!=', $product->_id)->skip(0)->take(10)->get(array('_id', 'name', 'code', 'groupAttribute', 'price', 'special_price', 'status'));
            $title    = Lang::get('backend/products/title.update');
            return View::make('backend.products.edit', compact('title', 'count', 'tree', 'id', 'group', 'product', 'attributes', 'products', 'groups', 'related_products'));
        }
    }

    public function postUpdate($id){
            $product = $this->product->find($id);
            if(empty($product)){
                return Response::json(array('success' => false, 'messages' => 'Please check the data'), 200);
            }
            $group  = $this->group->find($product->groupAttribute['id']);
            $inputs = Input::all();
        var_dump($inputs);
        exit;
            $this->getAttribute();
            Validator::extend('codeCheck', function ($attributes, $value, $parameters) use ($id){
                $count = $this->product->where('code', Input::get('code'))->where('_id', '!=', $id)->count();
                if(empty($count) || $count == 0){
                    return true;
                }else{
                    return false;
                }
            });
            $rules = $this->product->rules;
            $valid = Validator::make($inputs, $rules, $this->messages, $this->attributeNames);
            $valid->getPresenceVerifier()->setConnection('mongodb');
            if($valid->fails()){
                return Response::json(array('success' => false, 'messages' => $valid->messages()->first()), 200);
            }else{
                foreach($group->group_attributes as $val){
                    if(isset($inputs[$val])){
                        if(in_array($val, array('price', 'special_price'))){
                            $product->{$val} = (int)str_replace('.', '', $inputs[$val]);
                        }elseif($val == 'image'){
                            $images = $product->image;
                            if(Input::has('image_delete')){
                                foreach($images as $key => $val){
                                    if(array_search($val, $inputs['image_delete'])){
                                        if(File::exists($val)){
                                            File::delete(base_path($val));
                                            unset($images[$key]);
                                        }
                                    }
                                }
                            }elseif(isset($inputs['image']) && !empty($inputs['image']))
                            {
                                $rules['image']            = 'array';
                                foreach($inputs['image'] as $image){
                                    $rules = array(
                                        'upload' => 'image|max:15500'
                                    );
                                    $validation = Validator::make(array('upload'=>$image), $rules);
                                    if(!$validation->fails()){
                                        if(!empty($image) && File::isFile($image)){
                                            $fileName      = uniqid() . '.' . $image->getClientOriginalExtension();
                                            $uploadSuccess = $image->move(public_path('images/products'), $fileName);
                                            if($uploadSuccess){
                                                array_push($images, 'public/images/products/' . $fileName);
                                            }
                                        }

                                    }

                                }
                            }
                            $product->{$val} = $images;
                        }elseif(in_array($val, array('special_to_date', 'special_from_date'))){

                            $tmp = DateTime::createFromFormat('d/m/Y', $inputs[$val]);
                            if(is_object($tmp)){
                                $product->{$val} = $tmp->getTimestamp();
                            }else{
                                $product->{$val} = '';
                            }
                        }else{
                            $product->{$val} = $inputs[$val];
                        }
                    }else{
                        $product->{$val} = '';
                    }
                }
                $product->groupAttribute = array('id' => $group->id, 'name' => $group->group_name);
                $product->quantity       = (int)str_replace('.', '', $inputs['quantity']);
                $product->category       = array_map('intval', explode(',', $inputs['category']));
                if(isset($inputs['related_products'])){
                    $product->related_products = $inputs['related_products'];
                }
                $product->quantity = (int)$inputs['quantity'];
                $product->stock    = (int)$inputs['stock'];
                $product->save();
                Event::fire('product', array($product));
                Session::flash('product_message', $this->messages['update_success']);
                if(Request::ajax()){
                    return Response::json(array('success' => true, 'url' => action('AdminProductController@getEdit', $product->_id)), 200);
                }else{
                    return Redirect::action('AdminProductController@getEdit', $product->_id);
                }
            }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function postDelete($id){
        $product = $this->product->find($id);
        if(isset($product->image) && is_array($product->image)){
            foreach($product->image as $val){
                if(File::exists($val)){
                    File::delete(base_path($val));
                }
            }
        }
        Event::fire('product', array($id));
        $product->delete();
        if(Request::ajax()){
            if(empty($product)){

                return Response::json(array('delete' => false));
            }else{
                return Response::json(array('delete' => true));
            }
        }else{
            if(empty($product)){
                return Response::view('errors.404', array(), 404);
            }else{
                return Redirect::action('AdminProductController@getIndex');
            }
        }
    }

    public function getStatistic(){

    }
    public function postCreate1($groupId){
        $group = $this->group->find($groupId);
        if(empty($group)){
            return Response::json(array('success' => false, 'messages' => 'Please check the data'), 400);
        }
        $inputs = Input::all();
        $this->getAttribute();
        unset($this->product->rules['image']);
        $valid = Validator::make($inputs, $this->product->rules, $this->messages, $this->attributeNames);
        $valid->getPresenceVerifier()->setConnection('mongodb');
        if($valid->fails()){
            return Redirect::back()->withInput()->withErrors($valid->messages());
        }else{
            $product = $this->product;
            foreach($group->group_attributes as $val){
                if(isset($inputs[$val])){
                    if(in_array($val, array('price', 'special_price'))){
                        $product->$val = (int)str_replace('.', '', $inputs[$val]);
                    }elseif($val == 'image'){

                        $product->{$val} = Input::get('image');
                    }elseif(in_array($val, array('special_to_date', 'special_from_date'))){
                        if($inputs[$val] != ''){
                            $tmp = DateTime::createFromFormat('d/m/Y', $inputs[$val]);
                            $product->{$val} = $tmp->getTimestamp();
                        }else{
                            $product->{$val} = time();
                        }
                    }else{
                        if(isset($inputs[$val])){
                            $product->{$val} = $inputs[$val];
                        }else{
                            $product->{$val} = '';
                        }
                    }
                }
            }
            $product->groupAttribute = array('id' => $group->id, 'name' => $group->group_name);
            $product->quantity       = (int)str_replace('.', '', $inputs['quantity']);
            $product->category       = array_map('intval', explode(',', $inputs['category']));
            if(isset($inputs['related_products'])){
                $product->related_products = $inputs['related_products'];
            }
            $product->quantity = (int)$inputs['quantity'];
            $product->stock    = (int)$inputs['stock'];
            $product->save();
//                Event::fire('product', array($product));
            Session::flash('product_message', $this->messages['create_success']);
        }
        if(Request::ajax()){
            return Response::json(array('success' => true, 'url' => action('AdminProductController@getEdit', $product->_id)), 200);
        }else{
            return Redirect::to('f1');
            return Redirect::action('AdminProductController@getEdit', $product->_id);
        }
//    return Response::json(array('success' => false, 'messages' => 'is not ajax request'), 400);
    }
}

