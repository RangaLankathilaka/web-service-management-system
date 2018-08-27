<?php

require_once 'business/impl/CustomerBOImpl.php';

header("Content-Type: application/json");

$method = $_SERVER["REQUEST_METHOD"];

$customerBOImpl=new CustomerBOImpl();
//echo $method;
//echo "I am here";
//$pname=$_POST["action"];
//echo $pname;


switch ($method){

    case "GET":
        $action=$_GET["action"];

        switch ($action){
            case "all":
                echo json_encode($customerBOImpl->getAllCustomers()) ;
                break;

            case "count":
                echo json_encode($customerBOImpl->getAllCustomers());
                break;
        }
        break;
    case "POST":
        $action =$_POST["action"];
        $nic=$_POST["nic"];
        $name=$_POST["cname"];
        $contact=$_POST["ccontact"];
        $address=$_POST["caddress"];
        $vid=$_POST["vid"];
        $date=$_POST["date"];
        $vnum=$_POST["vnum"];
        $type=$_POST["vtype"];
        $issue=$_POST["issue"];




        switch($action){
            case "save":
                echo json_encode($customerBO->saveCustomer($nic,$name,$contact,$address,$vid, $type, $issue,$vnum));
                break;
            case "update":
                // echo json_encode($customerBO->getAllCustomers());

                break;
            case "DELETE":
                $queryString = $_SERVER["QUERY_STRING"];
                $queryArray = preg_split("/=/",$queryString);
                if (count($queryArray) === 2){
                    $id = $queryArray[1];
                    echo json_encode($customerBO->deleteCustomer($id));
                }
                break;
}}