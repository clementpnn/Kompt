<?php

namespace App\Entity;

use App\Framework\Base\BaseEntity;

class Collocation extends BaseEntity
{
    private        $id;
    private string $name;
    private string $secreteCode;

    public function getId()
    {
        return $this->id;
    }

    /**
     * @return void
     */
    public function setId($id): void
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
