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
     * @return ?int
     */
    public function checkCode(Collocation $collocation): ?int
    {
        $query = $this->pdo->prepare("SELECT id FROM collocations WHERE secret_code = :collocationCode");
        $query->bindValue("collocationCode", $collocation->getSecreteCode(), \PDO::PARAM_STR);
        $query->execute();
        $result = $query->fetch();
        if($result) {
            return new Collocation($result); ;
        } else {
            return null;
        }

    }

    // /**
    //  * @param Collocation $id
    //  * @param User $user_id
    //  * @return bool
    //  */
    // public function isInCollocation(Collocation $collocation, User $user): bool
    // {
    //     $query = $this->pdo->prepare("SELECT COUNT(*) FROM collocation_roles WHERE collocation_id = :id AND user_id = :user_id");
    //     $query->bindValue("id", $collocation->getId(), \PDO::PARAM_INT);
    //     $query->bindValue("user_id", $user->getId(), \PDO::PARAM_INT);
    //     $query->execute();
    //     $count = $query->fetchColumn();

    //     return $count === 1;
    // }

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
        $data = $query->fetchAll(\PDO::FETCH_ASSOC);

        if ($data) {
            return new Collocation($data);
        }

        return null;
    }
}
