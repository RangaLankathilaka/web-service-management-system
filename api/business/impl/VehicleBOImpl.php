<?php
/**
 * Created by IntelliJ IDEA.
 * User: Ranga Lankathilaka
 * Date: 18/07/26
 * Time: 11:48 PM
 */

require_once __DIR__ . '/../VehicleBO.php';
require_once __DIR__ . '/../../repository/impl/VehicleRepositoryImpl.php';
require_once __DIR__ . '/../../db/DBConnection.php';


class VehicleBOImpl implements VehicleBO{

    private $vehicleRepositoryImpl;

    public function __construct()
    {
        $this->vehicleRepositoryImpl=new VehicleRepositoryImpl();
    }

    public function getAllVehicle()
    {
        $connection = (new DBConnection())->getConnection();
        $this->vehicleRepositoryImpl->setConnection($connection);

        $vehicles = $this->vehicleRepositoryImpl->findAllVehicle();

        mysqli_close($connection);

        return $vehicles;


    }

    public function deleteVehicle($vid)
    {
        $connection = (new DBConnection())->getConnection();
        $this->vehicleRepositoryImpl->setConnection($connection);

        $result = $this->vehicleRepositoryImpl->deleteVehicle($vid);

        mysqli_close($connection);

        return $result;
    }

    public function getAllVehicleCount()
    {
        $connection = (new DBConnection())->getConnection();
        $this->vehicleRepositoryImpl->setConnection($connection);

        $count = count($this->vehicleRepositoryImpl->findAllVehicle());

        mysqli_close($connection);

        return $count;

    }
}