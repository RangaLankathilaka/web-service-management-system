<?php
/**
 * Created by IntelliJ IDEA.
 * User: Ranga Lankathilaka
 * Date: 18/07/27
 * Time: 2:21 PM
 */

interface vehicleDetailRepository{

    public function setConnection(mysqli $connection);

    public function saveVehicleDetail($cid,$vid,$service_fee);

    public function updateVehicleDetail($cid,$vid,$service_fee);

    public function deleteVehicleDetail($cid,$vid);

    public function findVehicleDetail($cid,$vid);

    public function findAllVehicleDetail();




}