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

class RefundController extends BaseController
{
    #[Route('/refund', name: "app_refund", methods: ['POST'])]
    public function refund()
    {
        $data = [
            'title' => $_POST['title'],
            'amount' => $_POST['amount'],
        ];

        $refundManager = new RefundManager(new PDOFactory());
        $collocationManager = new CollocationManager(new PDOFactory());
        
        $refund = new Refund();
        $collocation = new Collocation();
        $user = new User();

        $users = $collocationManager->getUsers($collocation, $user);

        $dateFormated = date('d/m/Y');

        $refund->setDate($dateFormated);
        $refund->setTitle($data['title']);
        $refund->setAmount($data['amount']);
        $refund->setPayers($users);
        $refundManager->insertRefund($refund);
    }
}