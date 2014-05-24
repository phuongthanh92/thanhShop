@extends('backend.layouts.default');

@section('title')
    {{{ $title }}} - @parent
@stop

@section('breadcrumb')
    <li>Quản lý thuộc tính</li>
@stop
@section('content')
<div class="row-fluid heading">
    <div class="span12">
        <div class="btn-group">
            <a href="{{ action('AdminAttributeController@getCreateAttribute') }}"><button class="btn btn-link">Thêm thuộc tính</button></a>
        </div>
    </div>
</div>
<h3>Quản lý thuộc tính</h3>
<table class="table table-striped table-bordered">
    <thead>
        <tr>
            <th class="text-center">Mã thuộc tính</th>
            <th class="text-center">Tên thuộc tính</th>
            <th class="text-center">Hệ thống</th>
            <th class="text-center">Tuỳ chọn</th>
        </tr>
    </thead>
    <tbody>
        @foreach($attribute as $att)
        <tr>
            <td>{{ $att['code'] }}</td>
            <td>{{ $att['label'] }}</td>
            <td class="text-center">
                @if($att->system==1) Đồng ý @else Không @endif
            </td>
            <td class="text-center">
                {{ link_to_action('AdminAttributeController@getEditAttribute', '', $parameters = array($att['_id']), $attributes = array('class'=>'sepV_a icon-pencil','title'=>'Edit')) }}
                {{ link_to_action('AdminAttributeController@getEditAttribute', '', $parameters = array($att['_id']), $attributes = array('class'=>'sepV_a icon-trash','title'=>'Delete')) }}
            </td>
        </tr>
        @endforeach
    </tbody>
</table>
@stop

