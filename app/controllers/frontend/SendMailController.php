<?php
use HoangVN\Mail\SendMail;
class SendMailController extends \BaseController{
    protected $mail;
    public function __construct(SendMail $mail){
        $this->mail = $mail;
    }
    public function sendMail($data, $email){
        $this->mail->register($data,$email);
    }
} 