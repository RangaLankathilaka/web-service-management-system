<?php
/**
 * Created by IntelliJ IDEA.
 * User: ranjith-suranga
 * Date: 7/20/18
 * Time: 3:58 PM
 */

require_once __DIR__ . '/../CustomerBO.php';
require_once __DIR__ . '/../../repository/impl/CustomerRepositoryImpl.php';
require_once __DIR__ . '/../../repository/impl/VehicleRepositoryImpl.php';
require_once __DIR__ . '/../../db/DBConnection.php';

class CustomerBOImpl implements CustomerBO
{

    private $customerRepository;
    private $vehicleRepository;


    public function __construct()
    {
        $this->customerRepository = new CustomerRepositoryImpl();
        $this->vehicleRepository=new VehicleRepositoryImpl();

    }

    public function getCustomersCount()
    {
        $connection = (new DBConnection())->getConnection();
        $this->customerRepository->setConnection($connection);

        $count =  count($this->customerRepository->findAllCustomers());

        mysqli_close($connection);

        return $count;
    }

    public function getAllCustomers()
    {

        $connection = (new DBConnection())->getConnection();
        $this->customerRepository->setConnection($connection);

        $customers = $this->customerRepository->findAllCustomers();

        mysqli_close($connection);

        return $customers;
    }

    public function deleteCustomer($id)
    {

        $connection = (new DBConnection())->getConnection();
        $this->customerRepository->setConnection($connection);

        $result = $this->customerRepository->deleteCustomer($id);

        mysqli_close($connection);

        return $result;
    }

    public function saveCustomer($nic,$name,$contact,$address,$vid, $type, $issue,$vnum)
    {
        $connection = (new DBConnection())->getConnection();
        $connection->autocommit(false);
        $this->customerRepository->setConnection($connection);
        $this->vehicleRepository->setConnection($connection);

        $result = $this->customerRepository->saveCustomer($nic,$name,$contact,$address);


        if($result){
            $result1 = $this->vehicleRepository->saveVehicle($vid, $type, $issue, $nic,$vnum);
            if($result1){
                $connection->commit(true);
                $connection->autocommit(true);
                return $result1;
            }
            else{
                $connection->rollback();
                $connection->autocommit(true);
            }
        }else{
            $connection->rollback();
        }

        mysqli_close($connection);



    }

    public function updateCustomer($nic, $name, $contact, $address)
    {
        $connection = (new DBConnection())->getConnection();
        $this->customerRepository->setConnection($connection);

        $result = $this->customerRepository->updateCustomer($nic,$name,$contact,$address);

        mysqli_close($connection);

        return $result;
    }
}