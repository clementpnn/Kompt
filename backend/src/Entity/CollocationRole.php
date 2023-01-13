<?php

namespace App\Entity;

use App\Framework\Base\BaseEntity;

class CollocationRole extends BaseEntity
{
    private int $collocation;
    private int $user;
    private string $role;

    /**
     * @return int
     */
    public function getCollocation(): int
    {
        return $this->collocation;
    }

    /**
     * @param int $collocation
     * @return void
     */
    public function setCollocation(int $collocation): void
    {
        $this->collocation = $collocation;
    }

    /**
     * @return int
     */
    public function getUser(): int
    {
        return $this->user;
    }

    /**
     * @param int $user
     * @return void
     */
    public function setUser(int $user): void
    {
        $this->user = $user;
    }

    /**
     * @return string
     */
    public function getRole(): string
    {
        return $this->role;
    }

    /**
     * @param string $role
     * @return void
     */
    public function setRole(string $role): void
    {
        $this->role = $role;
    }
}