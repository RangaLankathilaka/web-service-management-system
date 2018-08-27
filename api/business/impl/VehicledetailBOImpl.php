<?php
/**
 * Created by IntelliJ IDEA.
 * User: Ranga Lankathilaka
 * Date: 18/07/27
 * Time: 4:45 PM
 */


require_once __DIR__ . '/../VehicleDetailBO.php';
require_once __DIR__ . '/../../repository/impl/VehicleDetailRepositoryImpl.php';

require_once __DIR__ . '/../../db/DBConnection.php';

class VehicledetailBOImpl implements VehicleDetailBO{
    private $vehicledetailrepository;

    public function __construct()
    {

        $this->vehicledetailrepository=new VehicleDetailRepositoryImpl();
    }

    public function savevehicleDetail($cid, $vid, $service_fee)
    {
        $connection=(new DBConnection())->getConnection();
        $this->vehicledetailrepository->setConnection($connection);
        $result=$this->vehicledetailrepository->saveVehicleDetail($cid, $vid, $service_fee);
        mysqli_close($connection);
        echo $result;
        return $result;
    }
}