<?php

namespace App\Controller;

use App\Framework\Base\BaseController;
use App\Framework\Route\Route;
use App\Framework\Factory\PDOFactory;
use App\Manager\CollocationManager;
use App\Manager\UserManager;
use App\Entity\Collocation;
use App\Entity\CollocationRole;
use App\Service\JWTHelper;

class CollocationController extends BaseController
{
    #[Route('/collocation', name: "app_collocation", methods: ['GET'])]
    public function collocation()
    {
        $collocationManager = new CollocationManager(new PDOFactory());
        $userManager = new UserManager(new PDOFactory());

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

        $collocationManager = new CollocationManager(new PDOFactory());
        $collocation = $collocationManager->getCollocation($user);

        if (!$collocation)
        {
            $this->renderJSON([
                "isInCollocation" => "no"
            ]);
            die;
        }

        // $isInCollocation = $collocationManager->isInCollocation($collocation, $user);

        $this->renderJSON([
            "isInCollocation" => "yes"
        ]);
        die;
    }

    #[Route('/collocation/create', name: "app_collocation_create", methods: ['POST'])]
    public function collocation_create()
    {
        $collocationManager = new CollocationManager(new PDOFactory());
        $userManager = new UserManager(new PDOFactory());
        $collocation = new Collocation();

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

        $data = [
            'name' => $_POST['name'],
        ];

        $secreteCode = $collocationManager->secreteCode();

        $collocation->setName($data['name']);
        $collocation->setSecreteCode($secreteCode);
        $collocationManager->insertCollocation($collocation);

        $role = 'admin';
        $collocationManager->insertCollocationRole($collocation, $user, $role);

        $this->renderJSON([
            "isInCollocation" => "yes"
        ]);
        die;
    }
}