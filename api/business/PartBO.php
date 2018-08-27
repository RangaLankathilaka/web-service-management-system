<?php

interface PartBO{
    public function savePart($pid,$pname,$supplier,$bprice,$sprice,$qty);

    public function updatePart($pid,$pname,$supplier,$bprice,$sprice,$qty);

    public function deletePart($pid);

    public function getAllPart();

    public function getPartCount();



}