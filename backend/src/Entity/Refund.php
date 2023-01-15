<?php

namespace App\Entity;

use App\Framework\Base\BaseEntity;

class Refund extends BaseEntity
{
    private int              $id;
    private                  $date;
    private string           $title;
    private int              $amount;
    private string           $payers;
    private int              $payerAmount;

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

    public function getDate()
    {
        return $this->date;
    }

    /**
     * @param  $date
     * @return void
     */
    public function setDate($date): void
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
     * @return int
     */
    public function getAmount(): int
    {
        return $this->amount;
    }

    /**
     * @param  int $amount
     * @return void
     */
    public function setAmount(int $amount): void
    {
        $this->amount = $amount;
    }

    /**
     * @return string
     */
    public function getPayers(): string
    {
        return $this->payers;
    }

    /**
     * @param  string $payers
     * @return void
     */
    public function setPayers(string $payers): void
    {
        $this->payers = $payers;
    }

    /**
     * @return int
     */
    public function getPayerAmount(): int
    {
        return $this->payerAmount;
    }

    /**
     * @param  int $payerAmount
     * @return void
     */
    public function setPayerAmount(int $payerAmount): void
    {
        $this->payerAmount = $payerAmount;
    }
}