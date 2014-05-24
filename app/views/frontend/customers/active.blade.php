@extends('frontend.layouts.default')
@section('content')
<section id="active">
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="sidebar">
                    @widget_sidebar
                </div><!-- end .sidebar -->
            </div>
            <div class="col-md-9">
                <div class="personal-box">
                    <div class="tittle-pbox">
                        Kích hoạt tài khoản
                    </div>
                    <div class="content-box">
                        @if(isset($send))
                            <p>
                                Mã kích hoạt đã được gửi đến email của bạn.
                                Bạn vui lòng kiểm tra trong hộp thư  đến hoặc trong thư mục Spam
                            </p>
                        @endif
                        @if(isset($active_success))
                        <p>
                            Tài khoản của bạn đã được kích hoạt
                        </p>
                        @endif
                        @if(isset($active_error))
                        <p>
                            Link không tồn tại
                        </p>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

@stop