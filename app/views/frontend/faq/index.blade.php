@extends('frontend.layouts.default')

@section('title')
    {{ $title }} :: @parent
@stop
@section('scripts')
<script>$('.collapse').collapse()</script>
@stop
@section('breadcrumb')
<li>Hướng dẫn mua hàng</li>
@stop

@section('content')
<div class="container">
    <section id="intro">
        <div class="panel-group" id="accordion">
            @if(count($faqs)==0)
            Chưa có nội dung
            @else
            @foreach($faqs as $key => $faq)
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse-{{$faq->id}}">
                            {{ $faq->title }}
                        </a>
                    </h4>
                </div>
                <div id="collapse-{{$faq->id}}" class="panel-collapse collapse @if($key != 0) in @endif">
                    <div class="panel-body">
                        {{ $faq->content }}
                    </div>
                </div>
            </div>
            @endforeach
            @endif
        </div>
    </section>
</div>
@stop
