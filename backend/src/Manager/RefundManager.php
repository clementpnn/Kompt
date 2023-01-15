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

    /**
     * @param int $id
     * @return Refund|NULL
     */
    public function expense(int $id): Refund|NULL
    {
        $query = $this->pdo->prepare("SELECT expenses.id, expenses.date, expenses.title, expenses.amount, expenses.payers, expenses.payers_amount
        FROM expenses
        WHERE expenses.id = :id");
        $query->bindValue("id", $id, \PDO::PARAM_INT);
        $query->execute();
        $data = $query->fetch(\PDO::FETCH_ASSOC);

        if ($data) {
            return new Refund($data);
        }

        return null;
    }

    /**
     * @param int $id
     */
    public function totalPay(int $id)
    {
        $query = $this->pdo->prepare("SELECT SUM(amount) as total_refunds
        FROM payments
        WHERE expense_id = :id
        ");
        $query->bindValue("id", $id, \PDO::PARAM_INT);
        $query->execute();
        $data = $query->fetch(\PDO::FETCH_ASSOC);

        return $data;
    }

    public function payersAmount($id, $userId)
    {
        $query = $this->pdo->prepare("SELECT users.id, users.name, expenses.payers_amount, SUM(payments.amount) as paid
        FROM expenses
        JOIN users ON expenses.user_id = users.id
        LEFT JOIN payments ON expenses.id = payments.expense_id 
        AND payments.sender_id = :userId
        WHERE expenses.id = :id
        GROUP BY expenses.id
        ");
        $query->bindValue("id", $id, \PDO::PARAM_INT);
        $query->bindValue("userId", $userId, \PDO::PARAM_INT);
        $query->execute();
        $data = $query->fetch(\PDO::FETCH_ASSOC);

        return $data;
    }
}
