<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="utf-8">
</head>
<body>
<h2>Chào: {{ $data['full_name'] }}</h2>
<div>
    <p>Bạn đã đăng ký tài khoản <b>{{ $data['username'] }}</b> tại website {{url('/')}} .</p>
    <p>
        Bạn vui lòng click vào đường link sau để kích hoạt tài khoản
        {{ link_to_action('CustomerController@getActive', null, array($data['username'], base64_encode($data['created_at']))) }}
    </p>
</div>
</body>
</html>