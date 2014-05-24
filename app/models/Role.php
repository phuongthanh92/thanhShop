<?php
/**
 * Created by PhpStorm.
 * User: Hoang
 * Date: 15/03/2014
 * Time: 13:07
 */
use Zizaco\Entrust\EntrustRole;

class Role extends EntrustRole
{
    public function userCount(){
        return DB::table('assigned_roles')->where('role_id', '=', $this->id)->count();
    }
}