<?php
/**
 * Created by IntelliJ IDEA.
 * User: ranjith-suranga
 * Date: 7/20/18
 * Time: 3:58 PM
 */

interface CustomerBO
{

    public function getCustomersCount();

    public function getAllCustomers();

    public function deleteCustomer($id);

    public function saveCustomer($nic,$name,$contact,$address,$vid, $type, $issue,$vnum);

    public function updateCustomer($nic,$name,$contact,$address);

}