<?php
/**
 * Created by PhpStorm.
 * User: Hoang
 * Date: 12/03/2014
 * Time: 04:57
 */
use Carbon\Carbon;
class OrderComment  extends Eloquent{
    protected $table = 'order_comment';
    protected $primaryKey = 'id';
    public $timestamps = true;

    public function order(){
        return $this->belongsTo('Order','order_id');
    }
    public function user(){
        return $this->belongsTo('User','user_id');
    }
//    public function getCreatedAtAttribute($value)
//    {
//        $this->attributes['created_at'] = $value;
//        $this->attributes['created_at'] = date("d-m-Y", strtotime($value));
//        if($value==null){
//            $this->attributes['created_at'] = null;
//        }else{
//            $this->attributes['created_at'] = Carbon::createFromFormat('d-m-Y H:i:s', $value);

//        $this->attributes['created_at'] = date_format($value,'d-m-Y H:i');
//        }

//    }
} 