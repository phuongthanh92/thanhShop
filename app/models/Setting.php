<?php
/**
 * Created by PhpStorm.
 * 
 * User: Hoang
 * Date: 12/03/2014
 * Time: 04:56
 *
 * @property string $name
 * @property string $address
 * @property string $email
 * @property string $phone
 * @property string $facebook
 * @property string $map_link
 * @property string $meta_title
 * @property string $meta_keyword
 * @property string $meta_description
 */

class Setting extends Eloquent
{
    protected $table = 'setting';
    public $timestamps = false;
} 