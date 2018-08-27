<?php

interface InvoiceDetailBO
{



    public function saveInvoiceDetail($pid, $iid, $qty, $selling_price, $total);

    public function updateInvoiceDetail($pid, $iid, $qty, $selling_price, $total);
}