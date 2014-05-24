@extends('frontend.layouts.default')
@section('title')
{{ $title }}  :: @parent
@stop
@section('breadcrumb')
    <li>Thông tin cá nhân</li>
@stop
@section('content')
<section id="profile">
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="sidebar">
                    @include('frontend/includes.sidebar_user')
                </div><!-- end .sidebar -->
            </div>
            <div class="col-md-9">
                <div class="col-md-12">
                    <div class="personal-box">
                        <div class="tittle-pbox">
                            Thông tin cá nhân
                        </div>
                        <div class="content-pbox">
                            <ul class="list-unstyled">
                                <li>
                                    Họ tên: <span id="name">{{ $customer->full_name }}</span>
                                </li>
                                <li>
<!--                                    Ngày sinh: <span id="birth">@if($customer->birthday == null) <i>Chưa cập nhật</i> @else date_format($customer->birthday, 'd/m/Y') @endif</span>-->
                                </li>
                                <li>
                                    Giới tính:<span id="sex">@if($customer->gender === null) <i>Chưa cập nhật</i> @elseif($customer->gender === 1) Nam @else Nữ @endif</span>
                                </li>
                                <li>
                                    Email : <span id="email">{{ $customer->email }}</span>
                                </li>
                                @if($customer->active == 0)
                                <li>
                                    Kích hoạt :
                                    <span>Chưa kích hoạt
                                        <a style="float: none; text-align: left; display: inline; position: static" href="{{ action('CustomerController@getEmailActive') }}">
                                            Click vào đây để gửi lại email kích hoạt
                                        </a>
                                    </span>
                                </li>
                                @endif
                            </ul>
                            <a href="{{ action('CustomerController@getEdit') }}">Thay đổi thông tin cá nhân</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@stop