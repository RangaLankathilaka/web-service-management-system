<?php
/**
 * Created by IntelliJ IDEA.
 * User: ranjith-suranga
 * Date: 7/20/18
 * Time: 3:41 PM
 */

interface InvoiceDetailRepository
{

    public function setConnection(mysqli $connection);

    public function saveInvoicedetail($pid,$iid,$qty,$selling_price,$total);

    public function updateInvoicedetail($pid,$iid,$qty,$selling_price,$total);

    public function deleteInvoicedetail($pid,$iid);

    public function findInvoicedetail($pid,$iid);

    public function findAllInvoicedetail();

}