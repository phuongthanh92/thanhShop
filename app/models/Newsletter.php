<?php
class Newsletter extends Eloquent
{
    protected $table = 'newsletter';
    protected $primaryKey = 'email';
    public $timestamps = true;
}
