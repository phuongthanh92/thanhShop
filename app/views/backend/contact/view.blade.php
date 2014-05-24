@extends('backend.layouts.default')

@section('breadcrumb')
<li>{{ link_to_action('AdminContactController@getIndex', 'Quản lý liên hệ') }}</li>
<li>{{ $contact->title }}</li>
@stop

@section('content')
<div id="msg_view" class="tab-pane active">
    <div class="doc_view">
        <div class="doc_view_header">
            <dl class="dl-horizontal">
                <dt>Tiêu đề</dt>
                <dd>{{ $contact->title }}</dd>
                <dt>Email</dt>
                <dd><span>{{ HTML::mailto($contact->email) }}</span></dd>
                <dt>Thời gian</dt>
                <dd>{{ date_format($contact->created_at, 'd-m-Y H:i:s') }}</dd>
            </dl>
        </div>
        <div class="doc_view_content">
            {{ $contact->content }}
        </div>
        <div class="doc_view_footer clearfix">
            <div class="btn-group pull-left">
                <a class="btn contact-reply" href="javascript:void(0)"><i class="icon-pencil"></i> Trả lời</a>
                <a class="btn" href="{{ action('AdminContactController@getIndex') }}"><i class="icon-share-alt"></i> Quay lại</a>
                <a class="btn contact-delete" href="javascript:void(0)"><i class="icon-trash"></i> Xoá</a>
            </div>
        </div>
    </div>
</div>
<div class="formSep mail_reply" style="display: none">
    <label for="mail_message">Nội dung</label>
    <textarea class="span12 auto_expand" rows="12" cols="10" id="mail_message" name="mail_message"></textarea>

    <div>
        <button class="btn btn-gebo" type="submit" id="mail_send">Gửi</button>
    </div
</div>
{{ Form::open(array('action'=>array('AdminContactController@postDelete', $contact->id), 'class'=>'hidden', 'id'=>'frm-contact-delete')) }}
{{ Form::close() }}
@stop