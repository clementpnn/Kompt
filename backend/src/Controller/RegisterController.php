<?php

namespace App\Controller;

use App\Framework\Base\BaseController;
use App\Framework\Route\Route;
use App\Framework\Factory\PDOFactory;
use App\Manager\UserManager;
use App\Entity\User;
use App\Service\JWTHelper;

class RegisterController extends BaseController
{
    #[Route('/register', name: "app_register", methods: ['POST'])]
    public function register()
    {
        $data = [
            'name' => $_POST['name'],
            'email' => $_POST['email'],
            'password' => $_POST['password'],
            'passwordConfirm' => $_POST['passwordConfirm'],
        ];
        
        $userManager = new UserManager(new PDOFactory());

        if (!$userManager->validateData($data)) {
            echo "Données de formulaire non valides";
            exit;
        }
        
        if (!$userManager->verifyMail($data['email'])) {
            echo "This email is already taken";
            exit;
        }

        $hash_password = $userManager->hash_password($data['password']);

        $user = new User();
        $user->setName($data['name']);
        $user->setEmail($data['email']);
        $user->setPassword($hash_password);
        $userManager->insertUser($user);
        $jwt = JWTHelper::buildJWT($user);

        echo $jwt;
        exit;
    }
}
