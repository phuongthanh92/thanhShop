@if(isset($success))
<div class="alert alert-success alert-block">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <h4>{{ $success }}</h4>
</div>
@endif
@if(Session::has('success'))
<div class="alert alert-success alert-block">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <h4>{{ Session::get('success') }}</h4>
</div>
@endif