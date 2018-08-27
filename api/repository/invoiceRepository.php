<?php

interface invoiceRepository{
    public function setConnection(mysqli $connection);

    public function saveInvoice($iid,$discription,$cid,$total_amount);

    public function updateInvoice($iid,$discription,$cid,$total_amount);

    public function deleteInvoice($iid);

    public function findInvoice($iid);

    public function findAllInvoice();

}