<?php
/**
 * Created by PhpStorm.
 * User: Hoang
 * Date: 07/03/2014
 * Time: 05:47
 */
class NewsletterController extends BaseController
{
    public function postRegister()
    {
        $email = Input::get('email');
        $valid = Validator::make(array('email' => $email), array('email' => 'required|email'));
        if (Request::ajax()) {
            if ($valid->fails()) {
                return Response::json(array('success' => false, 'messages' => $valid->messages()->first('email')), 200);
            } else {
                $data = Newsletter::find($email);
                if (empty($data)) {
                    $data         = new Newsletter();
                    $data->email  = $email;
                    $data->status = 1;
                    $data->save();
                } else {
                    if ($data->ststus == 1) {
                        $data->status == 1;
                        $data->save();
                    }
                }
                return Response::json(array('success' => true, 'messages' => Lang::get('frontend/newsletter/messages.register_success')), 200);
            }
        }
        $title = Lang::get('frontend/newsletter/title.register');
        if ($valid->fails()) {
            return View::make('frontend.newsletter.register', compact('email', 'title'))->withErrors($valid->messages());
        } else {
            $data = Newsletter::find($email);
            if (empty($data)) {
                $data         = new Newsletter();
                $data->email  = $email;
                $data->status = 1;
                $data->save();
            } else {
                if ($data->ststus == 1) {
                    $data->status == 1;
                    $data->save();
                }
            }
            return View::make('frontend.newsletter.register', compact('email', 'title'));
        }
    }

    public function getStop($email, $key)
    {
        $data = Newsletter::find($email);
        if (!empty($data)) {
            if ($key === md5($data->created_at)) {
                $data->ststus = 0;
                $data->save;
                $title = Lang::get('frontend/newsletter/title.stop');
                return View::make('frontend.newsletter.stop', compact('title'));
            }
        }
        return Response::View('errors.404', array(), 404);
    }
} 