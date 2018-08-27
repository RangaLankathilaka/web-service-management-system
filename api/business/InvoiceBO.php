<?php
/**
 * Created by IntelliJ IDEA.
 * User: Ranga Lankathilaka
 * Date: 18/07/27
 * Time: 11:45 PM
 */

interface InvoiceBO{


    public function saveInvoice($iid, $discription, $cid, $total_amount,$pid, $qty, $selling_price, $total);

    public function getAllInvoice();
}