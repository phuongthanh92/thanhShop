@extends('backend.layouts.default')

@section('breadcrumb')
    <li>Quản lý thuộc tính</li>
@stop

@section('scripts')
{{ HTML::script('public/js/backend/project/my_attributes.js') }}
@stop
@section('content')
<div class="row-fluid heading" id="sticker">
    <div class="span12">
        <h3>
            Quản lý thuộc tính
            <div class="pull-right">
                <div class="btn-group">
                    <a href="{{ action('AdminAttributeController@getCreate') }}" class="btn">
                        <span class="icon-plus-sign"></span> Thêm thuộc tính
                    </a>
                </div>
            </div>
        </h3>
    </div>
</div>

<table class="table table-striped table-bordered">
    <thead>
    <tr>
        <th>Mã thuộc tính</th>
        <th>Tên thuộc tính</th>
        <th class="text-center">Bắt buộc</th>
        <th class="text-center">Hệ thống</th>
        <th class="text-center">Tuỳ chọn</th>
    </tr>
    </thead>
    <tbody>
    @if(count($attributes)>0)
    @foreach($attributes as $att)
    <tr>
        <td>{{ $att->code }}</td>
        <td>{{ $att->label }}</td>
        <td class="text-center">
            @if($att->require == 1) Có @else Không @endif
        </td>
        <td class="text-center">
            @if($att->system == 1) Đồng ý @else Không @endif
        </td>
        <td class="text-center">

            @if($att->system != 1)
                {{ link_to_action('AdminAttributeController@getEdit', '', $parameters = array($att->_id), $attributes = array('class'=>'icon-eye-open','title'=>'View')) }}
                {{ link_to_action('AdminAttributeController@getEdit', '', $parameters = array($att->_id), $attributes = array('class'=>'icon-pencil','title'=>'Edit')) }}
                {{ link_to_action('AdminAttributeController@getDelete', '', $parameters = array($att->_id), $attributes = array('data-label'=>$att->label,'class'=>'icon-trash att-delete','title'=>'Delete')) }}
            @else
            {{ link_to_action('AdminAttributeController@getShow', '', $parameters = array($att->_id), $attributes = array('class'=>'icon-eye-open','title'=>'View')) }}
            @endif
        </td>
    </tr>
    @endforeach
    @else
    <tr>
        <td colspan="5">Không có thuộc tính</td>
    </tr>
    @endif
    </tbody>

</table>
@include('backend.includes.pagination')
@stop