<?php

namespace App\Manager;

use App\Entity\User;
use App\Framework\Entity\BaseManager;

class UserManager extends BaseManager
{

    // /**
    //  * @param string $email
    //  * @return ?User
    //  */
    // public function getByMail(string $email): ?User
    // {
    //     $query = $this->pdo->prepare("SELECT * FROM User WHERE email = :email");
    //     $query->bindValue("email", $email, \PDO::PARAM_STR);
    //     $query->execute();
    //     $data = $query->fetch(\PDO::FETCH_ASSOC);

    //     if ($data) {
    //         return new User($data);
    //     }

    //     return null;
    // }

    // public function getPwd(string $email)
    // {
    //     $query = $this->pdo->prepare("SELECT * FROM User WHERE email = :email");
    //     $query->bindValue("email", $email, \PDO::PARAM_STR);
    //     $query->execute();
    //     $data = $query->fetch(\PDO::FETCH_ASSOC);

    //     if ($data) {
    //         return $data;
    //     }

    //     return null;
    // }

     /**
     * @param $user
     * @return string
     */
    public function displayLine(User $user): string
    {
        $query = $this->pdo->prepare("SELECT expenses.*, users.name AS user_name, collocations.name AS collocation_name
                        FROM expenses 
                        JOIN users ON expenses.user_id = users.id
                        JOIN collocations ON expenses.collocation_id = collocations.id
                        WHERE expenses.user_id = :userId");
        $query->bindValue(':userId', $user->getId(), \PDO::PARAM_STR);
        $query->execute();
        $expenseInfo = $query->fetchAll(\PDO::FETCH_ASSOC);
        return $expenseInfo;
    }


     /**
     * @param $user
     * @return int
     */
    public function countReceivable(User $user): int
    {
        $query = $this->pdo->prepare("SELECT SUM(amount) FROM expenses WHERE payers LIKE :userId");
        $query->bindValue(':userId', $user->getId(), \PDO::PARAM_STR);
        $query->execute();
        $totalReceivable = $query->fetchColumn();
        return $totalReceivable;
    }

    /**
     * @param $user
     * @return int
     */
    public function countToPay(User $user): int
    {
        $query = $this->pdo->prepare("SELECT SUM(amount) FROM expenses WHERE user_id = :userId AND payers NOT LIKE :userId");
        $query->bindValue(':userId', $user->getId(), \PDO::PARAM_STR);
        $query->execute();
        $totalOwed = $query->fetchColumn();
        return $totalOwed;
    }

    /**
     * @param $user
     * @return int
     */
    public function countPeople(User $user): int
    {
        $query = $this->pdo->prepare("SELECT COUNT(DISTINCT user_id) FROM collocation_roles WHERE collocation_id = (SELECT collocation_id FROM users WHERE id = :userId)");
        $query->bindValue(':userId', $user->getId(), \PDO::PARAM_STR);
        $query->execute();
        $numPeople = $query->fetchColumn();
        return $numPeople;
    }

    /**
     * @param $data
     * @return bool
     */
    public function validateData($data): bool
    {
        if (empty($data['name']) || empty($data['email']) || empty($data['password']) || empty($data['passwordConfirm']))
        {
            return false;
        }

        if ($data['password'] !== $data['passwordConfirm'])
        {
            return false;
        }

        return true;
    }

    /**
     * @param string $email
     * @return bool
     */
    public function verifyMail(string $email): bool
    {
        $query = $this->pdo->prepare("SELECT EXISTS(SELECT 1 FROM users WHERE email = :email)");
        $query->bindValue("email", $email, \PDO::PARAM_STR);
        $query->execute();
        return (bool) $query->execute();
    }

    /**
     * @param string $password
     * @return string
     */
    function hash_password(string $password): string
    {
        $options = [
            'cost' => 12,
        ];
        $hashed_password = password_hash($password, PASSWORD_DEFAULT, $options);
        return $hashed_password;
    }
    
    /**
     * @param User $user
     * @return void
     */
    public function insertUser(User $user): void
    {
        $query = $this->pdo->prepare("INSERT INTO users (name, email, password) VALUES (:username, :email, :password)");
        $query->bindValue("username", $user->getName(), \PDO::PARAM_STR);
        $query->bindValue("email", $user->getEmail(), \PDO::PARAM_STR);
        $query->bindValue("password", $user->getPassword(), \PDO::PARAM_STR);
        $query->execute();
    }
}