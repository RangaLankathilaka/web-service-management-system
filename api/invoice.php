<?php
/**
 * Created by IntelliJ IDEA.
 * User: Ranga Lankathilaka
 * Date: 18/07/27
 * Time: 4:40 PM
 */

require_once 'business/impl/InvoiceBOImpl.php';

header("Content-Type: application/json");

$method = $_SERVER["REQUEST_METHOD"];

$invoiceBOImpl=new InvoiceBOImpl();
switch ($method){
    case "POST":
        $action =$_POST["action"];
        $pid=$_POST["pid"];
        $iid=$_POST["iid"];
        $qty=$_POST["qty"];
        $sell=$_POST["sell"];
        $total=$_POST["total"];
//        iidajax:iid,
//            discriptionajax:discription,
//            cidajax:cid,
//            totalajax:total_amount,
//            action:"save"



        $discription=$_POST["discriptionajax"];
        $cid=$_POST["cidajax"];
        $total_amount=$_POST["totalajax"];





        switch($action){
            case "save":
                echo json_encode($invoiceBOImpl->saveInvoice($iid, $discription, $cid, $total_amount,$pid, $qty, $sell, $total));
                break;
//            case "update":
//                // echo json_encode($customerBO->getAllCustomers());
//
//                break;


        }

    break;


    case "GET":
        $action=$_GET["action"];

        switch ($action){
            case "all":
                echo json_encode($invoiceBOImpl->getAllInvoice()) ;
                break;


        }
        break;

}
