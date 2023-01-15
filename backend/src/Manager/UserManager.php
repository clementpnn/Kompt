<?php

namespace App\Manager;

use App\Entity\User;
use App\Entity\Collocation;
use App\Framework\Base\BaseManager;

class UserManager extends BaseManager
{
    /**
     * @param string $email
     * @return User|NULL
     */
    public function getByMail(string $email): User|NULL
    {
        $query = $this->pdo->prepare("SELECT id, email, password FROM users WHERE email = :email");
        $query->bindValue("email", $email, \PDO::PARAM_STR);
        $query->execute();
        $data = $query->fetch(\PDO::FETCH_ASSOC);

        if ($data) {
            return new User($data);
        }

        return null;
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
        $query = $this->pdo->prepare("INSERT INTO users (name, email, password) VALUES (:name, :email, :password)");
        $query->bindValue("name", $user->getName(), \PDO::PARAM_STR);
        $query->bindValue("email", $user->getEmail(), \PDO::PARAM_STR);
        $query->bindValue("password", $user->getPassword(), \PDO::PARAM_STR);
        $query->execute();
    }

    /**
     * @param User $user
     * @param Collocation $user
     */
    public function isadmin(User $user, Collocation $collocation)
    {
        $query = $this->pdo->prepare("SELECT COUNT(*) as is_admin
        FROM collocation_roles 
        WHERE collocation_id = :collocationId AND user_id = :userId AND role = 'admin'");
        $query->bindValue(':userId', $user->getId(), \PDO::PARAM_STR);
        $query->bindValue(':collocationId', $collocation->getId(), \PDO::PARAM_STR);
        $query->execute();
        $admin = $query->fetch(\PDO::FETCH_ASSOC);
        return $admin;
    }
}
