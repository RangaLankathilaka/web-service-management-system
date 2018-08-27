<?php
require_once __DIR__ . '/../InvoiceDetailBO.php';
require_once __DIR__ . '/../../repository/impl/InvoiceDetailRepositoryImpl.php';
require_once __DIR__ . '/../../db/DBConnection.php';

class InvoiceDetailBoImp implements InvoiceDetailBO{
    private $invoicedetailrepository;

    public function __construct()
    {
        $this->invoicedetailrepository=new InvoiceDetailRepositoryImpl();
    }



    public function saveInvoiceDetail($pid, $iid, $qty, $selling_price, $total)
    {
        $connection=(new DBConnection())->getConnection();
        $this->invoicedetailrepository->setConnection($connection);
        $result=$this->invoicedetailrepository->saveInvoicedetail($pid, $iid, $qty, $selling_price, $total);
        mysqli_close($connection);
        echo $result;
        return $result;
    }

    public function updateInvoiceDetail($pid, $iid, $qty, $selling_price, $total)
    {
        // TODO: Implement updatePart() method.
    }
}