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

        $users = $collocationManager->getUsers($collocation, $user);
        $sum = $data['amount'];
        $num = count($users);
        $payerAmount =  $sum / $num;
        $payerAmount = intval($payerAmount);
        $refundManager = new RefundManager(new PDOFactory());
        $refund = new Refund();

        $string = json_encode($users);

        $dateFormated = new \DateTime();

        $refund->setDate($dateFormated);
        $refund->setTitle($data['title']);
        $refund->setAmount($data['amount']);
        $refund->setPayers($string);
        $refund->setPayerAmount($payerAmount);
        $refundManager->insertRefund($refund, $user, $collocation);

        $this->renderJSON([
            "message" => "refund create"
        ]);
        die;
    }

    #[Route('/refund', name: "app_refund", methods: ['POST'])]
    public function refund()
    {
        $userManager = new UserManager(new PDOFactory());
        $collocationManager = new CollocationManager(new PDOFactory());
        $RefundManager = new RefundManager(new PDOFactory());

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

        $data = [
            'id' => $_POST['id'],
        ];

        $collocation = $collocationManager->getCollocation($user);

        if (!$collocation)
        {
            $this->renderJSON([
                "message" => "no collocation"
            ]);
            die;
        }

        $refund = $RefundManager->expense($data['id']);
        $totPay = $RefundManager->totalPay($data['id']);

        if (!$refund)
        {
            $this->renderJSON([
                "message" => "no collocation"
            ]);
            die;
        }

        $payers = json_decode($refund->getPayers());
        $pay = array();
        foreach ($payers as $payer) {
            $data = $RefundManager->payersAmount($data['id'], $payer);
            array_push($pay, $data);
        }

        $this->renderJSON([
            "date" => $refund->getDate(),
            "title" => $refund->getTitle(),
            "amount" => $refund->getAmount(),
            "totalPays" => $totPay['total_refunds'],
            "pays" => $pay
        ]);
        die;
    }
}