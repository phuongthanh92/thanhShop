<?php

class AdminFileController extends \BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function getIndex()
    {
        return Redirect::route('dashboard');
    }


    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store()
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return Response
     */
    public function edit($id)
    {
        //
    }

    public function postUploadImage($file)
    {
        if (Input::hasFile($file)) {
            $rule  = array(
                $file => 'image|max:5500',
            );
            $valid = Validator::make(Input::all(), $rule, array(), array($file => 'hình ảnh'));
            if (!$valid->fails()) {
                session_id(Input::get('session_id'));
                $fileName      = uniqid() . '.' . Input::file($file)->getClientOriginalExtension();
                $uploadSuccess = Input::file($file)->move(public_path('images/temp'), $fileName);
                if ($uploadSuccess) {
                    return Response::json(array('upload' => 'success', 'fileName' => $fileName, 'path' => 'public/images/temp/' . $fileName), 200);
                }
                return Response::json(array('upload' => 'error'), 400);
            }
            return Response::json(array('upload' => 'error'), 400);
        }


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return Response
     */
    public function postDelete()
    {
        if (Input::has('path')) {
            $path = base_path() . '/' . Input::get('path');
            if (file_exists($path)) {
                $delete = File::delete($path);
                if ($delete) {
                    return Response::json(array('delete' => 'success'), 200);
                }
                return Response::json(array('delete' => 'error'), 400);
            }
            return Response::json(array('delete' => 'error'), 400);
        }
        return Response::json(array('delete' => 'error'), 400);
    }

}