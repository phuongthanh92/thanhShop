<?php
include app_path('simple_html_dom.php');
Route::get('f3', function(){
    $id = 25;
    $orderStatus = Lang::get('backend/orders/status');
    $order      = Order::find($id);
    $orderItems = $order->item()->get();
    $status     = $orderStatus[$order->status];

    $address = $order->address()->get()->first();
    $order->comment()->where('order_id', $id)->update(array('status' => 1));
    return View::make('emails.order', compact('title', 'order', 'orderItems', 'address', 'status', 'comment'));
});
Route::get('f1', function(){
    $data = array(
        'images'=>array(
        ),
        'name'=>'',
        'code'=>'',
        'slug'=>'',
        'content'=>'',
        'size'=>'',
        'price'=>'',
        'po'=>'',
        'qty'=>rand(10,50)
    );
    if(Input::has('url')){
        $url = Input::get('url');
        $html = new simple_html_dom();
        $html->load_file($url);
        $content = $html->find('#container_content_payment', 0);
        $dir = public_path('images/products/');
        $images = $content->find('.image_slide', 0);
        $pImage = array();
        foreach($images->find('ul.list li img') as $li){
//            echo $li->src;
//            echo '<br>';
            $image = $li->src;
            $fuckiii = explode('.',$image);
            $fileName = uniqid('product-') . '.' . end($fuckiii);
//
            $image = str_replace('50x50','292x292',$image);
//            echo $images;
            if(Input::has('save')){
                saveImage($image, $dir, $fileName);
            }
            array_push($pImage, 'public/images/products/'.$fileName);
        }
//        var_dump($pImage);
//        echo $list->innertext;
        $code = $html->find('#phagia_id b', 0)->plaintext;
        $nameTmp = $html->find('#phagia_id', 0);
        $name = $nameTmp->plaintext;
        $name = str_replace($code, '', $name);
        $name = trim($name);
        $name = trim($name, '.');
//        echo '<br>';
//        echo $html->find('.code font', 0)->plaintext;
//        echo '<br>';
        $price =  $html->find('.price_sale', 0)->plaintext;
//        echo '<br>';
        $po = $html->find('.price_old', 0)->plaintext;

        $description =  $html->find('.description', 0);
        $upload = public_path('file-manager/source/');
        foreach($description->find('img') as $desImg1){
            $urlTmp = $desImg1->src;
            if(!preg_match('/^http/', $urlTmp)){
                $urlTmp = 'http://cucre.vn' .$desImg1->src;
            }
//            $fileName = uniqid() . '.' . end(explode('.',$urlTmp));
//            saveImage($urlTmp, $upload, $fileName);
            $tmpFuck =  explode('.',$desImg1->src);
            $fileName = uniqid('product-') . '.' . end($tmpFuck);
                if(Input::has('save')){
                    saveImage($urlTmp, $upload, $fileName);
                    $desImg1->src = '../../../public/file-manager/source/'. $fileName;
                    $desImg1->class = "img-responsive";
                }
        }
//        echo $description;
//        echo $html;
        $data = array(
            'images'=>$pImage,
            'name'=>$name,
            'code'=>$code,
            'slug'=>Str::slug($name),
            'content'=>$description,
            'size'=>'',
            'price'=> $po,
            'po'=>$price,
            'qty'=>rand(10,50)
        );
    }
    return View::make('f')->with('data', $data);
});
Route::get('f2', function(){

    echo '<meta charset="utf-8">';
    $p = Product::all();
    $i =0;
    foreach($p as $v){
        $html = str_get_html('<div id="fucking">'.$v->description.'</div>');
        if($html != false){
            echo ++$i . '<br>';
            $f = false;
            foreach($html->find('img[src^=public]') as $desImg){
                echo $desImg->src = '../../../'.$desImg->src;
                echo '<br>';
                $f = true;
            }
            if($f){
//            echo '<pre>';
             echo $a = $html->find('div#fucking', 0)->outertext;
            $v->description = $a;
            $v->save();
            }
        }

/*

        foreach($description->find('img') as $desImg){


        }
        echo $description;*/

//        echo $html;
//        break;
    }
});
function saveImage($url, $dir ,$fileName){
    $ch = curl_init($url);
    $fp = fopen($dir . $fileName, 'wb');
    curl_setopt($ch, CURLOPT_FILE, $fp);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_exec($ch);
    curl_close($ch);
    fclose($fp);
}
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

/** ------------------------------------------
 *  Route model binding
 *  ------------------------------------------
 */
Route::model('user', 'User');
Route::model('newsletter', 'Newsletter');

/** ------------------------------------------
 *  Route constraint patterns
 *  ------------------------------------------
 */
Route::pattern('comment', '[0-9]+');
Route::pattern('user', '[0-9]+');
Route::pattern('token', '[a-z0-9]+');
Route::pattern('username', '[0-9a-z]+');
Route::pattern('category','[a-zA-Z0-9_-]+');
Route::pattern('product','[a-zA-Z0-9_-]+');
Route::pattern('slug','[a-zA-Z0-9_-]+');

/** ------------------------------------------
 *  Admin Routes
 *  ------------------------------------------
 */
#Login Administrator
Route::get('admin/login', array('as' => 'admin-login', 'uses' => 'AdminUserController@getLogin'));
Route::get('admin/logout', array('as' => 'admin-logout', 'uses' => 'AdminUserController@getLogout'));
Route::post('admin/login', 'AdminUserController@postLogin');
#Forgot Password
Route::get('admin/user/forgot-password', 'AdminUserController@getForgotPassword');
Route::post('admin/user/forgot-password', 'AdminUserController@postForgotPassword');

