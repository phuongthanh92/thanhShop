<?php
class AdminNewsletter extends \BaseController{
    public function getIndex(){
        $data = 'Test newsletter';
        Event::queue('newsletter', array($data));
    }
} 