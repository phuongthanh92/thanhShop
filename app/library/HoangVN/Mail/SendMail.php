<?php
/**
 * Created by PhpStorm.
 * User: Hoang
 * Date: 13/03/2014
 * Time: 10:34
 */

namespace HoangVN\Mail;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\Mail;
class SendMail {
    public function send($template, $data, $email, $subject, $name = null){
        return Mail::send($template, array('data'=>$data), function($message) use ($email, $subject, $name){
            $message->to($email, $name)->subject($subject);
        });
    }
    public function later($time, $template, $data, $email, $subject, $name = ''){
        return Mail::later($time, $template, array('data'=>$data), function($message) use ($email, $subject, $name){
            $message->to($email, $name)->subject($subject);
        });
    }
    public function queueOn( $template, $data, $email, $subject, $name = ''){
        return Mail::queueOn('sendMail', $template, array('data'=>$data), function($message) use($data, $email, $subject, $name){
            $message->to($email, $name)->subject($subject);
        });
    }
}