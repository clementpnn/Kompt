<?php

namespace App\Entity;

use App\Framework\Base\BaseEntity;

class Collocation extends BaseEntity
{
    private string $id;
    private string $name;
    private string $secreteCode;

    /**
     * @return string
     */
    public function getId(): string
    {
        return $this->id;
    }

    /**
     * @param string $id
     * @return void
     */
    public function setId(string $id): void
    {
        $this->id = $id;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     * @return void
     */
    public function setName(string $name): void
    {
        $this->name = $name;
    }

    /**
     * @return string
     */
    public function getSecreteCode(): string
    {
        return $this->secreteCode;
    }

    /**
     * @param string $secreteCode
     * @return void
     */
    public function setSecreteCode(string $secreteCode): void
    {
        $this->secreteCode = $secreteCode;
    }
}
