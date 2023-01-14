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
        $query = $this->pdo->prepare("INSERT INTO expenses (date, title, amount, payers, payers_amount, user_id, collocation_id) VALUES (STR_TO_DATE(:date, '%d/%m/%Y %H:%i:%s'), :title, :amount, :payers, :payersAmount, :userId, :collocationId)");
        $query->bindValue("date", $refund->getDate()->format('d/m/Y H:i:s'));
        $query->bindValue("title", $refund->getTitle(), \PDO::PARAM_STR);
        $query->bindValue("amount", $refund->getAmount(), \PDO::PARAM_INT);
        $query->bindValue("payers", $refund->getPayers(), \PDO::PARAM_STR);
        $query->bindValue("payersAmount", $refund->getPayerAmount(), \PDO::PARAM_INT);
        $query->bindValue("userId", $user->getId(), \PDO::PARAM_INT);
        $query->bindValue("collocationId", $collocation->getId(), \PDO::PARAM_INT);
        $query->execute();
    }
}