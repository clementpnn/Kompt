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
     * @param Collocation $id
     * @param User $user_id
     * @return bool
     */
    public function isInCollocation(Collocation $collocation, User $user): bool
    {
        $query = $this->pdo->prepare("SELECT COUNT(*) FROM collocation_roles WHERE collocation_id = :id AND user_id = :user_id");
        $query->bindValue("id", $collocation->getId(), \PDO::PARAM_INT);
        $query->bindValue("user_id", $user->getId(), \PDO::PARAM_INT);
        $query->execute();
        $count = $query->fetchColumn();

        return $count === 1;
    }
}
