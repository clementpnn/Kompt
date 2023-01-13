<?php

namespace App\Controller;

use App\Framework\Base\BaseController;
use App\Framework\Route\Route;
use App\Framework\Factory\PDOFactory;
use App\Manager\RefundManager;
use App\Manager\CollocationManager;
use App\Manager\UserManager;
use App\Entity\Refund;
use App\Entity\Collocation;
use App\Entity\User;
use App\Service\JWTHelper;

class CollocationController extends BaseController
{
    #[Route('/collocation', name: "app_collocation", methods: ['GET'])]
    public function collocation()
    {
        $headers = getallheaders();
        if (isset($headers['Authorization'])) {
            $parts = explode(" ", $headers['Authorization']);
            if ($parts[0] === "Bearer" && !empty($parts[1])) {
                $jwt = $parts[1];
                // Utilisez le jeton JWT pour valider ou décoder les informations de l'utilisateur
            }
        }

        // $cred = str_replace("Bearer ", "", getallheaders()['authorization']);
        $token = JWTHelper::decodeJWT($jwt);
        if (!$token)
        {
            $this->renderJSON([
                "message" => "invalid cred"
            ]);
            die;
        }

        $object = json_decode(json_encode($token));
        $email = $object->email;

        var_dump($email);

        // créé un nouveau user avec le mail
        // $this->renderJSON([
        //     "token" => $token
        // ]);

        // $collocationManager = new CollocationManager(new PDOFactory());
        
        // $refund = new Refund();
        // $collocation = new Collocation();
        // $user = new User();

        // $isInCollocation = $collocationManager->isInCollocation($collocation, $user);

    }
}