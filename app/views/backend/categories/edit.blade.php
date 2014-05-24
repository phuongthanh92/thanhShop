@extends('backend.layouts.default')

@section('breadcrumb')
<li>{{ link_to_action('AdminCategoriesController@getIndex', 'Quản lý danh mục') }}</li>
<li>Cập nhật danh mục</li>
@stop
@section('scripts')
{{ HTML::script('public/js/backend/project/slug.js') }}
{{ HTML::script('public/js/backend/project/categories.js') }}
@stop
@section('content')
<div class="span12">
    <div class="span8">
        {{ Form::model($category ,array('action'=>'AdminCategoriesController@postEdit','id'=>'form_validation_ttip','class'=>'form_validation_ttip'))}}
        {{ Form::hidden('id')}}
        <div class="formSep">
            <div class="row-fluid">
                <div class="span12">
                    <div class="span12">
                        @include('backend.includes.errors')
                        @include('backend.includes.success')
                    </div>
                </div>
            </div>
            <div class="row-fluid">
                <div class="span12">
                    <label for="name">Tên danh mục <span class="f_req"> * </span> </label>
                    <div class="span12">
                        {{ Form::text('name',null,array('class'=>'span10',  'id'=>'category_name'))}}
                    </div>
                </div>
            </div>
            <div class="row-fluid">
                <div class="span12">
                    <label for="slug">Đường dẫn thân thiên <span class="f_req"> * </span> </label>
                    <div class="span12">
                        {{ Form::text('slug',null,array('class'=>'span10', 'id'=>'category_slug'))}}
                    </div>
                </div>
            </div>
            <div class="row-fluid">
                <div class="span12">
                    <label for="meta_title">Meta Title</label>

                    <div class="span12">
                        {{ Form::textarea('meta_title',null,array('class'=>'span10','cols'=>10, 'rows'=>5))}}
                    </div>
                </div>
            </div>
            <div class="row-fluid">
                <div class="span12">
                    <label for="meta_keyword">Meta Keywords</label>

                    <div class="span12">
                        {{ Form::textarea('meta_keyword',null,array('class'=>'span10','cols'=>10, 'rows'=>5))}}
                    </div>
                </div>
            </div>
            <div class="row-fluid">
                <div class="span12">
                    <label for="meta_description">Meta Description</label>

                    <div class="span12">
                        {{ Form::textarea('meta_description',null,array('class'=>'span10','cols'=>10, 'rows'=>5))}}
                    </div>
                </div>
            </div>
            <div class="row-fluid">
                <div class="span12">
                    <label for="meta_title">Hoạt động</label>
                    <div class="span12">
                        {{ Form::select('active', array(1=>'Có', 0=>'Không'))}}
                    </div>
                </div>
            </div>
        </div>
        <div class="form-action">
            <button type="submit" class="btn btn-primary">Cập nhật</button>
            <button type="button" class="btn" data-dismiss="modal">Huỷ</button>
        </div>
        {{ Form::close()}}
    </div>
</div>
@stop