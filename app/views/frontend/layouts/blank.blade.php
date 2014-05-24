<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="utf-8"/>
    <meta name="robots" content="noindex">
    <meta name="googlebot" content="noindex">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>
        @section('title')

        @show
    </title>
    @yield('styles')
    <!-- Favicon -->
    <link rel="shortcut icon" href="favicon.ico" />
</head>
<body>
<!--{{ HTML::script('public/js/backend/jquery.min.js') }-->
@yield('scripts')
</body>
</html>