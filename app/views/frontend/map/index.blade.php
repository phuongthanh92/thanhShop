@extends('frontend.layouts.default')

@section('title')
    {{ $title }} :: @parent
@stop

@section('content')
    <pre>
        {{ print_r($config) }}
    </pre>
@stop
