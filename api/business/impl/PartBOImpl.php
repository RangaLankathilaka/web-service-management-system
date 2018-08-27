<?php
require_once __DIR__ . '/../PartBO.php';
require_once __DIR__ . '/../../repository/impl/PartRepositoryImpl.php';
require_once __DIR__ . '/../../db/DBConnection.php';


class PartBOImpl implements PartBO {

private $partRepositoryImpl;

public function __construct()
{
    $this->partRepositoryImpl=new PartRepositoryImpl();
}

    public function savePart($pid, $pname, $supplier, $bprice, $sprice, $qty)
    {
        $connection=(new DBConnection())->getConnection();
        $this->partRepositoryImpl->setConnection($connection);
        $result=$this->partRepositoryImpl->savePart($pid, $pname, $supplier, $bprice, $sprice, $qty);
        mysqli_close($connection);

        return $result;
    }

    public function updatePart($pid, $pname, $supplier, $bprice, $sprice, $qty)
    {
        $connection=(new DBConnection())->getConnection();
        $this->partRepositoryImpl->setConnection($connection);
        $result=$this->partRepositoryImpl->updatePart($pid, $pname, $supplier, $bprice, $sprice, $qty);
        mysqli_close($connection);
        echo $result;
        return $result;

    }

    public function deletePart($pid)
    {
        // TODO: Implement deletePart() method.
    }

    public function getAllPart()
    {
        $connection=(new DBConnection())->getConnection();
        $this->partRepositoryImpl->setConnection($connection);
        $resultSet=$this->partRepositoryImpl->findAllPart();
        mysqli_close($connection);
        return $resultSet;
    }


    public function getPartCount()
    {
        $connection=(new DBConnection())->getConnection();
        $this->partRepositoryImpl->setConnection($connection);
        $countpart=count($this->partRepositoryImpl->findAllPart());
        mysqli_close($connection);
        return $countpart;
    }
}