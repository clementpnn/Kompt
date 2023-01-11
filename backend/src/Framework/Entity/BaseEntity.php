<?php

namespace App\Framework\Entity;

use App\Framework\Traits\Hydrator;

abstract class BaseEntity
{
    use Hydrator;

    public function __construct(array $data = [])
    {
       $this->hydrate($data);
    }
}