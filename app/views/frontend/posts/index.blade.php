@extends('frontend.layouts.default')

@section('breadcrumb')
<li>Bài viết</li>
<li>{{ $post->title }}</li>
@stop
@section('content')
<section id="post">
    <div class="container">
        <h3>{{ $post->title }}</h3>
        <div class="row">
            <div class="col-md-10">
                {{ $post->content }}
            </div>
        </div>
    </div>
</section>
@stop