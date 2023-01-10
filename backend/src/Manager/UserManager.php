<?php

namespace App\Manager;

use App\Entity\User;

class UserManager extends BaseManager
{

    /**
     * @param string $email
     * @return ?User
     */
    public function getByMail(string $email): ?User
    {
        $query = $this->pdo->prepare("SELECT * FROM User WHERE email = :email");
        $query->bindValue("email", $email, \PDO::PARAM_STR);
        $query->execute();
        $data = $query->fetch(\PDO::FETCH_ASSOC);

        if ($data) {
            return new User($data);
        }

        return null;
    }


    public function getPwd(string $email)
    {
        $query = $this->pdo->prepare("SELECT * FROM User WHERE email = :email");
        $query->bindValue("email", $email, \PDO::PARAM_STR);
        $query->execute();
        $data = $query->fetch(\PDO::FETCH_ASSOC);

        if ($data) {
            return $data;
        }

        return null;
    }

    public function verifyMail(string $mail): bool
    {
        $query = $this->pdo->prepare("SELECT * FROM User WHERE email = :email");
        $query->bindValue("email", $mail, \PDO::PARAM_STR);
        $query->execute();
        $data = $query->fetch();

        if($data) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * @param User $user
     * @return void
     */
    public function insertUser(User $user): void
    {
        $query = $this->pdo->prepare("INSERT INTO User (username, password, email) VALUES (:username, :password, :email)");
        $query->bindValue("username", $user->getUsername(), \PDO::PARAM_STR);
        $query->bindValue("password", $user->getPassword(), \PDO::PARAM_STR);
        $query->execute();
    }
}