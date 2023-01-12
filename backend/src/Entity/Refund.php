<?php

namespace App\Entity;

use App\Framework\Base\BaseEntity;

class Refund extends BaseEntity
{
    private int       $id;
    private \DateTime|string $date;
    private string    $title;
    private float     $amount;
    private array     $payers;

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param  int $id
     * @return void
     */
    public function setId(int $id): void
    {
        $this->id = $id;
    }

    /**
     * @return \DateTime|string
     */
    public function getDate(): \DateTime|string
    {
        return $this->date;
    }

    /**
     * @param  \DateTime|string $date
     * @return void
     */
    public function setDate(\DateTime|string $date): void
    {
        $this->date = $date;
    }

    /**
     * @return string
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * @param  string $id
     * @return void
     */
    public function setTitle(string $title): void
    {
        $this->title = $title;
    }

    /**
     * @return float
     */
    public function getAmount(): float
    {
        return $this->amount;
    }

    /**
     * @param  float $amount
     * @return void
     */
    public function setAmount(float $amount): void
    {
        $this->amount = $amount;
    }

    /**
     * @return array
     */
    public function getPayers(): array
    {
        return $this->payers;
    }

    /**
     * @param  array $payers
     * @return void
     */
    public function setPayers(array $payers): void
    {
        $this->payers = $payers;
    }
    
}