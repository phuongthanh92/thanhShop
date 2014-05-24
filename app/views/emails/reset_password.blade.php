<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="utf-8">
</head>
<body>
<h2>Chào: {{ $full_name }}</h2>
<div>
    <p>Mật khẩu mới của bạn là: <strong>{{ $password }}</strong></p>
    <p>Bạn có thể thay đổi mật khẩu của bạn bất cứ lúc nào bằng cách đăng nhập vào  {{ link_to_action('CustomerController@getLogin', 'tài khoản của bạn') }}.</p>
</div>
</body>
</html>