<?php
/**
 * Created by PhpStorm.
 * User: Hoang
 * Date: 28/03/2014
 * Time: 22:54
 */
namespace HoangVN\Facebook;

use HoangVN\Facebook\SDK\Facebook as Facebook;

class FacebookLogin extends Facebook
{
    public $appId = '278204222345952';
    public $secret = '0db3766d26a9b7771f0e4e8b7d8cd730';

    public function __construct($appId = null, $secret = null)
    {
        if ($appId === null || $secret === null) {
            $data = array('appId' => $appId, 'secret' => $secret);
        } else {
            $data = array('appId' => $this->appId, 'secret' => $this->secret);
        }
        parent::__construct($data);
    }
} 