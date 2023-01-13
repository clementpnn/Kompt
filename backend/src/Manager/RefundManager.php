<?php

namespace App\Manager;

use App\Entity\Refund;
use App\Framework\Base\BaseManager;

class RefundManager extends BaseManager
{
    /**
     * @param Refund $refund
     * @return void
     */
    public function insertRefund(Refund $refund): void
    {
        $query = $this->pdo->prepare("INSERT INTO users (name, email, password) VALUES (:name, :email, :password)");
        $query->bindValue("name", $refund->getDate(), \PDO::PARAM_STR);
        $query->bindValue("email", $refund->getTitle(), \PDO::PARAM_STR);
        $query->bindValue("password", $refund->getAmount(), \PDO::PARAM_INT);
        $query->bindValue("password", $refund->getPayers(), \PDO::PARAM_STR);
        $query->execute();
    }
}