@extends('backend.layouts.default')

@section('title')
{{{ $title }}} - @parent
@stop

@section('breadcrumb')
    <li>{{ link_to_action('AdminAttributeController@getIndex', 'Quản lý thuộc tính') }}</li>
    <li>Thêm thuộc tính</li>
@stop

@section('scripts')
{{ HTML::script('public/js/backend/attribute.js') }}
@stop

@section('content')
<h3 class="heading">Thêm thuộc tính</h3>
<div class="span8">
    {{ Form::open(array('action' => 'AdminAttributeController@postCreateAttribute','id'=>'form_validation_ttip','class'=>'form_validation_ttip')) }}
    <div class="formRow">
        <div class="row-fluid">
            <div class="span12">
                @include('backend.includes.error')
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
                <label>Tên thuộc tính<span class="f_req">*</span></label>
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
                {{ FORM::select('type' ,array(
                    'text'  =>  'Text',
                    'numeric'    =>  'Số',
                    'integer'  =>  'Số nguyên',
                    'editor'  =>  'Văn bản',
                    'textarea' =>  'TextArea',
                    'radio' => 'Radio',
                    'checkbox'  =>  'Checkbox',
                    'select' => 'Select'
                ),'text',array('id'=>'type')) }}
            </div>
            <?php
                $data = Input::old('type_data');
                $label = Input::old('type_data_label');
                $type = Input::old('type');
                if(in_array($type,array('radio', 'checkbox', 'select'))){
                    $display = '';
                }else{
                    $display = 'display: none';
                }
            ?>
            <div class="span12">
                <div class="span12 label-data" id="type-data"  style="{{ $display }}">
                    @if($display=='')
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
                    @foreach($data as $key=>$val)
                    <div class="span12 type-data">
                        <div class="span4">
                            <p>
                                <input class="span10" name="type_data[]" placeholder="Giá trị" value="{{ $val }}" type="text">
                            </p>
                            </div>
                        <div class="span7">
                            <p>
                                <input class="span10" name="type_data_label[]" placeholder="Nhãn" value="{{ $label[$key] }}" type="text">
                            </p>
                        </div>
                        @if($key!=0)
                        <div class="splashy-remove remove-data span1" title="Xoá" style="cursor: pointer"></div>
                        @endif
                    </div>
                    @endforeach
                    @endif
            </div>
            <div class="span12">
                <button class="btn btn-info label-data" type="button" id="add-data" style="{{ $display }}">
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
                {{ FORM::select('validate',array('0'  =>  'Không', '1'    =>  'Số nguyên', '2'  =>  'Số thực', '3'  =>  'Tiền tệ', '4'=>'Email', '4' => 'URL', '5' => 'Ký tự và số')) }}
            </div>
        </div>
        <div class="form-actions">
            <button class="btn btn-inverse" type="submit">Thêm mới</button>
            <button class="btn" type="reset">Làm lại</button>
        </div>
    </div>
    {{ FORM::close() }}
</div>
@stop