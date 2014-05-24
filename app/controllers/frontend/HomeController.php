<?php
use \HoangVN\Category\Menu;
class HomeController extends BaseController
{
    protected $product;
    protected $setting;
    protected $slide;
    protected $category;
    protected $article;
    protected $timeExpired;

    public function __construct(Product $product, Setting $setting, Slide $slide, Category $category, Articles $article)
    {
        $this->product  = $product;
        $this->setting  = $setting;
        $this->slide    = $slide;
        $this->category = $category;
        $this->article  = $article;
        $this->timeExpired = 1800; //30 min
    }

    public function getIndex()
    {
//        $a = $this->product->selectList(9);
//        var_dump($a->count());
//        exit;
        $title = Lang::get('frontend/title.home');
        $slides = $this->slide->getData();
        $banners = json_decode(File::get(app_path('database/banner.json')));

        $articles = $this->article->where('type', 1)->where('status', 1)->orderBy('id', 'DESC')->skip(0)->take(3)->get(array('id', 'slug', 'title', 'short_description', 'image'));
        $products = $this->product->selectList(8, array(), array('status'=> 0), array(),array('created_at', 'DESC'));
        $totalPost = $this->article->where('type', 1)->where('status', 1)->count();
        $hots = $this->product->selectList(8, array('hot'=> "1"), array('status'=> 0), array(),array('created_at', 'DESC'));
//            ->where('status', '!=', '0')->where('hot', "1")->orderBy('created_at', 'DESC')->skip(0)->take(8)->get();
        return View::make('frontend.home', compact('banners', 'totalPost','title', 'slides', 'products', 'hots', 'articles'))->with('breadcrumb', false);
    }


}