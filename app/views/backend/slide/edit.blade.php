@extends('backend.layouts.default')

@section('scripts')
{{ HTML::script('public/js/backend/project/my_slide.js') }}
@stop

@section('breadcrumb')
<li>{{ link_to_action('AdminSlideController@getIndex', 'Quản lý slide') }}</li>
<li>Cập nhật thông tin slide</li>
@stop

@section('content')
<h3>Cập nhật slide</h3>
<div class="span8">
    {{ Form::model($slide ,array('action' =>'AdminSlideController@postUpdate')) }}
    {{ Form::hidden('id') }}
    <div class="formSep">
        <div class="row-fluid">
            <div class="span12">
                @include('backend.includes.errors')
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label>Tiêu đề</label>
                {{ Form::text('title', null, array('class'=>'span8')) }}
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label>Đường dẫn chuyển tới</label>
                {{ Form::text('link', null, array('class'=>'span8', 'placeholder'=>'javascript:void(0)')) }}
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label>Trạng thái</label>
                {{ Form::select('status', array(1=>'Hiển thị',0=>'Ẩn')) }}
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label>Hình ảnh</label>
                <img src="{{ url($slide->image) }}" style="max-height: 250px" alt="">
            </div>
        </div>
    </div>
    <div class="form-actions">
        <div class="row-fluid">
            <div class="span12">
                <button type="submit" class="btn">Cập nhật</button>
            </div>
        </div>
    </div>
</div>
@stop