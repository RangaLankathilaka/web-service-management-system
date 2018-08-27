<?php
/**
 * Created by IntelliJ IDEA.
 * User: Ranga Lankathilaka
 * Date: 18/07/27
 * Time: 4:40 PM
 */

require_once 'business/impl/InvoiceDetailBoImp.php';

header("Content-Type: application/json");

$method = $_SERVER["REQUEST_METHOD"];

$invoiceDetailBOImpl=new InvoiceDetailBoImp();
switch ($method){
    case "POST":
        $action =$_POST["action"];
        $pid=$_POST["pid"];
        $iid=$_POST["iid"];
        $qty=$_POST["qty"];
        $sell=$_POST["sell"];
        $total=$_POST["total"];






        switch($action){
            case "save":
                echo json_encode($invoiceDetailBOImpl->saveInvoiceDetail($pid, $iid, $qty, $sell, $total));
                break;
//            case "update":
//                // echo json_encode($customerBO->getAllCustomers());
//
//                break;


        }



}
