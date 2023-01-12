<?php

namespace App\Framework\Entity;

abstract class BaseManager
{
    protected $pdo;

    public function __construct($database)
    {
        $this->pdo = $database->getMySqlPDO();
    }
}