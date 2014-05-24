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
                            {{ Form::model($customer, array('action' => array('CustomerController@postUpdate', $customer->id))) }}
                            <ul class="list-unstyled">
                                <li class="row">
                                    @include('frontend.includes.errors')
                                    @include('frontend.includes.success')
                                </li>
                                <li class="row">
                                    <div class="col-md-2">
                                        Họ tên:
                                    </div>
                                    {{ Form::text('full_name', null, array('class'=>'col-md-8')) }}
                                </li>
<!--                                <li class="row">-->
<!--                                    <div class="col-md-2">-->
<!--                                        Ngày sinh:-->
<!--                                    </div>-->
<!--                                    <div class="col-md-10">-->
<!--                                        <select name="date">-->
<!--                                            <option value="0"> - </option>-->
<!--                                            <option value="1">1</option>-->
<!--                                        </select>-->
<!--                                        <select id="month">-->
<!--                                            <option value="0"> - </option>-->
<!--                                            <option value=""></option>-->
<!--                                        </select>-->
<!--                                        <select id="year">-->
<!--                                            <option value="0"> -</option>-->
<!--                                        </select>-->
<!--                                    </div>-->
<!--                                </li>-->
                                <li class="row">
                                    <div class="col-md-2">
                                        Giới tính:
                                    </div>
                                    <div class="col-md-10">
                                        <label class="col-sm-12">
                                            <input type="radio" name="gender" value="1" @if($customer->gender === 1) checked="checked" @endif >
                                            Nam
                                        </label>
                                        <label class="col-sm-12">
                                            <input type="radio" name="gender" value="0" @if($customer->gender === 0) checked="checked" @endif >
                                            Nữ
                                        </label>
                                    </div>
                                </li>
                                <li class="row">
                                    <div class="col-md-2">
                                        Email:
                                    </div>
                                    {{ Form::text('email', null, array('class'=>'col-md-8 disabled', 'disabled')) }}
                                </li>
                                <li class="row">
                                    <label class="col-sm-2">&nbsp;</label>
                                    <button type="submit" class="button">Cập nhật</button>
                                </li>
                            </ul>
                            {{ Form::close() }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@stop