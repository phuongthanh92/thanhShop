<?php

use Illuminate\Auth\Reminders\RemindableInterface;
use Illuminate\Auth\UserInterface;
use Illuminate\Database\Eloquent;
use Zizaco\Entrust\HasRole;

class User extends \Eloquent implements UserInterface, RemindableInterface
{
    use HasRole;
    protected $fillable = array('username','password', 'email', 'full_Name', 'gender', 'birthday', 'active', 'group', 'status');
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = array('password');

    /**
     * Get the unique identifier for the user.
     *
     * @return mixed
     */

    public function getAuthIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Get the password for the user.
     *
     * @return string
     */
    public function getAuthPassword()
    {
        return $this->password;
    }

    /**
     * Get the e-mail address where password reminders are sent.
     *
     * @return string
     */
    public function getReminderEmail()
    {
        return $this->email;
    }

    public function getAuthUser()
    {
        return array(
            'id'        => $this->id,
            'username'  => $this->username,
            'full_name' => $this->full_name,
        );
    }

    public function meta()
    {
        return $this->hasMany('UserMeta', 'user_id');
    }

    public function order()
    {
        return $this->hasMany('Order', 'user_id');
    }

    public function address()
    {
        return $this->hasMany('UserAddress', 'user_id');
    }
}