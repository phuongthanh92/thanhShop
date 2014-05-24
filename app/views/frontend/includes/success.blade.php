@if(isset($success))
<div class="alert alert-success">
    <a href="#" data-dismiss="alert" class="close">×</a>
    <h4>{{ $success }}</h4>
</div>
@endif
@if(Session::has('success'))
<div class="alert alert-success">
    <a href="#" data-dismiss="alert" class="close">×</a>
    <h4>{{ Session::get('success') }}</h4>
</div>
@endif