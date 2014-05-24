<?php
class Provinces extends Eloquent{
    protected $table = 'provinces';
    protected $primaryKey = 'id';
    public $timestamps = false;

    public function districts(){
        return $this->hasMany('Districts','province_id');
    }

} 