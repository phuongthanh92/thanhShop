@extends('backend.layouts.default')

@section('breadcrumb')
<li>Thông tin website</li>
@stop
@section('scripts')
<!--{{ HTML::script('public/js/backend/project/setting.js') }}-->
@stop
@section('content')
<h3 class="heading">Thông tin website</h3>
<div class="row-fluid">
    {{ Form::model($setting, array('action'=>array('AdminSettingController@postUpdate'), 'id'=>'setting',
    'class'=>'span12')) }}
    <div class="formSep">
        <div class="row-fluid">
            <div class="span12">
                @include('backend.includes.errors')
                @include('backend.includes.success')
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label>Tên website <span class="f_req"> * </span> </label>
                {{ Form::text('name',null,array('class'=>'span8')) }}
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label>Text logo <span class="f_req"> * </span> </label>
                {{ Form::text('text_logo',null,array('class'=>'span8')) }}
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label>Địa chỉ <span class="f_req"> * </span> </label>
                {{ Form::text('address',null,array('class'=>'span8')) }}
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label>Email <span class="f_req"> * </span> </label>
                {{ Form::text('email',null,array('class'=>'span8')) }}
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label>Số điện thoại <span class="f_req"> * </span> </label>
                {{ Form::text('phone',null,array('class'=>'span8')) }}
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label>Đường dẫn Google Map <span class="f_req"> * </span> </label>
                {{ Form::text('map_link',null,array('class'=>'span8')) }}
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label>Facebook <span class="f_req"> * </span> </label>
                {{ Form::text('facebook',null,array('class'=>'span8')) }}
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label>Meta Title </label>
                {{ Form::text('meta_title',null,array('class'=>'span8')) }}
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label>Meta keywords</label>
                {{ Form::textarea('meta_keyword',null,array('class'=>'span8', 'cols'=>'10', 'rows'=>'4')) }}
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label>Meta description</label>
                {{ Form::textarea('meta_description',null,array('class'=>'span8', 'cols'=>'10', 'rows'=>'4')) }}
            </div>
        </div>
    </div>
    <div class="form-actions">
        <div class="row-fluid">
            <button type="submit" class="btn">Cập nhật</button>
        </div>
    </div>
    {{ Form::close() }}
</div>
@stop