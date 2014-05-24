<?php
class Districts extends Eloquent{
    protected $table = 'districts';
    protected $primaryKey = 'id';
    public $timestamps = false;
    public function provinces(){
        return $this->belongsTo('Provinces', 'province_id');
    }
    public function address(){
        return $this->hasMany('UserAddress','districts_id');
    }
} 