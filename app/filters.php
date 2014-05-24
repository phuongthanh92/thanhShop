<?php

/*
|--------------------------------------------------------------------------
| Application & Route Filters
|--------------------------------------------------------------------------
|
| Below you will find the "before" and "after" events for the application
| which may be used to do any work before or after a request into your
| application. Here you may also register your custom route filters.
|
*/

App::before(function ($request) {
    //
});


App::after(function ($request, $response) {
    //
});

/*
|--------------------------------------------------------------------------
| Authentication Filters
|--------------------------------------------------------------------------
|
| The following filters are used to verify that the user of the current
| session is logged into this application. The "basic" filter easily
| integrates HTTP Basic authentication for quick, simple checking.
|
*/

Route::filter('auth', function () {
    if (Auth::guest()) return Redirect::guest('login');
});


Route::filter('auth.basic', function () {
    return Auth::basic();
});

/*
|--------------------------------------------------------------------------
| Guest Filter
|--------------------------------------------------------------------------
|
| The "guest" filter is the counterpart of the authentication filters as
| it simply checks that the current user is not logged in. A redirect
| response will be issued if they are, which you may freely change.
|
*/

Route::filter('guest', function () {
    if (Auth::check()) return Redirect::to('/');
});

/*
|--------------------------------------------------------------------------
| CSRF Protection Filter
|--------------------------------------------------------------------------
|
| The CSRF filter is responsible for protecting your application against
| cross-site request forgery attacks. If this special token in a user
| session does not match the one given in this request, we'll bail.
|
*/

Route::filter('csrf', function () {
    if (Input::has('_token') && Session::token() != Input::get('_token')) {
        throw new Illuminate\Session\TokenMismatchException;
    }
});
Route::filter('admin-auth', function () {
    if (!Auth::check() || !Session::has('isBackend')) {
        return Redirect::route('admin-login');
    }
});
Route::filter('admin-role', function () {
    $group = Auth::user()->group;
    if ($group < 4) {
        return Response::view('errors.403', array(), 403);
    }
});
Entrust::routeNeedsPermission( 'admin/products*', 'management_product', Redirect::to('/admin')  );
Entrust::routeNeedsPermission( 'admin/customers*', 'management_customer', Redirect::to('/admin')  );
Entrust::routeNeedsPermission( 'admin/customers*', 'management_order', Redirect::to('/admin')  );
Entrust::routeNeedsPermission( 'admin/orders*', 'management_customer', Redirect::to('/admin')  );
Entrust::routeNeedsPermission( 'admin/categories*', 'management_category', Redirect::to('/admin')  );
Entrust::routeNeedsPermission( 'admin/attribute*', 'management_attribute', Redirect::to('/admin')  );
Entrust::routeNeedsPermission( 'admin/attribute-group*', 'management_attribute_group', Redirect::to('/admin')  );
Entrust::routeNeedsPermission( 'admin/contact*', 'management_contact', Redirect::to('/admin')  );
Entrust::routeNeedsPermission( 'admin/statistic*', 'management_statistic', Redirect::to('/admin')  );
Entrust::routeNeedsPermission( 'admin/user*', 'management_user', Redirect::to('/admin')  );
Entrust::routeNeedsPermission( 'admin/permission*', 'management_permissions', Redirect::to('/admin')  );
Entrust::routeNeedsPermission( 'admin/setting*', 'management_setting', Redirect::to('/admin')  );
Entrust::routeNeedsPermission( 'admin/banner*', 'management_banner', Redirect::to('/admin')  );
Entrust::routeNeedsPermission( 'admin/slide*', 'management_slide', Redirect::to('/admin')  );
Entrust::routeNeedsPermission( 'admin/article*', 'management_article', Redirect::to('/admin')  );

Route::filter('login', function () {
    if(!Auth::check()){
        return Redirect::route('login');
    }
});



//// Only owners will have access to routes within admin/advanced
//Entrust::routeNeedsRole( 'admin/advanced*', 'Owner' );
//
//// Optionally the second parameter can be an array of permissions or roles.
//// User would need to match all roles or permissions for that route.
//Entrust::routeNeedsPermission( 'admin/post*', array('manage_posts','manage_comments') );
//
//Entrust::routeNeedsRole( 'admin/advanced*', array('Owner','Writer') );