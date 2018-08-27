<?php
/**
 * Created by IntelliJ IDEA.
 * User: Ranga Lankathilaka
 * Date: 18/07/26
 * Time: 5:26 PM
 */

interface VehicleRepository{

    public function setConnection(mysqli $connection);

    public function saveVehicle($vid,$type,$issue,$cid,$vnum);

    public function updateVehicle($vid,$type,$issue,$cid,$vnum);

    public function deleteVehicle($vid);

    public function findVehicle($vid);

    public function findAllVehicle();

}