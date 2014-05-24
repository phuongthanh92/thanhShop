<?php

class AdminOrderController extends \BaseController
{
    protected $order;
    protected $item;
    protected $orderStatus;

    public function __construct(Order $order, OrderItem $item)
    {
        $this->item        = $item;
        $this->order       = $order;
        $this->orderStatus = Lang::get('backend/orders/status');
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function getIndex()
    {
        $title = Lang::get('backend/orders/title.management');
        $take  = 10;
        if (Session::has('order_take')) {
            $take = Session::get('order_take');
        }
        $orders = $this->order->paginate($take);
        $status = $this->orderStatus;
        return View::make('backend.orders.index', compact('title', 'orders', 'take', 'status'));
    }

    public function postIndex()
    {
        if (Input::has('display')) {
            Session::put('order_take', (int)Input::get('display'));
        }
        return Redirect::action('AdminOrderController@getIndex');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function getView($id)
    {
        $order = $this->order->find($id);
        if (empty($order)) {
            return Response::view('errors.404', array(), 404);
        }
        $title    = Lang::get('backend/orders/title.view');
        $address  = $order->address()->get()->first();
        $user     = $order->user()->get()->first();
        $items    = $order->item()->get();
        $order->comment()->where('order_id', $id)->update(array('status'=>1));
        $comments = $order->comment()->get();
        $status   = $this->orderStatus;
        return View::make('backend.orders.view', compact('title', 'order', 'address', 'user', 'items', 'comments', 'status'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function postUpdate($id)
    {
        $order = $this->order->find($id);
        if (empty($order)) {
            return Response::view('errors.404', array(), 404);
        }
        $valid = Validator::make(Input::all(), array('status' => 'required|integer'));
        if ($valid->fails()) {
            return Response::view('errors.404', array(), 404);
        }
        $status = Input::get('status');
        if (!array_key_exists($status, $this->orderStatus)) {
            return Response::view('errors.404', array(), 404);
        }
        if ($status != $order->status) {
            $comment           = new OrderComment();
            $comment->order_id = $order->id;
            $comment->user_id  = Auth::user()->id;
            $comment->content  = Lang::get('backend/orders/messages.order_change_prefix') . '<i>' . $this->orderStatus[$order->status]. ' => ' . $this->orderStatus[$status] . '</i>';
            $comment->status   = -1;
            $comment->save();
            if($status <= 2 && $order->status >2){
                $items    = $order->item()->get();
                foreach($items as $item){
                    $product = Product::find($item->products()->_id);
                    if(!empty($product)){
                        $product->quantity = $product->quantity + $item->quantity;
                        $product->save();
                    }
                }
            }
            if($status > 2 && $order->status <= 2){
                $items    = $order->item()->get();
                foreach($items as $item){
                    $product = Product::find($item->products()->_id);
                    if(!empty($product)){
                        $product->quantity = $product->quantity - $item->quantity;
                        $product->save();
                    }
                }
            }
            $order->status = $status;
            $order->save();
        }
        Session::flash('order', Lang::get('backend/orders/messages.order_change'));
        return Redirect::action('AdminOrderController@getView', $id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        //
    }
    public function getStatistic(){

    }
}