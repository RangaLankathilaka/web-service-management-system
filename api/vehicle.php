<?php
/**
 * Created by IntelliJ IDEA.
 * User: Ranga Lankathilaka
 * Date: 18/07/26
 * Time: 11:42 PM
 */
require_once 'business/impl/VehicleBOImpl.php';

header("Content-Type: application/json");

$method = $_SERVER["REQUEST_METHOD"];

$vehicleBOImpl=new VehicleBOImpl();
switch ($method){
    case "GET":
        $action=$_GET["action"];
        switch ($action){
            case "all":
                echo json_encode($vehicleBOImpl->getAllVehicle());
                break;

            case "countvehi":
                echo json_encode($vehicleBOImpl->getAllVehicleCount());
                break;
        }

        break;


    case "DELETE":

        $queryString =$_SERVER["QUERY_STRING"];

        $queryArray = preg_split("/=/",$queryString);
        if (count($queryArray) === 2){
            $vid = $queryArray[1];
            echo json_encode($vehicleBOImpl->deleteVehicle($vid));
        }

        break;
}
