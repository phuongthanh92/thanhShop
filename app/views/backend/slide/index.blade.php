@extends('backend.layouts.default')

@section('scripts')
{{ HTML::script('public/js/backend/project/my_slide.js') }}
@stop

@section('breadcrumb')
<li>Quản lý slide</li>
@stop

@section('content')
<div class="row-fluid heading">
    <div class="span12">
        <h3>
            Quản lý slide
            <div class="btn-group pull-right">
                <a href="{{ action('AdminSlideController@getCreate') }}" class="btn">
                    <span class="icon-plus-sign"></span> Thêm ảnh
                </a>
            </div>
        </h3>
    </div>
</div>

<div>
    <table class="table table-bordered table-striped table_vam">
        <thead>
        <th class="text-center">Hình ảnh</th>
        <th>Tiêu đề</th>
        <th>Link</th>
        <th>Trạng thái</th>
        <th>Tuỳ chọn</th>
        </thead>
        <tbody>
        @foreach($slide as $val)
        <tr>
            <td style="width: 100px">
                <a href="{{ url($val->image) }}" title="{{ $val->title }}" class="cbox_single thumbnail ext_disabled">
                    {{ HTML::image($val->image,"$val->title", array('style'=>'height:90px;width:90px')) }}
                </a>
            </td>
            <td>{{ $val->title }}</td>
            <td>@if($val->link !== '') {{ url($val->link) }} @endif
            </td>
            <td class="text-center">@if($val->status == 1) Hiển thị @else Ẩn @endif</td>
            <td>
                <a href="{{ action('AdminSlideController@getEdit', $val->id) }}" class="sepV_a" title="Edit"><i class="icon-pencil"></i></a>
                <a href="javascript: void(0)" class="delete_toggle" data-id="{{ $val->id }}" data-image="{{ url($val->image) }}" title="Delete"><i class="icon-trash"></i></a>
            </td>
        </tr>
        @endforeach
        </tbody>
    </table>
    <div class="span12">
        <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    {{ Form::open(array('action'=>'AdminSlideController@postDelete')) }}
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title">Xác nhận</h4>
                    </div>
                    <div class="modal-body">
                        <p id="deleteMessage"></p>
                        <p>Bạn có muốn xoá ảnh này không?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Không</button>
                        <input type="hidden" name="slide" id="postValue" value=""/>
                        <input type="submit" class="btn btn-danger" value="Xoá banner"/>
                    </div>
                    {{ Form::close(); }}
                </div>
            </div>
        </div>
    </div>
</div>
@stop