Route::group(array('prefix' => 'admin', 'before' => array('admin-auth', 'csrf', 'admin-role')), function () {
    #NewsLetter Management
    Route::controller('newsletter', 'AdminNewsletter');
    #Statistic Management
    Route::controller('statistic', 'AdminStatisticController');
    #Permission Management
    Route::controller('permission', 'AdminPermissionController');
    #Articles Management
    Route::get('articles/create/articles', 'AdminArticlesController@getCreate');
    Route::controller('articles', 'AdminArticlesController');
    #Contact Management
    Route::post('load-new-contact', 'AdminContactController@postLoadNew');
    Route::controller('contact', 'AdminContactController');
    #Banner Management
    Route::controller('banner', 'AdminBannerController');
    #Slide Management
    Route::controller('slide', 'AdminSlideController');
    #Information Website
    Route::controller('setting', 'AdminSettingController');
    #File
    Route::controller('files', 'AdminFileController');
    #Customer Management
    Route::controller('customers', 'AdminCustomerController');
    # Order Management
    Route::controller('orders', 'AdminOrderController');
    # Products Management
    Route::controller('products', 'AdminProductController');
    # Categories Management
    Route::controller('categories', 'AdminCategoriesController');
    # Attribute Group Management
    Route::controller('attribute-group', 'AdminAttGroupController');
    # Attribute Management
    Route::controller('attribute', 'AdminAttributeController');
    # User Management
    Route::get('profile', 'AdminUserController@getProfile');
    Route::post('profile', 'AdminUserController@postProfile');
    Route::get('password', 'AdminUserController@getChangePassword');
    Route::post('password', 'AdminUserController@postChangePassword');
    Route::controller('user', 'AdminUserController');
    # Admin Dashboard
    Route::get('/', array('as' => 'dashboard', 'uses' => 'AdminDashboardController@getIndex'));
    Route::controller('/', 'AdminDashboardController');

});

/** ------------------------------------------
 *  Frontend Routes
 *  ------------------------------------------
 */


    #Customer
    Route::controller('facebook', 'FacebookController');
    Route::get('dang-ky', 'CustomerController@getRegister');
    Route::post('dang-ky', 'CustomerController@postRegister');
    Route::get('/dang-nhap', array('as' => 'login', 'uses' => 'CustomerController@getLogin'));
    Route::post('/dang-nhap', 'CustomerController@postLogin');
    Route::get('logout', 'CustomerController@getLogout');
    Route::get('lay-lai-mat-khau/{username}/{token}', 'CustomerController@getResetPassword');


    #Cart
    Route::get('gio-hang', 'CartController@getIndex');
    Route::controller('cart', 'CartController');
    #load Address
    Route::controller('address', 'AddressController');
    #Newslitter
    Route::post('dang-ky-nhan-tin', 'NewsletterController@postRegister');
    Route::get('ngung-nhan-tin/{email}/{token}', 'NewsletterController@getStop');
    #Contact
    Route::controller('lien-he', 'ContactController');
    Route::get('don-hang/thanh-toan', 'OrderController@getCheckout');
    #Before Login
    Route::group(array('before' => 'login'), function () {
        Route::get('thong-tin-ca-nhan', 'CustomerController@getProfile');
        Route::post('load-new-comment', 'OrderCommentController@postLoadNew');
        Route::controller('comment', 'OrderCommentController');
        Route::get('lich-su-mua-hang', 'OrderController@getIndex');
        Route::get('chi-tiet-don-hang/{id}', 'OrderController@getView');
        Route::controller('order', 'OrderController');
        #Favorite
        Route::post('xoa-san-pham-yeu-thich', 'FavoriteController@postDelete');
        Route::get('san-pham-yeu-thich', 'FavoriteController@getIndex');
        Route::controller('users', 'CustomerController');
        Route::get('huy-don-hang/{id}', function($id){
            $order = Order::find($id);
            if($order->status == 1){
                $order->status = 0;
                $order->save();
            }
            return Redirect::action('OrderController@getIndex');
        });

    });
#Articles
//    Route::get('/bai-viet/{token}/{$id}', 'ArticlesController@getPost');
    Route::controller('bai-viet', 'ArticlesController');
    #Intro
    Route::get('gioi-thieu', 'IntroController@getIndex');
    #Faq
    Route::get('huong-dan-mua-hang', 'FaqController@getIndex');
    #Map
    Route::controller('ban-do', 'MapController');
    #Products
    Route::get('compare', 'ProductController@getCompare');
    Route::get('so-sanh', 'ProductController@getCompare');
    Route::post('category/{category}', 'CategoriesController@postLoadQuantity');
    Route::post('product/compare/remove', 'ProductController@postCompareRemove');
    Route::post('product/{token}', 'ProductController@postData');
    Route::get('{category}/{product}-{token}', 'ProductController@getIndex');
    #Search
    Route::get('tim-kiem', 'ProductController@getSearch');
    #Category
    Route::get('{category}', 'CategoriesController@getIndex');
//    Route::controller('{category}', 'CategoriesController');
    #home
    Route::controller('/', 'HomeController');
/*---------------------------------
 Error
 * --------------------------------
 * */
App::error(function ($exception, $code) {
//    switch ($code)
//    {
//        case 403:
//            return Response::view('errors.403', array(), 403);
//            break;
//        case 404:
//            return Response::view('errors.404', array(), 404);
//            break;
//        case 500:
//            return Response::view('errors.500', array(), 500);
//            break;
//        default:
//            return Response::view('errors.default', array(), $code);
//            break;
//    }
});
#Event
Event::listen('404', function () {
//    $error = "404: " . URL::full();
//    Log::error($error);
//    $update        = new Log();
//    $update->error = $error;
//    $update->update;
    return Response::error('404');
});
