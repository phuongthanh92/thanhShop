@extends('backend.layouts.default')

@section('breadcrumb')
    <li>{{ link_to_action('AdminAttributeController@getIndex', 'Quản lý thuộc tính') }}</li>
    <li>Thêm thuộc tính</li>
@stop

@section('scripts')
{{ HTML::script('public/js/backend/project/my_attributes.js') }}
@stop

@section('content')
<h3 class="heading">Thêm thuộc tính</h3>
<div class="span8">
    {{ Form::open(array('action' => 'AdminAttributeController@postCreate','id'=>'form_validation_ttip','class'=>'form_validation_ttip')) }}
    <div class="formRow">
        <div class="row-fluid">
            <div class="span12">
                @include('backend.includes.errors')
                @include('backend.includes.success')
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label>Mã thuộc tính<span class="f_req">*</span></label>
                {{ FORM::text('code','',array('class'=>'span8')) }}
                <span class="help-block">Mã thuộc tính chỉ chứa các ký tự từ a-z và dấu gạch dưới(_)</span>
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label>Nhãn thuộc tính<span class="f_req">*</span></label>
                {{ FORM::text('label','',array('class'=>'span8')) }}
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label>Giá trị mặc định</label>
                {{ FORM::text('value', '' ,array('class'=>'span8')) }}
            </div>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <label>Kiểu dữ liệu<span class="f_req">*</span></label>
                {{
                FORM::select('type',
                array(
                    'text'          => 'Text Field',
                    'textarea'      => 'Text Area',
                    'date'          => 'Date',
                    'boolean'       => 'Yes/No',
                    'multiselect'   => 'Multi Select',
                    'select'        => 'Dropdown',
                    'price'         => 'Price',
                    'image'         => 'Image',
                ),  'text',array('id'=>'type'))
                }}
            </div>
            <div class="span12">
                <div class="span12 label-data" id="type-data" style="display: none">
                    <div class="row-fluid">
                        <label class="label-data">Thêm giá trị cho thuộc tính<span class="f_req"> *</span> </label>
                    </div>
                    <div class="span12">
                        <div class="span4">
                            <label class="label-data">Giá trị</label>
                        </div>
                        <div class="span6">
                            <label class="label-data">Nhãn</label>
                        </div>
                    </div>
                    <div class="row-fluid" id="type-data-item" style="display: none">
                        <div class="span12">
                            <div class="span4">
                                <p>
                                    <input class="span10 type_data" placeholder="Giá trị" type="text">
                                </p>
                            </div>
                            <div class="span7">
                                <p>
                                    <input class="span10 type_label" placeholder="Nhãn" type="text">
                                </p>
                            </div>
                            <div class="remove-data span1" title="Xoá" style="cursor: pointer"><i class="splashy-remove "></i></div>
                        </div>
                    </div>
                </div>
                <div class="span12">
                    <button class="btn btn-info label-data" type="button" id="add-data" style="display: none" >
                        Thêm dữ liệu
                    </button>
                </div>
            </div>
            <div class="row-fluid">
                <div class="span12">
                    <label>Bắt buộc nhập<span class="f_req">*</span></label>
                    <label class="radio">{{ Form::radio('require', '1', true) }} Có</label>
                    <label class="radio">{{ Form::radio('require', '0') }} Không</label>
                </div>
            </div>
            <div class="row-fluid">
                <div class="span12">
                    <label>Kiểm tra dữ liệu <span class="f_req">*</span></label>
                    {{ FORM::select('validate',
                    array(
                        '0'            => 'Không',
                        'number'       => 'Số thực',
                        'digits'       => 'Số nguyên',
                        'email'        => 'Email',
                        'url'          => 'URL',
                        'alpha'        => 'Văn bản',
                        'alphanum'     => 'Văn bản (a-z, A-Z) hoặc số (0-9)',
                    ))
                    }}
                </div>
            </div>
            <div class="row-fluid">
                <div class="span12">
                    <label>Nhóm <span class="f_req">*</span> </label>
                    {{ FORM::select('group',
                    array(
                        'general'     => 'Chung',
                        'price'       => 'Giá',
                        'meta'        => 'Meta',
                        'image'       => 'Hình ảnh',
                        'orther'      => 'Nhóm khác',
                    ))
                    }}
                </div>
            </div>
            <div class="form-actions">
                <button class="btn btn-inverse" type="submit">Thêm mới</button>
                <button class="btn" type="reset">Làm lại</button>
            </div>
        </div>
    </div>
    {{ FORM::close() }}
</div>
@stop