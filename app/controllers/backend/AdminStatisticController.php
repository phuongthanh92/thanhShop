<?php
/**
 * Created by PhpStorm.
 * User: Hoang
 * Date: 11/04/14
 * Time: 15:25
 */

class AdminStatisticController extends BaseController{
    public $item;
    public function __construct(OrderItem $item){
        $this->item = $item;
    }
    public function getOrder(){
        $row = (Input::has('limit') && (int)Input::get('limit')>0) ? (int)Input::get('limit') : 20;
        $from = $to = null;
        if(Input::has('from_date') && Input::get('from_date') !=''){
            $date = date_create_from_format('d/m/Y', Input::get('from_date'));
            $from = $date->format('Y-m-d');
        }
        if(Input::has('to_date') && Input::get('to_date') !=''){
            $date = date_create_from_format('d/m/Y', Input::get('to_date'));
            $to = $date->format('Y-m-d');
        }
        if(!empty($from) && !empty($to)){
            $orders = Order::where('created_at', '>=', $from)->where('created_at', '<=', $to)->skip(0)->take($row)->get(array('id', 'total_product', 'total_amount', 'status', 'created_at'));
        }elseif(!empty($from)){
            $orders = Order::where('created_at', '>=', $from)->skip(0)->take($row)->get(array('id', 'total_product', 'total_amount', 'status', 'created_at'));
        }elseif(!empty($to)){
            $orders = Order::where('created_at', '<=', $to)->skip(0)->take($row)->get(array('id', 'total_product', 'total_amount', 'status', 'created_at'));
        }else{
            $orders = Order::skip(0)->take($row)->get(array('id', 'total_product', 'total_amount', 'status', 'created_at'));
        }
        if($row>100) $row = 100;

        $status = Lang::get('backend/orders/status');
        return View::make('backend.statistic.order', compact('title', 'orders', 'row', 'status'))->with('from', Input::get('from_date'))->with('to', Input::get('to_date'));
    }
    public function getProduct(){
        $row = (Input::has('limit') && (int)Input::get('limit')>0) ? (int)Input::get('limit') : 20;
        $from = $to = null;
        if(Input::has('from_date') && Input::get('from_date') !=''){
            $date = date_create_from_format('d/m/Y', Input::get('from_date'));
            $from = $date->format('Y-m-d');
        }
        if(Input::has('to_date') && Input::get('to_date') !=''){
            $date = date_create_from_format('d/m/Y', Input::get('to_date'));
            $to = $date->format('Y-m-d');
        }
        if(!empty($from) && !empty($to)){
            $orders = DB::select("SELECT product_id, SUM(quantity) as quantity FROM order_item WHERE created_at BETWEEN ? AND ? GROUP BY product_id ORDER BY quantity DESC LIMIT 0, ?", array($from, $to, $row));
        }elseif(!empty($from)){
            $orders = DB::select("SELECT product_id, SUM(quantity) as quantity FROM order_item WHERE created_at >= ? GROUP BY product_id ORDER BY quantity DESC LIMIT 0, ?", array($from, $row));
        }elseif(!empty($to)){
            $orders = DB::select("SELECT product_id, SUM(quantity) as quantity FROM order_item WHERE created_at <= ? GROUP BY product_id ORDER BY quantity DESC LIMIT 0, ?", array($to, $row));
        }else{
            $orders = DB::select("SELECT product_id, SUM(quantity) as quantity FROM order_item GROUP BY product_id ORDER BY quantity DESC LIMIT 0, ?", array($row));
        }
        if($row>100) $row = 100;

        return View::make('backend.statistic.product', compact('title', 'orders', 'row'))->with('from', Input::get('from_date'))->with('to', Input::get('to_date'));
    }
    public function getCustomer(){

    }
    public function getExcel(){
        $row = (Input::has('limit') && (int)Input::get('limit')>0) ? (int)Input::get('limit') : 20;
        $from = $to = null;
        if(Input::has('from_date') && Input::get('from_date') !=''){
            $date = date_create_from_format('d/m/Y', Input::get('from_date'));
            $from = $date->format('Y-m-d');
        }
        if(Input::has('to_date') && Input::get('to_date') !=''){
            $date = date_create_from_format('d/m/Y', Input::get('to_date'));
            $to = $date->format('Y-m-d');
        }
        if(Input::has('type') && Input::get('type') == 'order' && Input::has('_token') && Session::token() == Input::get('_token')){
            if(!empty($from) && !empty($to)){
                $orders = Order::where('created_at', '>=', $from)->where('created_at', '<=', $to)->skip(0)->take($row)->get(array('id', 'total_product', 'total_amount', 'status', 'created_at'));
            }elseif(!empty($from)){
                $orders = Order::where('created_at', '>=', $from)->skip(0)->take($row)->get(array('id', 'total_product', 'total_amount', 'status', 'created_at'));
            }elseif(!empty($to)){
                $orders = Order::where('created_at', '<=', $to)->skip(0)->take($row)->get(array('id', 'total_product', 'total_amount', 'status', 'created_at'));
            }else{
                $orders = Order::skip(0)->take($row)->get(array('id', 'total_product', 'total_amount', 'status', 'created_at'));
            }
            if($row>100) $row = 100;
            $data = $orders->toArray();
            $excel = Input::has('csv') ? 'csv' : 'xls';
            array_unshift($data, array('id'=>'Mã đơn hàng', 'total_product'=>'Số sản phẩm', 'total_amount'=>'Tổng số tiền','status'=>'Trạng thái', 'created_at'=>'Ngày tạo'));
            Excel::create('order')
                ->sheet('SheetName')
                ->with($data)
                ->export('xls');
        }
    }
}
