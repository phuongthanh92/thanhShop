@extends('backend.layout.default')
@section('content')
<h3 class="heading">Thêm danh mục sản phẩm</h3>
<div class="row-fluid">
    <div class="span3">
        <div class="span3">
            <div id="jstree" data-url="{{ action('AdminCategoryController@getData') }}">{{ $menu }}</div>

            <div class="row-fluid">
                <div id="event_result" class="span10"></div>
                <div id="result_fuck" class="span10"></div>
            </div>
            <button class="btn btn-gebo" id="fuck">Save</button>
        </div>
    </div>
    <div class="span9">
        {{ Form::open(array('action' => 'AdminCategoryController@postCreate','id'=>'form_validation','class'=>'form_validation')) }}
        <div class="formRow">
            <div class="row-fluid">
                <div class="span12">
                    @include('backend.include.error')
                    @include('backend.include.success')
                </div>
            </div>
            <div class="row-fluid">
                <div class="span12">
                    <label>Tên danh mục <span class="f_req">*</span></label>
                    {{ FORM::text('name','',array('class'=>'span8','id'=>'category_name')) }}
                </div>
            </div>
            <div class="row-fluid">
                <div class="span12">
                    <label>Danh mục cha <span class="f_req">*</span></label>
                    {{ FORM::select('parent', $parent, 0) }}
                </div>
            </div>
            <div class="row-fluid">
                <div class="span12">
                    <label>URL Key <span class="f_req">*</span></label>
                    {{ FORM::text('url_key','',array('class'=>'span8','id'=>'category_url_key')) }}
                    <br><br><span class="help-block">Url key chỉ chứa các ký tự từ a-z và dấu gạch ngang (-)</span>
                </div>
            </div>
            <div class="row-fluid">
                <div class="span12">
                    <label>Meta Keywords </label>
                    {{ FORM::textarea('meta_keyword','',array('class'=>'span8','rows'=>'5')) }}
                </div>
            </div>
            <div class="row-fluid">
                <div class="span12">
                    <label>Meta Description </label>
                    {{ FORM::textarea('meta_description','',array('class'=>'span8','rows'=>'7')) }}
                </div>
            </div>
            <div class="row-fluid">
                <div class="span12">
                    <label>Hoạt động <span class="f_req">*</span></label>
                    {{ FORM::select('active',array(1=>'Có',2=>'Không'),1) }}
                </div>
            </div>
            <div class="form-actions">
                <button class="btn btn-inverse" type="submit">Thêm mới</button>
                <button class="btn" type="reset">Làm lại</button>
            </div>
        </div>
        {{ FORM::close() }}
    </div>
</div>
@stop
@section('title')
Quản lý danh mục sản phẩm
@stop
@section('breadCrumb')
<li>{{ link_to_action('AdminCategoryController@getIndex','Quản lý danh mục') }}</li>
<li>Thêm danh mục sản phẩm</li>
@stop
@section('script')
{{ HTML::script('public/js/backend/jstree/jstree.min.js') }}
{{ HTML::script('public/js/backend/category.js') }}
@stop
@section('style')
{{ HTML::style('public/css/jstree/style.min.css') }}
@stop

