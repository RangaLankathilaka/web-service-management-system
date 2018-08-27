<?php
/**
 * Created by IntelliJ IDEA.
 * User: Ranga Lankathilaka
 * Date: 18/07/27
 * Time: 4:40 PM
 */

require_once 'business/impl/VehicledetailBOImpl.php';

header("Content-Type: application/json");

$method = $_SERVER["REQUEST_METHOD"];

$vehicleDetailBOImpl=new VehicledetailBOImpl();
switch ($method){
    case "POST":
        $action =$_POST["action"];
        $cid=$_POST["ajcid"];
        $vid=$_POST["ajvid"];
        $service_fee=$_POST["ajsfee"];






        switch($action){
            case "save":
                echo json_encode($vehicleDetailBOImpl->savevehicleDetail($cid,$vid,$service_fee));
                break;
//            case "update":
//                // echo json_encode($customerBO->getAllCustomers());
//
//                break;


   }



}
