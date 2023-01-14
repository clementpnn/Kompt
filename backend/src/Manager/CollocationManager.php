<?php

namespace App\Manager;

use App\Entity\Collocation;
use App\Entity\User;
use App\Framework\Base\BaseManager;

class CollocationManager extends BaseManager
{
    /**
     * @param int $id
     * @param int $excludeId
     * @return array
     */
    public function getUsers(Collocation $collocation, User $user): array
    {
        $query = $this->pdo->prepare("SELECT users.id FROM users JOIN collocation_roles ON users.id = collocation_roles.user_id WHERE collocation_roles.collocation_id = :id AND users.id != :excludeId");
        $query->bindValue("id", $collocation->getId(), \PDO::PARAM_INT);
        $query->bindValue("excludeId", $user->getId(), \PDO::PARAM_INT);
        $query->execute();
        $data = $query->fetchAll(\PDO::FETCH_COLUMN, 0);
        
        return $data;
    }

    /**
     * @param Collocation $collocation
     * @return int
     */
    public function insertCollocation(Collocation $collocation): int
    {
        $query = $this->pdo->prepare("INSERT INTO collocations (name, secret_code) VALUES (:name, :secretCode)");
        $query->bindValue("name", $collocation->getName(), \PDO::PARAM_STR);
        $query->bindValue("secretCode", $collocation->getSecreteCode(), \PDO::PARAM_STR);
        $query->execute();

        return $this->pdo->lastInsertId();
    }

    /**
     * @param Collocation $collocation
     * @param User $user
     * @param string $role
     * @return void
     */
    public function insertCollocationRole(Collocation $collocation, User $user, string $role): void
    {
        $query = $this->pdo->prepare("INSERT INTO collocation_roles (collocation_id, user_id, role) VALUES (:collocationId, :userId, :role)");
        $query->bindValue("collocationId", $collocation->getId(), \PDO::PARAM_INT);
        $query->bindValue("userId", $user->getId(), \PDO::PARAM_INT);
        $query->bindValue("role", $role, \PDO::PARAM_STR);
        $query->execute();
    }

    /**
     * @param Collocation $collocation
     * @return ?Collocation
     */
    public function checkCode(Collocation $collocation): ?Collocation
    {
        $query = $this->pdo->prepare("SELECT id FROM collocations WHERE secret_code = :collocationCode");
        $query->bindValue("collocationCode", $collocation->getSecreteCode(), \PDO::PARAM_STR);
        $query->execute();
        $result = $query->fetch(\PDO::FETCH_ASSOC);
        if($result) {
            return new Collocation($result); ;
        } else {
            return null;
        }
    }

    /**
     * @param array $headers
     * @return string
     */
    public function bearer(array $headers): string
    {
        $parts = explode(" ", $headers['Authorization']);
        if ($parts[0] === "Bearer" && !empty($parts[1]))
        {
            $jwt = $parts[1];
        }

        return $jwt;
    }

    /**
     * @return string
     */
    public function secreteCode(): string
    {
        $randomString = bin2hex(random_bytes(6));
        $randomNumber = rand(0,9);
        $randomString = $randomNumber . $randomString;
        $randomString = substr($randomString, 0, 12);

        return $randomString;
    }

    /**
     * @param User $user
     * @return Collocation|NULL
     */
    public function getCollocation(User $user): Collocation|NULL
    {
        $query = $this->pdo->prepare("SELECT id FROM collocations JOIN collocation_roles ON collocations.id = collocation_roles.collocation_id WHERE collocation_roles.user_id = :userId");
        $query->bindValue(':userId', $user->getId(), \PDO::PARAM_INT);
        $query->execute();
        $data = $query->fetch(\PDO::FETCH_ASSOC);

        if ($data) {
            return new Collocation($data);
        }

        return null;
    }

    /**
     * @param User $user
     * @param Collocation $collocation
     */
    public function displayLine(User $user, Collocation $colocation)
    {
        $query = $this->pdo->prepare("SELECT 
        expenses.id, 
        expenses.date, 
        expenses.title, 
        CASE 
          WHEN expenses.user_id = :userId THEN expenses.amount 
          ELSE expenses.payers_amount 
        END AS amount_due,
        SUM(CASE 
          WHEN expenses.user_id = :userId THEN payments.amount 
          ELSE 0 
        END) as total_paid_by_users,
        SUM(payments.amount) as payments_amount,
        CASE 
          WHEN expenses.user_id = :userId THEN SUM(payments.amount) 
          ELSE NULL 
        END as total_amount
      FROM expenses
      LEFT JOIN payments ON expenses.id = payments.expense_id 
      WHERE expenses.collocation_id = :collocationId 
      GROUP BY expenses.id      
      ");
        $query->bindValue('userId', $user->getId(), \PDO::PARAM_INT);
        $query->bindValue('collocationId', $colocation->getId(), \PDO::PARAM_INT);
        $query->execute();
        $expenseInfo = $query->fetchAll(\PDO::FETCH_ASSOC);
        return $expenseInfo;
    }

    /**
     * @param User $user
     * @param Collocation $collocation
     * @return ?int
     */
    public function countToPay(User $user, Collocation $collocation): ?int
    {
        $query = $this->pdo->prepare("SELECT SUM(expenses.payers_amount - payments.amount) AS amount_due FROM expenses JOIN payments ON expenses.id = payments.expense_id WHERE expenses.collocation_id = :collocationId AND expenses.user_id = :userId");
        $query->bindValue(':userId', $user->getId(), \PDO::PARAM_INT);
        $query->bindValue(':collocationId', $collocation->getId(), \PDO::PARAM_INT);
        $query->execute();
        $totalOwed = $query->fetchColumn();
        return $totalOwed;
    }

    /**
     * @param Collocation $collocation
     * @return int
     */
    public function countPeople(Collocation $collocation): int
    {
        $query = $this->pdo->prepare("SELECT COUNT(DISTINCT user_id) FROM collocation_roles WHERE collocation_id = :collocationId");
        $query->bindValue(':collocationId', $collocation->getId(), \PDO::PARAM_STR);
        $query->execute();
        $numPeople = $query->fetchColumn();
        return $numPeople;
    }
}
