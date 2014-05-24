@extends('backend.layouts.default')

@section('breadcrumb')
<li>Quản lý danh mục</li>
@stop
@section('styles')
{{ HTML::style('public/css/backend/nestable.css') }}
@stop
@section('scripts')
{{ HTML::script('public/js/backend/jquery.nestable.js') }}
{{ HTML::script('public/js/backend/project/categories_nestable.js') }}
{{ HTML::script('public/js/backend/project/categories.js') }}
{{ HTML::script('public/js/backend/project/slug.js') }}
@stop
@section('content')

<div class="row-fluid heading">
    <div class="span12">
        <h3>
            Quản lý danh mục
            <div class="btn-group pull-right">
                <a href="javascript: void(0)" class="btn newModal">
                    <span class="icon-plus-sign"></span> Thêm nhóm thuộc tính
                </a>
            </div>
        </h3>
    </div>
</div>
<div class="row-fluid">
    <div class="span12">
        <div class="span6">
            @include('backend.includes.success')
            @include('backend.includes.errors')
        </div>
    </div>
    <div class="span12">
        <div class="row-fluid">
            <div class="dd" id="nestable" data-url="{{ action('AdminCategoriesController@postIndex') }}">
                {{ $menu }}
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <button class="btn btn-primary btn-save" type="button">Lưu lại</button>
                <span id="success-indicator" style="display:none; margin-left: 10px;">
                    <i class="splashy-check"></i> Đã cập nhật vào CSDL
                </span>
            </div>
        </div>
    </div>
    <div style="clear: both"></div>
</div>
<div class="row-fuild">
    <!-- Create new item Modal -->
    <div class="span12">
        <div class="modal fade bs-example-modal-lg" id="newModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
             aria-hidden="true" style="display: none">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    {{
                    Form::open(array('action'=>'AdminCategoriesController@postCreate','id'=>'form_validation_ttip','class'=>'form_validation_ttip','role'=>'form'))}}
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title">Thêm danh mục mới</h4>
                    </div>
                    <div class="modal-body">
                        <div class="row-fluid">
                            <div class="span12">
                                <label for="category_name">Tên danh mục <span class="f_req"> * </span> </label>

                                <div class="span12">
                                    {{ Form::text('name',null,array('class'=>'span10', 'id'=>'category_name'))}}
                                </div>
                            </div>
                        </div>
                        <div class="row-fluid">
                            <div class="span12">
                                <label for="category_slug">Đường dẫn thân thiên <span class="f_req"> * </span> </label>

                                <div class="span12">
                                    {{ Form::text('slug',null,array('class'=>'span10', 'id'=>'category_slug'))}}
                                </div>
                            </div>
                        </div>
                        <div class="row-fluid">
                            <div class="span12">
                                <label for="meta_title">Meta Title</label>

                                <div class="span12">
                                    {{
                                    Form::textarea('meta_title',null,array('class'=>'span10','id'=>'meta_title','cols'=>10,
                                    'rows'=>3))}}
                                </div>
                            </div>
                        </div>
                        <div class="row-fluid">
                            <div class="span12">
                                <label for="meta_keyword">Meta Keywords</label>

                                <div class="span12">
                                    {{ Form::textarea('meta_keyword',null,array('class'=>'span10', 'id'=>'meta_keyword',
                                    'cols'=>10, 'rows'=>3))}}
                                </div>
                            </div>
                        </div>
                        <div class="row-fluid">
                            <div class="span12">
                                <label for="meta_description">Meta Description</label>

                                <div class="span12">
                                    {{ Form::textarea('meta_description',null,array('class'=>'span10',
                                    'id'=>'meta_description', 'cols'=>10, 'rows'=>3))}}
                                </div>
                            </div>
                        </div>
                        <div class="row-fluid">
                            <div class="span12">
                                <label for="active">Hiển thị</label>

                                <div class="span12">
                                    {{ Form::select('active', array(1=>'Có', 0=>'Không'))}}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary">Thêm mới</button>
                        <button type="button" class="btn" data-dismiss="modal">Huỷ</button>
                    </div>
                    {{ Form::close()}}
                </div>
                <!--         /.modal-content -->
            </div>
            <!--     /.modal-dialog -->
        </div>
        <!-- /.modal -->
    </div>
    <div style="clear: both"></div>
    <!-- Delete item Modal -->
    <div class="span12">
        <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
             aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    {{ Form::open(array('action'=>'AdminCategoriesController@postDelete')) }}
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title">Xác nhận</h4>
                    </div>
                    <div class="modal-body">
                        <p>Bạn có muốn xoá danh mục này không?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Không</button>
                        <input type="hidden" name="delete_id" id="postvalue" value=""/>
                        <input type="submit" class="btn btn-danger" value="Xoá danh mục"/>
                    </div>
                    {{ Form::close(); }}
                </div>
            </div>
        </div>
    </div>
</div>
@stop

