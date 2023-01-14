<?php

namespace App\Manager;

use App\Entity\Refund;
use App\Entity\User;
use App\Entity\Collocation;
use App\Framework\Base\BaseManager;

class RefundManager extends BaseManager
{
    /**
     * @param Refund $refund
     * @param User $user
     * @param Collocation $collocation
     * @return void
     */
    public function insertRefund(Refund $refund, User $user, Collocation $collocation): void
    {
        $query = $this->pdo->prepare("INSERT INTO expenses (date, title, amount, payers, user_id, collocation_id) VALUES (:date, :title, :amount, payers, userId, collocationId)");
        $query->bindValue("date", $refund->getDate(), \PDO::PARAM_STR);
        $query->bindValue("title", $refund->getTitle(), \PDO::PARAM_STR);
        $query->bindValue("amount", $refund->getAmount(), \PDO::PARAM_INT);
        $query->bindValue("payers", $refund->getPayers(), \PDO::PARAM_STR);
        $query->bindValue("userId", $user->getId(), \PDO::PARAM_INT);
        $query->bindValue("collocationId", $collocation->getId(), \PDO::PARAM_INT);
        $query->execute();
    }
}