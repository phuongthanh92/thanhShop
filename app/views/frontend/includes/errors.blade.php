@if($errors->any())
<div class="alert alert-danger">
    <a href="#" data-dismiss="alert" class="close">×</a>
    <h4 class="alert-heading">Bạn vui lòng kiểm tra lại dữ liệu!</h4>
    <ul>
        {{ implode('',$errors->all('<li>:message</li>')) }}
    </ul>
</div>
@endif