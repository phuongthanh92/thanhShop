<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <title>Page not found! - Error 404</title>
    <meta name="robots" content="noindex">
    <meta name="googlebot" content="noindex">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="Content-Style-Type" content="text/css" />
    {{ HTML::style('public/css/404.css') }}
</head>

<body>
<div class="tail-left"></div>
<div id="main">
    <!-- header -->
    <div id="header">
        <h1>Nothing alive here!<span>HTTP <strong>404</strong> Error - Not Found</span></h1>
    </div>
    <!-- content -->
    <div id="content">
        <ul class="nav">
            <li class="home">{{ link_to('/', 'Home Page') }}</li>
            <li class="site_map"><a href="#">Site Map</a></li>
            <li class="search"><a href="javascript:history.back()">Go back</a></li>
        </ul>
        <p>We suppose the dead pages were not what you were looking for.<br /> So please either go to our {{ link_to('/', 'Home page') }}, <a href="#">sitemap</a> or try using the <a href="javascript:history.back()">Go back</a>.</p>
    </div>
    <!-- footer -->
    <div id="footer">

    </div>
</div>
</body>
</html>