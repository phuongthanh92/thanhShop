<?php
/**
 * Created by PhpStorm.
 * User: Hoang
 * Date: 5/7/14
 * Time: 8:08 PM
 */
class FacebookController extends \BaseController{
    public function getLogin(){
        $facebook = new Facebook(Config::get('facebook'));
        $params = array(
            'redirect_uri' => action('FacebookController@getCallback'),
            'scope' => 'email',
        );
        return Redirect::to($facebook->getLoginUrl($params));
    }
    public function getCallback(){
        $code = Input::get('code');
        if (strlen($code) == 0) return Redirect::action('FacebookController@getMessage')->with('message', 'There was an error communicating with Facebook');
        $facebook = new Facebook(Config::get('facebook'));
        $uid = $facebook->getUser();

        if ($uid == 0) return Redirect::action('FacebookController@getMessage')->with('message', 'There was an error communicating with Facebook');

        $me = $facebook->api('/me');
        $profile = UserMeta::where('key', 'facebook')->where('value', $uid)->first();
        if (empty($profile)) {
            DB::transaction(function() use ($uid,$me){
                $user = User::where('email', $me['email'])->first();
                if(empty($user)){
                    $username = (User::where('username', $me['username'])->count()>0) ? $me['username'] . 'fb' : $me['username'];
                    $gender = ($me['gender']=='male') ? 1 : 0;
                    $data = array(
                        'username'=>$username,
                        'password'=> Hash::make($username),
                        'email'=>$me['email'],
                        'full_Name'=> $me['last_name'].' '.$me['first_name'],
                        'gender'=> $gender,
                        'birthday'=>null,
                        'active'=>1,
                        'group'=>1,
                        'status'=>1
                    );
                    $user = User::create($data);
                }
            Auth::loginUsingId($user->id);
                UserMeta::create(array('user_id'=>$user->id, 'key'=>'facebook', 'value'=>$uid));
            });
        }else{
            Auth::loginUsingId($profile->user_id);
        }
        return Redirect::to('/');
    }
    public function getMessage(){
        if(Session::has('message')){
            $message = Session::get('message');
            if(is_array($message)){
                foreach($message as $val){
                    echo "<p>{$val}</p>";
                }
            }else{
                echo $message;
            }
        }
    }
} 