@extends('backend.layouts.default')

@section('breadcrumb')
    <li>{{ link_to_action('AdminProductController@getIndex', 'Quản lý Sản phẩm') }}</li>
    <li>Thêm sản phẩm</li>
@stop

@section('scripts')
    <script>
        $(document).ready(function(){
            $('#submit').click(function(){
                window.location.replace('{{ action("AdminProductController@getCreate") }}/'+ $('#group').val());
            })
        });
    </script>
@stop
@section('content')
<h3 class="heading">Chọn nhóm thuộc tính</h3>
<div class="span12">
    <div class="formSep">
        <select name="group" id="group">
            @foreach($group as $option)
                <option value="{{ $option->_id }}">{{ $option->group_name }}</option>
            @endforeach
        </select>
    </div>
    <div class="form-actions">
        <a id="submit" href="javascript:void(0)" class="btn btn-inverse" >Tiếp tục</a>
    </div>

</div>
@stop