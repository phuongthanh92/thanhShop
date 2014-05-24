@extends('backend.layouts.default')

@section('breadcrumb')
    <li>Quản lý nhóm thuộc tính</li>
@stop

@section('scripts')
{{ HTML::script('public/assets/backend/js/project/attribute.js') }}
<script>
    $(document).ready(function(){
        attribute.attribute_delete();
    })
</script>
@stop
@section('content')
<div class="row-fluid heading">
    <div class="span12">
        <h3>
            Quản lý nhóm thuộc tính
            <div class="btn-group pull-right">
                <a href="{{ action('AdminAttGroupController@getCreate') }}" class="btn">
                    <span class="icon-plus-sign"></span> Thêm nhóm thuộc tính
                </a>
            </div>
        </h3>
    </div>
</div>

<table class="table table-striped" data-provides="rowlink">
    <thead>
    <tr>
        <th>Nhóm thuộc tính</th>
        <th class="text-center">Thời gian tạo</th>
        <th class="text-center">Thời gian sửa</th>
    </tr>
    </thead>
    <tbody>
    @foreach($groups as $group)
    <tr>
        <td>{{ link_to_action('AdminAttGroupController@getEdit', $group->group_name, $group->_id, array('title' => 'Xem chi tiết')) }}</td>
        <td class="text-center">{{ date('d-m-y H:i', strtotime($group['created_at'])) }}</td>
        <td class="text-center">{{ date('d-m-y H:i', strtotime($group['updated_at'])) }}</td>
    </tr>
    @endforeach
    </tbody>
</table>
<div class="pagination pagination-right">
<!--     $attributes->links() -->
</div>
@stop