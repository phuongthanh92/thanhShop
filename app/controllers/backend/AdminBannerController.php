<?php
/**
 * Created by PhpStorm.
 * User: Hoang
 * Date: 20/03/2014
 * Time: 16:05
 */

class AdminBannerController extends \BaseController
{
    private $banner = null;
    private $file;

    public function __construct()
    {
        $this->file = app_path('database/banner.json');
        Lang::get('backend/banner/title.management');
        if (File::exists($this->file)) {
            $this->banner = json_decode(File::get($this->file));
        } else {
            File::put($this->file, '{}');
        }
    }

    public function getIndex()
    {
        $category = Category::getData();
        $title    = Lang::get('backend/banner/title.management');
        $banner   = $this->banner;
        return View::make('backend.banner.index', compact('title', 'category', 'banner'));
    }

    public function postUpdate()
    {
        if (Request::ajax()) {
            $inputs     = Input::all();
            $rules      = array(
                'type'  => 'required|integer|min:0|max:4',
                'title' => 'required|max:255',
                'link'  => 'required',
                'image' => 'image|max:5120'
            );
            $messages   = Lang::get('backend/banner/messages');
            $attributes = Lang::get('backend/banner/attributes');
            $valid      = Validator::make($inputs, $rules, $messages, $attributes);
            if ($valid->fails()) {
                return Response::json(array('update' => false, 'errors' => $messages['errors'], 'messages' => $valid->messages()->first()));
            }
            $banner                         = $this->banner;
            $banner[$inputs['type']]->type = $inputs['type'];
            $banner[$inputs['type']]->title = $inputs['title'];
            $banner[$inputs['type']]->link  = $inputs['link'];
            if (Input::hasFile('image')) {
                $fileName = uniqid() . '.' . Input::file('image')->getClientOriginalExtension();
                $uploadSuccess = Input::file('image')->move(public_path('images/banner'), $fileName);
                if($uploadSuccess){
                    File::delete(base_path($this->banner[$inputs['type']]->image));
                    $banner[$inputs['type']]->image  = 'public/images/banner/'.$fileName;
                }
            }
            if (File::put($this->file, json_encode($banner))) {
                return Response::json(array('update' => true, 'messages' => $messages['success'], 'new' => $banner[$inputs['type']]));
            }
            return Response::json(array('update' => false, 'errors' => $messages['errors'], 'messages' => $messages['error_save']));
        }
        return Response::view('errors.404', array(), 404);
    }
} 