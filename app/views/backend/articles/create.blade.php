@extends('backend.layouts.default')

@section('scripts')
@include('backend.includes.filemanager')
{{ HTML::script('public/js/backend/project/slug.js') }}
{{ HTML::script('public/js/backend/project/articles.js') }}
@stop
@section('breadcrumb')
<li>{{ link_to_action('AdminArticlesController@getIndex', 'Quản lý bài viết') }}</li>
<li>Thêm bài viết mới</li>
@stop

@section('content')
<h3 class="heading">Thêm bài viết</h3>
<div class="span11">
    {{ Form::open(array('action'=>'AdminArticlesController@postCreate', 'enctype'=> 'multipart/form-data')) }}
    <div class="formRow">
        <div class="row-fluid">
            <div class="span10">
                @include('backend.includes.errors')
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label form="title">Tiêu đề <span class="f_req"> * </span> </label>
                {{ Form::text('title', null, array('id'=>'title', 'class' => 'span12') ) }}
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label form="slug">Đường dẫn thân thiện <span class="f_req"> * </span> </label>
                {{ Form::text('slug', null, array('id'=>'slug', 'class' => 'span12') ) }}
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label form="short_description">Mô tả ngắn gọn<span class="f_req"> * </span></label>
                {{ Form::textarea('short_description', null, array('id'=>'short_description', 'class'=>'span12', 'rows'=>5 )) }}
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label form="content">Nội dung <span class="f_req"> * </span></label>
                {{ Form::textarea('content', null, array('id'=>'content', 'class'=>'span12 tinyMceFile')) }}
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label form="content">Hình ảnh</label>
                {{ Form::file('image', array('id'=>'image', 'accept'=>'image/*')) }}
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label for="status">Nhóm <span class="f_req"> * </span></label>
                <label class="radio">
                    <input type="radio" name="type" id="type_articles" value="1" checked>
                    Bài viết
                </label>
                <label class="radio">
                    <input type="radio" name="type" id="type_faq" value="2">
                    Câu hỏi thường gặp
                </label>
                <label class="radio">
                    <input type="radio" name="type" id="type_intro" value="3">
                    Giới thiệu
                </label>
                <label class="radio">
                    <input type="radio" name="type" id="type_email" value="4">
                    Email template
                </label>
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label for="status">Trạng thái <span class="f_req"> * </span></label>
                {{ Form::select('status', array(1 => 'Hiển thị',0 => 'Ẩn'), 1) }}
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label for="meta_title">Meta Title</label>
                {{ Form::text('meta_title', null, array('id'=>'meta_title', 'class' => 'span12') ) }}
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label for="meta_keyword">Meta Keywords</label>
                {{ Form::textarea('meta_keyword', null, array('id'=>'meta_keyword', 'class'=>'span12 meta-seo', 'rows'=>3)) }}
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label for="meta_description">Meta Description</label>
                {{ Form::textarea('meta_description', null, array('id'=>'meta_description', 'class'=>'span12 meta-seo', 'rows'=>3)) }}
            </div>
        </div>
    </div>
    <div class="form-actions">
        <button type="reset" class="btn btn-warning">Làm lại</button>
        <button type="submit" class="btn btn-success">Thêm mới</button>
    </div>
    {{ Form::close() }}
</div>
@stop