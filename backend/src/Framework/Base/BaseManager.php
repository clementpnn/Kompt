<?php

namespace App\Framework\Base;

use App\Interfaces\Database;

abstract class BaseManager
{
    protected \PDO $pdo;

    public function __construct(Database $database)
    {
        $this->pdo = $database->getMySqlPDO();
    }
}