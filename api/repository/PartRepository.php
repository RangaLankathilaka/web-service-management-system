<?php

interface PartRepository{

    public function setConnection(mysqli $connection);

    public function savePart($pid,$pname,$supplier,$bprice,$sprice,$qty);

    public function updatePart($pid,$pname,$supplier,$bprice,$sprice,$qty);

    public function deletePart($pid);

    public function findPart($pid);

    public function findAllPart();

    public function updatePartQty($newqty,$pid);

}