@extends('backend.layouts.default')

@section('breadcrumb')
<li>{{ link_to_action('AdminArticlesController@getIndex', 'Quản lý bài viết') }}</li>
@stop

@section('scripts')
{{ HTML::script('public/js/backend/project/articles.js') }}
@stop
@section('content')
<div class="row-fluid heading">
    <div class="span12">
        <h3>
            Danh sách bài viết
            <div class="btn-group pull-right">
                <a href="{{ action('AdminArticlesController@getCreate') }}" class="btn">
                    <span class="icon-plus-sign"></span> Thêm mới
                </a>
            </div>
        </h3>
    </div>
</div>
<div class="row-fluid">
    <div class="span12">
        <table class="table table-striped">
            <thead>
            <tr>
                <th>Tiêu đề</th>
                <th>Nhóm</th>
                <th>Trạng thái</th>
                <th>Thời gian cập nhật</th>
                <th>Tuỳ chọn</th>
            </tr>
            </thead>
            <tbody>
            @foreach($articles as $article)
            <tr>
                <td>{{ $article->title }}</td>
                <td>
                    @if($article->type===1)
                    Bài viết
                    @elseif($article->type===2)
                    FAQ
                    @elseif($article->type===3)
                    Giới thiệu
                    @else
                    Email Template
                    @endif
                </td>
                <td>@if($article->status == 1) Hiển thị @else Ẩn @endif</td>
                <td>{{ date_format($article->updated_at, 'd-m-Y H:i:s') }}</td>
                <td>
                    <a href="{{ action('AdminArticlesController@getEdit', $article->id) }}" title="Edit"><i class="icon-pencil"></i></a>
                    <a href="javascript: void(0)" class="article-delete" title="Xoá" data-id="{{$article->id}}" data-title="{{$article->title}}"><i class="icon-trash"></i></a>
                </td>
            </tr>
            @endforeach
            </tbody>
        </table>
    </div>
</div>
<div class="row-fluid">
    <div class="pagination pagination-right">
        {{ $articles->links() }}
    </div>
</div>

<div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            {{ Form::open(array('action'=>'AdminArticlesController@postDelete')) }}
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">Xác nhận</h4>
            </div>
            <div class="modal-body">
                <p id="deleteMessage"></p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Không</button>
                <input type="hidden" name="id" id="postValue" value=""/>
                <input type="submit" class="btn btn-danger" value="Xoá bài viết"/>
            </div>
            {{ Form::close(); }}
        </div>
    </div>
</div>
@stop