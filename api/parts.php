<?php

require_once 'business/impl/PartBOImpl.php';

header("Content-Type: application/json");

$method = $_SERVER["REQUEST_METHOD"];

$partBOImpl=new PartBOImpl();
//echo $method;
//echo "I am here";
//$pname=$_POST["action"];
//echo $pname;


switch ($method){

    case "GET":
        $action=$_GET["action"];

        switch ($action){
            case "all":
                echo json_encode($partBOImpl->getAllPart()) ;
                break;

            case "count":
                echo json_encode($partBOImpl->getPartCount());
                break;
        }
        break;

    case "POST":

        $action=$_POST["action"];
        $pid=$_POST["pid"];
        $pname=$_POST["pname"];

        $bprice=$_POST["bprice"];
        $sprice=$_POST["sprice"];
        $qty=$_POST["qty"];
        $supplier=$_POST["supplier"];

        switch ($action){
            case "save":
                echo json_encode($partBOImpl->savePart($pid,$pname,$supplier,$bprice,$sprice,$qty));
                break;

            case "update":
                echo json_encode($partBOImpl->updatePart($pid,$pname,$supplier,$bprice,$sprice,$qty));
                break;
        }




break;
}