<?php
/**
 * Created by IntelliJ IDEA.
 * User: ranjith-suranga
 * Date: 7/20/18
 * Time: 3:42 PM
 */

require_once __DIR__ . '/../CustomerRepository.php';

class CustomerRepositoryImpl implements CustomerRepository
{

    private $connection;


    public function setConnection(mysqli $connection)
    {
        $this->connection = $connection;
    }

    public function saveCustomer($nic,$name,$contact,$address)
    {
        $result = $this->connection->query("INSERT INTO customer VALUES ('{$nic}','{$name}','{$contact}','{$address}')");
        return ($result && ($this->connection->affected_rows > 0));

    }

    public function updateCustomer($nic,$name,$contact,$address)
    {
        $result = $this->connection->query("UPDATE customer SET name='{$name}', contact='{$contact}', address='{$address}' WHERE id='{$nic}'");
        return ($result && ($this->connection->affected_rows > 0));
    }

    public function deleteCustomer($id)
    {
        $result = $this->connection->query("DELETE FROM Customer WHERE id='{$id}'");
        return ($result && ($this->connection->affected_rows > 0));
    }

    public function findCustomer($id)
    {
        $resultset = $this->connection->query("SELECT * FROM Customer WHERE id='{$id}'");
        return $resultset->fetch_assoc();
    }

    public function findAllCustomers()
    {
        $resultset = $this->connection->query("SELECT * FROM Customer");
        return $resultset->fetch_all(MYSQLI_ASSOC);
    }

}