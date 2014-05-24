@extends('backend.layouts.default')

@section('scripts')
{{ HTML::script('public/js/backend/project/my_banner.js') }}
{{ HTML::script('public/js/jquery/jquery.form.min.js') }}
<script>
    jQuery(document).ready(function(){
        $('#banner-link').typeahead({
            source: [
                @foreach($category as $val)
                    "{{ $val->slug }}",
                @endforeach
                ""
            ],
            items: 15
        });
    })
</script>
@stop

@section('breadcrumb')
<li>Quản lý banner</li>
@stop

@section('content')
<div class="row-fluid" id="banner">
    <div class="span4">
        <div class="row-fluid">
            <div class="span12 banner banner-top">
                @if(isset($banner[0]))
                <img src="{{ url($banner[0]->image) }}" title="{{ $banner[0]->title }}" alt="{{ $banner[0]->title }}" id="banner0" >
                <a href="{{ url($banner[0]->link) }}"> {{ $banner[0]->title }} </a>
                @endif
                <div class="more">
                    <i class="icon banner-edit icon-pencil" data-type="0"  data-image="{{ url($banner[0]->image) }}" data-title="{{ $banner[0]->title }}" data-url="{{ $banner[0]->link }}" style="cursor:pointer" title="Sửa"></i>
                </div>
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12 banner banner-bottom">
                @if(isset($banner[1]))
                <img src="{{ url($banner[1]->image) }}" title="{{ $banner[1]->title }}" alt="{{ $banner[1]->title }}" id="banner1" >
                <a href="{{ url($banner[1]->link) }}"> {{ $banner[1]->title }} </a>
                @endif
                <div class="more">
                    <i class="icon banner-edit icon-pencil" data-type="1"  data-image="{{ url($banner[1]->image) }}" data-title="{{ $banner[1]->title }}" data-url="{{ $banner[1]->link }}" style="cursor:pointer" title="Sửa"></i>
                </div>
            </div>
        </div>
    </div>
    <div class="span4">
        <div class="row-fluid">
            <div class="span12 banner banner-special">
                @if(isset($banner[2]))
                <img src="{{ url($banner[2]->image) }}" title="{{ $banner[2]->title }}" alt="{{ $banner[2]->title }}" id="banner2" >
                <a href="{{ url($banner[2]->link) }}"> {{ $banner[2]->title }} </a>
                @endif
                <div class="more">
                    <i class="icon banner-edit icon-pencil" data-type="2"  data-image="{{ url($banner[2]->image) }}" data-title="{{ $banner[2]->title }}" data-url="{{ $banner[2]->link }}" style="cursor:pointer" title="Sửa"></i>
                </div>
            </div>
        </div>
    </div>
    <div class="span4">
        <div class="row-fluid">
            <div class="span12 banner banner-top">
                @if(isset($banner[3]))
                <img src="{{ url($banner[3]->image) }}" title="{{ $banner[3]->title }}" alt="{{ $banner[3]->title }}" id="banner3" >
                <a href="{{ url($banner[3]->link) }}"> {{ $banner[3]->title }} </a>
                @endif
                <div class="more">
                    <i class="icon banner-edit icon-pencil" data-type="3"  data-image="{{ url($banner[3]->image) }}" data-title="{{ $banner[3]->title }}" data-url="{{ $banner[3]->link }}" style="cursor:pointer" title="Sửa"></i>
                </div>
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12 banner banner-bottom">
                @if(isset($banner[4]))
                <img src="{{ url($banner[4]->image) }}"  title="{{ $banner[4]->title }}"alt="{{ $banner[4]->title }}" id="banner4" >
                <a href="{{ url($banner[4]->link) }}"> {{ $banner[4]->title }} </a>
                @endif
                <div class="more">
                    <i class="icon banner-edit icon-pencil" data-type="4" data-image="{{ url($banner[4]->image) }}" data-title="{{ $banner[4]->title }}" data-url="{{ $banner[4]->link }}" style="cursor:pointer" title="Sửa"></i>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row-fluid">
    <div class="modal fade bs-example-modal-lg" id="dialog" tabindex="-1" style="display: none" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            {{ Form::open(array('action'=>'AdminBannerController@postUpdate', 'enctype' => 'multipart/form-data', 'class'=>'modal-form')) }}
            <div class="modal-header">
                <h3>Cập nhật banner
                    <div class="btn-group pull-right">
                        <button type="submit" class="btn btn-primary">Cập nhật</button>
                        <button type="button" class="btn btn-inverse close-modal">Huỷ</button>
                        <input type="hidden" name="type" value="" id="banner-type">
                    </div>
                </h3>
            </div>
            <div class="modal-content">
                <div class="span1">&nbsp;</div>
                <div class="span10">
                    <div class="row-fluid">
                        <div class="span12">
                            <label for="banner-title">Tiêu đề <span class="f_req">*</span> </label>
                            <input type="text" name="title" id="banner-title"  class="span10">
                        </div>
                    </div>
                    <div class="row-fluid">
                        <div class="span12">
                            <label for="banner-link">Đường dẫn chuyển đến <span class="f_req">*</span></label>
                            <input type="text" id="banner-link" name="link" class="span10">
                        </div>
                    </div>
                    <div class="row-fluid">
                        <div class="span12">
                            <label for="banner-image">Hình ảnh</label>
                            <input type="file" id="banner-image" name="image">
                        </div>
                    </div>
                    <div class="row-fluid">
                        <label>Ảnh cũ</label>
                        <img src="{{ url('public/img/wait.gif') }}" alt="Load image" id="image-old">
                    </div>
                </div>
                <div class="span1">&nbsp;</div>
            </div>
            <div class="modal-footer">

            </div>
            {{ Form::close() }}
        </div>
    </div>
</div>

@stop