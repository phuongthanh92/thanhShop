@extends('frontend.layouts.default')
@section('title')
{{ $title }}  :: @parent
@stop
@section('breadcrumb')
<li>{{ link_to_action('CustomerController@getProfile', 'Thông tin cá nhân') }} </li>
<li>Sổ địa chỉ</li>
@stop

@section('content')
<section id="manage_add">
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="sidebar">
                    @include('frontend/includes.sidebar_user')
                </div><!-- end .sidebar -->
            </div>
            <div class="col-md-9">
                <div class="personal-box">
                    <div class="tittle-pbox">
                        Sổ địa chỉ của bạn
                    </div>
                    <div class="content-pbox">
                        @if(count($address)==0)
                            Sổ địa chỉ trống
                        @else
                        <table class="table table-responsive">
                            <thead>
                            <tr>
                                <th>Họ và tên</th>
                                <th>Địa chỉ</th>
                                <th>Điện thoại</th>
                                <th>Xóa/Sửa</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($address as $add)
                            <tr>
                                <td>{{ $add->full_name }}</td>
                                <td>
                                    <?php
                                    $districts = $add->districts()->get()->last();
                                    $provinces = $districts->provinces()->get()->last();
                                    $tmp = $districts->name . ' - ' . $provinces->name;
                                    ?>
                                    {{ $add->address }} - {{ $tmp }}
                                </td>
                                <td>{{ $add->phone }}</td>
                                <td>
                                    <a href="javascript:void(0)" class="remove remove-address" data-id="{{ $add->id }}" title="Xoá">
                                        <span class="glyphicon glyphicon-remove"></span>
                                    </a> /
                                    <a href="javascript:void(0)" class="edit-address" data-id="{{ $add->id }}" data-name="{{ $add->full_name }}" data-address="{{ $add->address }}" data-phone="{{ $add->phone }}" data-districts="{{ $add->districts_id }}">
                                        <span class="glyphicon glyphicon-edit"></span>
                                    </a>
                                </td>
                            </tr>
                            @endforeach
                            </tbody>
                        </table>
                        <div class="page">
                            {{ $address->links() }}
                        </div>
                        @endif
                        <div class="col-sm-12">
                            <button type="button" id="add" data-toggle="modal" data-target="#add-address">Thêm địa chỉ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade addAddress" id="edit-address" tabindex="-1" role="dialog" aria-labelledby="Thêm địa chỉ nhận hàng" aria-hidden="true">
        <form class="forgot-address modal-form" id="formEditAddress" action="{{ action('AddressController@postUpdate') }}"
            method="post">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title" id="myModalLabel"> Cập nhật địa chỉ</h4>
                        <input type="hidden" name="id" id="e_id">
                    </div>
                    <div class="modal-body">
                        <div class="row">&nbsp;</div>
                        <div class="row">
                            <label class="control-label col-sm-3" for="e_full_name">
                                Họ và tên <span class="f_req">(*)</span>
                            </label>
                            <div class="col-sm-9">
                                <input type="text" id="e_full_name" name="full_name" class="form-control"/>
                            </div>
                        </div>
                        <div class="row">
                            <label class="control-label col-sm-3" for="e_address">
                                Địa chỉ <span class="f_req">(*)</span>
                            </label>
                            <div class="col-sm-9">
                                <input type="text" id="e_address" name="address" class="form-control"/>
                            </div>
                        </div>
                        <div class="row">
                            <label class="control-label col-sm-3" for="e_phone">
                                Số điện thoại <span class="f_req">(*)</span>
                            </label>
                            <div class="col-sm-9">
                                <input type="text" id="e_phone" name="phone" class="form-control"/>
                            </div>
                        </div>
                        <div class="row">
                            <label class="control-label col-sm-3" for="e_province_id">
                                Tỉnh/Thành phố <span class="f_req">(*)</span>
                            </label>
                            <div class="col-sm-3">
                                <select id="e_province_id" name="province_id">
                                    <option value="">Chọn một</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <label class="control-label col-sm-3" for="e_districts_id">
                                Quận/Huyện <span class="f_req">(*)</span>
                            </label>
                            <div class="col-sm-3">
                                <select id="e_districts_id" name="districts_id">
                                    <option value="0">Chọn một</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">&nbsp;</div>
                    </div>
                    <div class="modal-footer">
                        <button type="reset" data-dismiss="modal">Huỷ</button>
                        <button type="submit" data-save-text="Updating..." id="editSubmit">Cập nhật địa chỉ</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
    <div class="modal fade addAddress orderAddress" id="add-address" tabindex="-1" role="dialog" aria-labelledby="Thêm địa chỉ nhận hàng" aria-hidden="true">
        <form class="forgot-address modal-form" id="formAddress" action="{{ action('AddressController@postCreate') }}"
            method="post">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title" id="myModalLabel"> Thêm địa chỉ mới</h4>
                    </div>
                    <div class="modal-body">
                        <div class="row">&nbsp;</div>
                        <div class="row">
                            <label class="control-label col-sm-3" for="full_name">
                                Họ và tên <span class="f_req">(*)</span>
                            </label>
                            <div class="col-sm-9">
                                <input type="text" id="name" name="full_name" class="form-control"/>
                            </div>
                        </div>
                        <div class="row">
                            <label class="control-label col-sm-3" for="address">
                                Địa chỉ <span class="f_req">(*)</span>
                            </label>
                            <div class="col-sm-9">
                                <input type="text" id="address" name="address" class="form-control"/>
                            </div>
                        </div>
                        <div class="row">
                            <label class="control-label col-sm-3" for="phone">
                                Số điện thoại <span class="f_req">(*)</span>
                            </label>
                            <div class="col-sm-9">
                                <input type="text" id="phone" name="phone" class="form-control"/>
                            </div>
                        </div>
                        <div class="row">
                            <label class="control-label col-sm-3" for="province_id">
                                Tỉnh/Thành phố <span class="f_req">(*)</span>
                            </label>
                            <div class="col-sm-3">
                                <select id="province_id" name="province_id">
                                    <option value="">Chọn một</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <label class="control-label col-sm-3" for="districts_id">
                                Quận/Huyện <span class="f_req">(*)</span>
                            </label>
                            <div class="col-sm-3">
                                <select id="districts_id" name="districts_id">
                                    <option value="0">Chọn một</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">&nbsp;</div>
                    </div>
                    <div class="modal-footer">
                        <button type="reset" data-dismiss="modal">Huỷ</button>
                        <button type="submit" data-save-text="Saving..." id="addSubmit">Lưu địa chỉ</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</section>
@stop