<?php

interface CustomerDetailRepository{

    public function setConnection(mysqli $connection);

    public function saveCustomerDetail($cid,$pid,$date);

    public function updateCustomerDetail($cid,$pid,$date);

    public function deleteCustomerDetail($cid,$pid);

    public function findCustomerDetail($cid,$pid);

    public function findAllCustomerDetail();

}