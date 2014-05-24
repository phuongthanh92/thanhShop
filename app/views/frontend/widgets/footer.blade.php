<div class="container">
    <div class="top-footer">
        <div class="col-md-12">
            <div class="col-md-6">
                <div class="social">
                    Cộng đồng {{ $config['name'] }}
                    <a href="@if($config['facebook'] !==null) {{ url($config['facebook']) }} @else # @endif" target="_blank"><img src="{{ url('public/img/icon/facebook-circle-256.png') }}" alt="Facebook"></a>
                    <a href="@if(isset($config['google']) && $config['google'] !==null) {{ url($config['google']) }} @else # @endif" target="_blank"><img src="{{ url('public/img/icon/google.png') }}" alt="Google"></a>
                    <a href="@if(isset($config['twitter']) && $config['twitter'] !==null) {{ url($config['twitter']) }} @else # @endif" target="_blank"><img src="{{ url('public/img/icon/twitter-circle-512.png') }}" alt="Twitter"></a>
                    <a href="@if(isset($config['instagram']) && $config['instagram'] !==null) {{ url($config['instagram']) }} @else # @endif" target="_blank"><img src="{{ url('public/img/icon/instagram_circle_black-128.png') }}" alt="Instagram"></a>
                </div>
            </div>
            <div class="col-md-6">
                <span class="pull-left">Đăng ký nhận tin mới</span>
                <div class="newsletter ">
                    {{ Form::open(array('action' => 'NewsletterController@postRegister', 'id' => 'newsletter-validate')) }}
                    <input type="text" name="newsletter" id="newsletter" placeholder="Nhập email của bạn" />
                    <button type="submit" class="active" data-loading-text="Loading..." data-success-text="Success" data-error-text="Errors" id="newsletter-submit">Đăng ký</button>
                    {{ Form::close() }}
                </div>
            </div>
        </div>

    </div>
    <div class="bottom-footer">
        <div class="col-md-12">
            <div class="col-md-3">
                <div id="logo-footer">
                    <a href="{{ url('/') }}"><img src="{{ url('public/img/logo.png') }}" alt="Logo" class="img-responsive"></a>
                </div>
            </div>
            <div class="col-md-3">
                <div class="aboutus">
                    <div class="tittle-box-footer">
                        {{ $config['name'] }}
                    </div>
                    <div class="content-box-footer">
                        <ul class="list-unstyled">
                            <li>Điện thoại: <strong>{{ $config['phone'] }}</strong></li>
                            <li>Email: <strong>{{ HTML::mailto($config['email']) }}</strong></li>
                            <li>Địa chỉ: <strong>{{ $config['address'] }}</strong></li>

                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="customer">
                    <div class="tittle-box-footer">
                        Chăm sóc khách hàng
                    </div>
                    <div class="content-box-footer">
                        <ul class="list-unstyled">
                            <li><a href="{{ action('IntroController@getIndex') }}">Giới thiệu</a></li>
                            <li><a href="{{ action('ContactController@getIndex') }}">Liên hệ</a></li>
                            <li><a href="{{ action('FaqController@getIndex') }}">Hướng dẫn mua hàng</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="map">
                    <div class="tittle-box-footer">
                        BẢN ĐỒ
                        <div class="content-box-footer">
                            <a href="{{ $config['map_link'] }}" target="_blank">Google Map</a>
<!--                            <a href="{{ action('MapController@getIndex') }}">Google Map</a>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div id="copy">
                Copyright &copy; TNT 2014
            </div>
        </div>
    </div>
    <!--end .bottom-footer -->
</div>