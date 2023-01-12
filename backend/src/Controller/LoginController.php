<?php

namespace App\Controller;

use App\Framework\Base\BaseController;
use App\Framework\Factory\PDOFactory;
use App\Manager\UserManager;
use App\Framework\Route\Route;
use App\Service\JWTHelper;

class LoginController extends BaseController
{
    #[Route("/login", name: "app_login", methods: ["POST"])]
    public function login()
    {
        $data = [
            'email' => $_POST['email'],
            'password' => $_POST['password'],
        ];

        $userManager = new UserManager(new PDOFactory());

        $user = $userManager->getByMail($data['email']);

        if (!$user)
        {
            // http_response_code(401); // définit le code d'état d'erreur à 401 (Unauthorized)
            // echo "Unauthorized: Invalid email or password";
            // die();

            $this->renderJSON(['error' => 'Utilisateur introuvable']);
            return;
        }

        if (!password_verify($data['password'], $user['password']))
        {
            $this->renderJSON(['error' => 'Mot de passe incorrect']);
            return;
        }

        ($user)->setId($user['id']);

        $jwt = JWTHelper::buildJWT($user);

        $this->renderJSON([
            "token" => $jwt
        ]);
    }
}