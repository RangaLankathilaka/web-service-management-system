<?php
/**
 * Created by IntelliJ IDEA.
 * User: ranjith-suranga
 * Date: 7/20/18
 * Time: 3:42 PM
 */

require_once __DIR__ . '/../InvoiceDetailRepository.php';

class InvoiceDetailRepositoryImpl implements InvoiceDetailRepository{
    private $connection;

    public function setConnection(mysqli $connection)
    {

        $this->connection = $connection;
    }

    public function saveInvoicedetail($pid, $iid, $qty, $selling_price, $total)
    {
        $result = $this->connection->query("INSERT INTO invoicedetail VALUES ('{$pid}','{$iid}','{$qty}','{$selling_price}','{$total}')");
        return ($result && ($this->connection->affected_rows > 0));

    }

    public function updateInvoicedetail($pid, $iid, $qty, $selling_price, $total)
    {
        $result = $this->connection->query("UPDATE invoicedetail SET qty='{$qty}', selling_price='{$selling_price}', total='{$total}' WHERE pid='{$pid} ' & iid='{$iid} ' ");
        return ($result && ($this->connection->affected_rows > 0));
    }

    public function deleteInvoicedetail($pid,$iid)
    {
        $result = $this->connection->query("DELETE FROM invoicedetail WHERE pid='{$pid}' & iid='{$iid}'");
        return ($result && ($this->connection->affected_rows > 0));
    }

    public function findInvoicedetail($pid,$iid)
    {

        $resultset = $this->connection->query("SELECT * FROM invoicedetail WHERE pid='{$pid}' & iid='{$iid}'");
        return $resultset->fetch_assoc();


    }

    public function findAllInvoicedetail()
    {
        $resultset = $this->connection->query("SELECT * FROM invoicedetail");
        return $resultset->fetch_all(MYSQLI_ASSOC);
    }
}
