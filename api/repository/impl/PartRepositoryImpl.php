<?php

require_once __DIR__ . '/../PartRepository.php';

class PartRepositoryImpl implements PartRepository{
    private $connection;

    public function setConnection(mysqli $connection)
    {
        $this->connection=$connection;
    }

    public function savePart($pid, $pname, $supplier, $bprice, $sprice, $qty)
    {
        $result=$this->connection->query("INSERT INTO part VALUES('{$pid}','{$pname}','{$bprice}','{$sprice}','{$qty}','{$supplier}')");
        return ($result && $this->connection->affected_rows>0);
    }

    public function updatePart($pid, $pname, $supplier, $bprice, $sprice, $qty)
    {
        $result=$this->connection->query("UPDATE part SET pname='{$pname}',buying_price='{$bprice}',selling_price='{$sprice}',qty='{$qty}',supplier='{$supplier}' WHERE pid='{$pid}'");
        return ($result && $this->connection->affected_rows>0);
    }

    public function deletePart($pid)
    {
        $result=$this->connection->query("DELETE FROM part WHERE pid='{$pid}'");
        return ($result && $this->connection->affected_rows>0);
    }

    public function findPart($pid)
    {


        $resultset=$this->connection->query("SELECT * FROM part WHERE pid='{$pid}'");
        return $resultset->fetch_assoc();
    }

    public function findAllPart()
    {
        $resultset=$this->connection->query("SELECT * FROM part");

        return $resultset->fetch_all(MYSQLI_ASSOC);

    }

    public function updatePartQty($newqty,$pid)
    {
        $result=$this->connection->query("UPDATE part SET qty=qty-'{$newqty}' WHERE pid='{$pid}'");
        return ($result && $this->connection->affected_rows>0);
    }
}