<?php
/**
 * Created by IntelliJ IDEA.
 * User: Ranga Lankathilaka
 * Date: 18/07/27
 * Time: 4:45 PM
 */


require_once __DIR__ . '/../InvoiceBO.php';
require_once __DIR__ . '/../../repository/impl/InvoiceRepositoryImpl.php';
    require_once __DIR__ . '/../../repository/impl/InvoiceDetailRepositoryImpl.php';
require_once __DIR__ . '/../../repository/impl/PartRepositoryImpl.php';

require_once __DIR__ . '/../../db/DBConnection.php';

class InvoiceBOImpl implements InvoiceBO {
    private $invoicerepositoryimpl;
    private $invoicedetailrepositoryimpl;
    private $partpositoryimpl;

    public function __construct()
    {

        $this->invoicerepositoryimpl=new InvoiceRepositoryImpl();
        $this->invoicedetailrepositoryimpl=new InvoiceDetailRepositoryImpl();
        $this->partpositoryimpl=new PartRepositoryImpl();
    }

    public function saveInvoice($iid, $discription, $cid, $total_amount,$pid, $qty, $selling_price, $total)
    {
        $connection=(new DBConnection())->getConnection();
        $connection->autocommit(false);
        $this->invoicerepositoryimpl->setConnection($connection);
        $this->invoicedetailrepositoryimpl->setConnection($connection);
        $this->partpositoryimpl->setConnection($connection);
        $result=$this->invoicerepositoryimpl->saveInvoice($iid, $discription, $cid, $total_amount);
        $result1=$this->invoicedetailrepositoryimpl->saveInvoicedetail($pid, $iid, $qty, $selling_price, $total);

        if($result1){
            $result2=$this->partpositoryimpl->updatePartQty($qty,$pid);

            if($result2){
                $connection->commit(true);
                $connection->autocommit(true);
                return $result2;
            }else{
                $connection->rollback();
                $connection->autocommit(true);


            }
        }else{
            $connection->rollback();
        }
        mysqli_close($connection);
        echo $result;
        return $result1;

    }

    public function getAllInvoice()
    {
        $connection = (new DBConnection())->getConnection();
        $this->invoicerepositoryimpl->setConnection($connection);

        $invoice = $this->invoicerepositoryimpl->findAllInvoice();

        mysqli_close($connection);

        return $invoice;
    }
}