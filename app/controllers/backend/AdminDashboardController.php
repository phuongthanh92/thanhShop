<?php

class AdminDashboardController extends \BaseController {
    protected $order;

	public function getIndex(){
        $user = new User();
        $order = new Order();
        $getorder = $order->getLimitOrder();
        $datenow = date("Y/m/d h:m:s");
        // hien thi so ng dung dang ky trong ngay
        //7 ngay
        $dateprev = array();
        $dateprev1 = array();
        $dataOrder = array();

        //lay 7 ngay truoc
        for ($i = 0; $i < 7; $i++) {
            $dateprev[] = date('Y/m/d', strtotime($datenow . "-" . $i . "days"));
        }

        foreach ($dateprev as $item => $value) {
            $dateprev1[] = date('Y/m/d', strtotime($value . "-1days"));
        }
        // lay so ng dang ky trong ngay
        for ($i = 0; $i < 7; $i++) {
            $dataOrder[] = $order->getNewOrderOnDay($dateprev1[$i], $dateprev[$i]);
        }
        //ket thuc hien thi so ng dung trong ngay
        //15 ngay
        $dateprev15 = array();
        $dateprev14 = array();
        $dataOrder15 = array();

        //lay 7 ngay truoc
        for ($i = 0; $i < 15; $i++) {
            $dateprev15[] = date('Y/m/d', strtotime($datenow . "-" . $i . "days"));
        }

        foreach ($dateprev15 as $item => $value) {
            $dateprev14[] = date('Y/m/d', strtotime($value . "-1days"));
        }
        // lay so ng dang ky trong ngay
        for ($i = 0; $i < 15; $i++) {
            $dataOrder15[] = $order->getNewOrderOnDay($dateprev14[$i], $dateprev15[$i]);
        }
        //ket thuc hien thi so ng dung trong ngay
        //30 ngay
        $dateprev30 = array();
        $dateprev29 = array();
        $dataOrder30 = array();

        //lay 7 ngay truoc
        for ($i = 0; $i < 30; $i++) {
            $dateprev30[] = date('Y/m/d', strtotime($datenow . "-" . $i . "days"));
        }

        foreach ($dateprev30 as $item => $value) {
            $dateprev29[] = date('Y/m/d', strtotime($value . "-1days"));
        }
        // lay so ng dang ky trong ngay
        for ($i = 0; $i < 30; $i++) {

            $dataOrder30[] = $order->getNewOrderOnDay($dateprev29[$i], $dateprev30[$i]);
        }
        //ket thuc hien thi so ng dung trong ngay

        return View::make('backend.dashboard')->with('dateprev', $dateprev)
            ->with('dataOrder', $dataOrder)->with('dateprev15', $dateprev15)
            ->with('dataOrder15', $dataOrder15)->with('dateprev30', $dateprev30)
            ->with('dataOrder30', $dataOrder30)->with('getorder', $getorder);;
	}
}