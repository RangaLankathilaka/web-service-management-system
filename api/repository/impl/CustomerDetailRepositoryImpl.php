<?php


require_once __DIR__ . '/../CustomerDetailRepository.php';

class CustomerDetailRepositoryImpl implements CustomerDetailRepository{
    private $connection;

    public function setConnection(mysqli $connection)
    {
        $this->connection = $connection;
    }

    public function saveCustomerDetail($cid, $pid, $date)
    {
        $result = $this->connection->query("INSERT INTO customerdetail VALUES ('{$cid}','{$pid}','{$date}')");
        return ($result && ($this->connection->affected_rows > 0));
    }

    public function updateCustomerDetail($cid, $pid, $date)
    {
        $result = $this->connection->query("UPDATE customerdetail SET date='{$date}' WHERE cid='{$cid}' & pid='{$pid}'");
        return ($result && ($this->connection->affected_rows > 0));
    }

    public function deleteCustomerDetail($cid, $pid)
    {
        $result = $this->connection->query("DELETE FROM customerdetail WHERE cid='{$cid}' & pid='{$pid}'");
        return ($result && ($this->connection->affected_rows > 0));
    }

    public function findCustomerDetail($cid, $pid)
    {
        $resultset = $this->connection->query("SELECT * FROM customerdetail WHERE cid='{$cid}' & pid='{$pid}'");
        return $resultset->fetch_assoc();

    }

    public function findAllCustomerDetail()
    {
        $resultset = $this->connection->query("SELECT * FROM customerdetail");
        return $resultset->fetch_all(MYSQLI_ASSOC);
    }
}