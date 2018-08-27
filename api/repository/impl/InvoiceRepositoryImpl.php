<?php
require_once __DIR__ . '/../invoiceRepository.php';


class InvoiceRepositoryImpl implements invoiceRepository{

    private $connection;

    public function setConnection(mysqli $connection)
    {
        $this->connection = $connection;
    }

    public function saveInvoice($iid, $discription, $cid, $total_amount)
    {
        $result = $this->connection->query("INSERT INTO invoice VALUES ('{$iid}','{$discription}','{$cid}','{$total_amount}',CURDATE())");
        return ($result && ($this->connection->affected_rows > 0));

    }

    public function updateInvoice($iid, $discription, $cid, $total_amount)
    {
        $result = $this->connection->query("UPDATE invoice SET discription='{$discription}', cid='{$cid}', total_amount='{$total_amount}' WHERE iid='{$iid}'");
        return ($result && ($this->connection->affected_rows > 0));
    }

    public function deleteInvoice($iid)
    {
        $result = $this->connection->query("DELETE FROM invoice WHERE iid='{$iid}'");
        return ($result && ($this->connection->affected_rows > 0));
    }

    public function findInvoice($iid)
    {
        $resultset = $this->connection->query("SELECT * FROM invoice WHERE iid='{$iid}'");
        return $resultset->fetch_assoc();
    }

    public function findAllInvoice()
    {
        $resultset = $this->connection->query("SELECT * FROM invoice");
        return $resultset->fetch_all(MYSQLI_ASSOC);
    }
}