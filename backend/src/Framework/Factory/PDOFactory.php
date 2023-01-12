<?php

namespace App\Framework\Factory;

class PDOFactory
{
    private string $host;
    private string $dbName;
    private string $userName;
    private string $password;

    public function __construct(string $host = '', string $dbName = '', string $userName = '', string $password = '')
    {
        $config = parse_ini_file('../../../../.env');
        $this->host = $config['host'];
        $this->dbName = $config['dbName'];
        $this->userName = $config['userName'];
        $this->password = $config['password'];
    }

    public function getMySqlPDO(): \PDO
    {
        return new \PDO("postgres:host=" . $this->host . ";dbname=" . $this->dbName, $this->userName, $this->password);
    }

    public function getPostgresPDO(): \PDO
    {
        return new \PDO("postgres:host=" . $this->host . ";dbname=" . $this->dbName, $this->userName, $this->password);
    }

    public function getMongoPDO(): \PDO
    {
        return new \PDO("postgres:host=" . $this->host . ";dbname=" . $this->dbName, $this->userName, $this->password);
    }
}