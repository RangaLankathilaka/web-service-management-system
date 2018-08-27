<?php
/**
 * Created by IntelliJ IDEA.
 * User: Ranga Lankathilaka
 * Date: 18/07/26
 * Time: 5:34 PM
 */


require_once __DIR__ . '/../VehicleRepository.php';

class VehicleRepositoryImpl implements VehicleRepository{

    private $connection;

    public function setConnection(mysqli $connection)
    {
        $this->connection = $connection;
    }

    public function saveVehicle($vid, $type, $issue, $nic,$vnum)
    {
        $result = $this->connection->query("INSERT INTO vehicle VALUES ('{$vid}','{$type}','{$issue}','{$nic}','{$vnum}')");
        return ($result && ($this->connection->affected_rows > 0));

    }

    public function updateVehicle($vid, $type, $issue, $nic,$vnum)
    {
        $result = $this->connection->query("UPDATE vehicle SET type='{$type}',issue ='{$issue}', cid='{$nic}', vnum='{$vnum}' WHERE vid='{$vid}'");
        return ($result && ($this->connection->affected_rows > 0));
    }

    public function deleteVehicle($vid)
    {
        $result = $this->connection->query("DELETE FROM vehicle WHERE vid='{$vid}'");
        return ($result && ($this->connection->affected_rows > 0));
    }

    public function findVehicle($vid)
    {
        $resultset = $this->connection->query("SELECT * FROM vehicle WHERE vid='{$vid}'");
        return $resultset->fetch_assoc();
    }

    public function findAllVehicle()
    {
        $resultset = $this->connection->query("SELECT * FROM vehicle");
        return $resultset->fetch_all(MYSQLI_ASSOC);
    }
}