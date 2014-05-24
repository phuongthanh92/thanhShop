@extends('frontend.layouts.default')

@section('title')
{{ $title }} :: @parent
@stop

@section('breadcrumb')
<li>Liên hệ</li>
@stop

@section('content')
{{ Form::close() }}
<div class="container">
    <section>
        {{ Form::open(array('action' => 'ContactController@postCreate', 'role'=>'form',  'id'=>'frmContact')) }}
        <div class="form-group">
            @include('backend.includes.errors')
            @include('backend.includes.success')
        </div>
        <div class="form-group">
            <label for="username">Tiêu đề</label>
            {{ Form::text('title', '', array('id'=>'title', 'placeholder'=>'Tiêu đề ý kiến của bạn')) }}
        </div>
        <div class="form-group">
            <label for="username">Email</label>
            {{ Form::text('email', '', array('id'=>'email', 'placeholder'=>'Email của bạn')) }}
        </div>
        <div class="form-group">
            <label for="username">Nội dung</label>
            {{ Form::textarea('content', '', array('id'=>'content', 'placeholder'=>'Ý kiến của bạn')) }}
        </div>
        <div class="form-group">
            <label for="username">Mã xác nhận</label>
            {{ HTML::image(Captcha::img(), 'Captcha image') }}
        </div>
        <div class="form-group">
            <label for="username">Nhập mã xác nhận</label>
            {{ Form::text('captcha', '', array('id'=>'captcha')) }}
        </div>
        <button class="btn btn-primary btn-small">Gửi ý kiến</button>
    </section>
</div>
@stop