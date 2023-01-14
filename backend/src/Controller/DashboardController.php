<?php

namespace App\Controller;

use App\Framework\Base\BaseController;
use App\Framework\Route\Route;
use App\Framework\Factory\PDOFactory;
use App\Manager\UserManager;
use App\Manager\CollocationManager;
use App\Entity\User;
use App\Entity\Collocation;
use App\Service\JWTHelper;

class DashboardController extends BaseController
{
    #[Route('/dashboard', name: "app_dashboard", methods: ['GET'])]
    public function dashboard()
    {
        $userManager = new UserManager(new PDOFactory());
        $collocationManager = new CollocationManager(new PDOFactory());


        $headers = getallheaders();
        if (isset($headers['Authorization'])) {
            $jwt = $collocationManager->bearer($headers);
        }
        
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
        $user = $userManager->getByMail($email);

        if (!$user)
        {
            $this->renderJSON([
                "message" => "no user"
            ]);
            die;
        }
    
        $collocation = $collocationManager->getCollocation($user);

        // $TotalPeople = $userManager->countPeople($user);
        // $totalToPay = $userManager->countToPay($user);
        // $totalReceivable = $userManager->countReceivable($user);
        // $totalLine = $userManager->displayLine($user);
    }
}
