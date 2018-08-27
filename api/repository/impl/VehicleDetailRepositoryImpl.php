<?php
/**
 * Created by IntelliJ IDEA.
 * User: Ranga Lankathilaka
 * Date: 18/07/27
 * Time: 2:38 PM
 */
require_once __DIR__ . '/../vehicleDetailRepository.php';
class VehicleDetailRepositoryImpl implements vehicleDetailRepository{
    private $connection;

    public function setConnection(mysqli $connection)
    {
        $this->connection = $connection;
    }

    public function saveVehicleDetail($cid, $vid, $service_fee)
    {
        $result = $this->connection->query("INSERT INTO vehicledetail VALUES ('{$cid}','{$vid}','{$service_fee}',CURDATE())");
        return ($result && ($this->connection->affected_rows > 0));

    }

    public function updateVehicleDetail($cid, $vid, $service_fee)
    {$result = $this->connection->query("UPDATE vehicledetail SET service_fee='{$service_fee}', date=CURDATE() WHERE cid='{$cid}'& vid='{$vid}'");
        return ($result && ($this->connection->affected_rows > 0));
    }

    public function deleteVehicleDetail($cid, $vid)
    {
        $result = $this->connection->query("DELETE FROM vehicledetail WHERE cid='{$cid}' & vid='{$vid}'");
        return ($result && ($this->connection->affected_rows > 0));

    }

    public function findVehicleDetail($cid, $vid)
    {
        $resultset = $this->connection->query("SELECT * FROM vehicledetail WHERE cid='{$cid}' & vid='{$vid}'");
        return $resultset->fetch_assoc();
    }

    public function findAllVehicleDetail()
    {
        $resultset = $this->connection->query("SELECT * FROM vehicledetail");
        return $resultset->fetch_all(MYSQLI_ASSOC);
    }
}