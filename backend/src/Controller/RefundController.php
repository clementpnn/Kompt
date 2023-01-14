<?php

namespace App\Controller;

use App\Framework\Base\BaseController;
use App\Framework\Route\Route;
use App\Framework\Factory\PDOFactory;
use App\Manager\RefundManager;
use App\Manager\CollocationManager;
use App\Manager\UserManager;
use App\Entity\Refund;
use App\Service\JWTHelper;

class RefundController extends BaseController
{
    #[Route('/refund/create', name: "app_refund_create", methods: ['POST'])]
    public function refundCreate()
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

        if (!$collocation)
        {
            $this->renderJSON([
                "message" => "no collocation"
            ]);
            die;
        }
        
        $data = [
            'title' => $_POST['title'],
            'amount' => $_POST['amount'],
        ];

        $refundManager = new RefundManager(new PDOFactory());
        $refund = new Refund();

        $users = $collocationManager->getUsers($collocation, $user);

        $dateFormated = date('d/m/Y');

        $refund->setDate($dateFormated);
        $refund->setTitle($data['title']);
        $refund->setAmount($data['amount']);
        $refund->setPayers($users);
        $refundManager->insertRefund($refund, $user, $collocation);

        if (!$user)
        {
            $this->renderJSON([
                "message" => "refund create"
            ]);
            die;
        }
    }
}