<?php
class AddressController extends \BaseController{

    public function postProvinces(){
        $data = DB::table('provinces')->orderBy('order', 'ASC')->get(array('id', 'name'));
        return Response::json($data);
    }
    public function postDistricts($provinces){
        $data =  DB::table('districts')->where('province_id', $provinces)->orderBy('order', 'ASC')->get(array('id', 'name'));
        return Response::json($data);
    }
    public function postCreate(){
        $data = array(
            'user_id' => Auth::user()->getAuthIdentifier(),
            'full_name' => Input::get('full_name'),
            'districts_id' => Input::get('districts_id'),
            'status' => 1,
            'address' => Input::get('address'),
            'phone' => Input::get('phone')
        );
        $address = UserAddress::create($data);
        return Response::json($address);

    }
    public function postRemove(){
        $address = UserAddress::find(Input::get('id'));
        if(!empty($address)){
            $address->status = 0;
            $address->save();
            if(Request::ajax()){
                return Response::json(array('success'=>true));
            }
        }
    }
    public function postUpdate(){
        $inputs = Input::all();
        $address = UserAddress::find($inputs['id']);
        if(!empty($address)){
            $address->full_name = $inputs['full_name'];
            $address->districts_id = $inputs['districts_id'];
            $address->address = $inputs['address'];
            $address->phone = $inputs['phone'];
            $address->save();
        }
    }
} 