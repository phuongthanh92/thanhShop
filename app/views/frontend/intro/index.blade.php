@extends('frontend.layouts.default')

@section('title')
{{ $title }} :: @parent
@stop

@section('breadcrumb')
<li>Giới thiệu</li>
@stop

@section('content')
<div class="container">
    <section id="intro">
        @if(empty($intro))
        Chưa có nội dung
        @else
        {{ $intro->content }}
        @endif
    </section>
</div>
@stop