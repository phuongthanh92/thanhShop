@extends('backend.layouts.default')

@section('breadcrumb')
<li>{{ link_to_action('AdminAttGroupController@getIndex', 'Quản lý nhóm thuộc tính') }}</li>
<li>Thêm nhóm thuộc tính</li>
@stop
@section('scripts')
{{ HTML::script('public/js/backend/project/att-group.js') }}
@stop
@section('styles')
{{ HTML::style('public/css/jquery-ui-themes/smoothness/jquery-ui-1.10.4.custom.min.css') }}
<style>
    .droptrue {
        list-style-type: none;
        padding: 0;
        float: left;
        margin-right: 10px;
        background: #eee;
    }

    .droptrue li, {
        margin: 5px;
        padding: 5px;
        font-size: 1.2em;
        cursor: move;
    }
</style>
@stop
@section('content')
<!--{{ Form::open(array('action' => 'AdminAttGroupController@postCreate','id'=>'form_validation_ttip','class'=>'form_validation_ttip')) }}-->
<div class="span12">
    <div class="well form-inline">
        <div class="span6">
            <label>Tên nhóm thuộc tính <span class="f_req"> * </span></label>
            <input type="text" name="name" id="group_name">
            <a href="javascript: void(0)" id="add_group" data-url="{{ action('AdminAttGroupController@postCreate') }}" class="btn">Thêm mới</a>
            <img id="loading_group" style="display: none" src="{{ asset('public/img/loading.gif') }}" alt="Loading...">
        </div>
        <div class="span5" id="group-error">

        </div>
    </div>
</div>
<div class="span12">
    <div class="span5">
        <h3 class="heading">Danh sách các thuộc tính được chọn</h3>
        <ul id="sortable1" class="droptrue span10">
            @foreach($att as $val)
            <li class="ui-state-default attribute" data-attribute="{{ $val->code }}">{{ $val->label }}</li>
            @endforeach
        </ul>
    </div>
    <div class="span5">
        <h3 class="heading">Danh sách các thuộc tính</h3>
        <ul id="sortable2" class="droptrue span10">

        </ul>
    </div>
</div>
@stop