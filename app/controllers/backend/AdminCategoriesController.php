<?php
use HoangVN\Category\Menu;
class AdminCategoriesController extends \BaseController
{
    protected $rules = array(
        'create' => array(
            'name'             => 'required|max:100',
            'slug'             => 'required|max:100|unique:categories',
            'meta_title'       => 'max:100',
            'meta_keyword'     => 'max:100',
            'meta_description' => 'max:100',
        ),
        'update' => array(
            'id'               => 'required',
            'name'             => 'required|max:100',
            'slug'             => 'required|max:100|checkSlug',
            'meta_title'       => 'max:100',
            'meta_keyword'     => 'max:100',
            'meta_description' => 'max:100',
        ),
    );
    protected $attributeNames = array();
    protected $messages;

    public function __construct()
    {
        $this->attributeNames = Lang::get('backend/categories/attributes');
        $this->messages       = Lang::get('backend/categories/messages.validate');
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function getIndex()
    {
        $title = Lang::get('backend/categories/title.management');
        $items = Category::getData();
        $menu = new Menu;
        $menu = $menu->buildMenuNestable($items);
        if (Session::has('create_category_success')) {
            $success = Session::get('create_category_success');
            return View::make('backend.categories.index', compact('title', 'menu', 'success'));
        }
        return View::make('backend.categories.index', compact('title', 'menu'));
    }

    public function postIndex()
    {
        $source      = e(Input::get('source'));
        $destination = e(Input::get('destination', 0));
        $item        = Category::find($source);
        if (!empty($item)) {
            $item->parent_id = $destination;
            $item->save();
        }
        $ordering     = json_decode(Input::get('order'));
        $rootOrdering = json_decode(Input::get('rootOrder'));

        if ($ordering) {
            foreach ($ordering as $order => $item_id) {
                if ($itemToOrder = Category::find($item_id)) {
                    $itemToOrder->order = $order;
                    $itemToOrder->save();
                }
            }
        } else {
            foreach ($rootOrdering as $order => $item_id) {
                if ($itemToOrder = Category::find($item_id)) {
                    $itemToOrder->order = $order;
                    $itemToOrder->save();
                }
            }
        }
        $category = new Category();
        $category->setData();
        return 'success';
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function postCreate()
    {
        $inputs = Input::all();
        $valid  = Validator::make($inputs, $this->rules['create'], $this->messages, $this->attributeNames);
        if ($valid->fails()) {
            return Redirect::action('AdminCategoriesController@getIndex')->withErrors($valid->messages())->withInputs($inputs);
        } else {
            $category                   = new Category();
            $category->name             = $inputs['name'];
            $category->slug             = Str::slug($inputs['slug']);
            $category->meta_title       = $inputs['meta_title'];
            $category->meta_keyword     = $inputs['meta_keyword'];
            $category->meta_description = $inputs['meta_description'];
            $category->active           = $inputs['active'];
            $category->parent_id        = 0;
            $category->order            = 0;
            $category->save();
            $category->setData();
            Session::flash('create_category_success', Lang::get('backend/categories/messages.create_success'));
            return Redirect::action('AdminCategoriesController@getIndex');
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return Response
     */
    public function getEdit($id)
    {
        $title    = Lang::get('backend/categories/title.update');
        $category = Category::find($id);
        if (empty($category)) {
            return Response::view('errors.404', array(), 404);
        }
        return View::make('backend.categories.edit', compact('title', 'category'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @return Response
     */
    public function postEdit(){
        $inputs = Input::all();
        Validator::extend('checkSlug', function ($attributes, $value, $parameters) {
            if (Category::where('slug', Str::slug(Input::get('slug')))->where('id', '!=', Input::get('id'))->count() > 0) {
                return false;
            }
            return true;
        });
        $valid = Validator::make($inputs, $this->rules['update'], $this->messages, $this->attributeNames);
        if ($valid->fails()) {
            return Redirect::back()->withErrors($valid->messages())->withInputs($inputs);
        } else {
            $category                   = Category::find($inputs['id']);
            $category->name             = $inputs['name'];
            $category->slug             = Str::slug($inputs['slug']);
            $category->meta_title       = $inputs['meta_title'];
            $category->meta_keyword     = $inputs['meta_keyword'];
            $category->meta_description = $inputs['meta_description'];
            $category->active           = $inputs['active'];
            $category->save();
            $category->setData();
            $title   = Lang::get('backend/categories/title.update');
            $success = Lang::get('backend/categories/messages.update_success');
            if (empty($category)) {
                return Redirect::action('AdminCategoriesController@getIndex');
            }
            return View::make('backend.categories.edit', compact('title', 'category'))->withSuccess($success);
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
        if (Input::has('delete_id')) {
            $category = Category::find(Input::get('delete_id'));
            $category->delete();
            $category->setData();
        }
        return Redirect::action('AdminCategoriesController@getIndex');
    }

}
