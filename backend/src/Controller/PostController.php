<?php

namespace App\Controller;

use App\Framework\Entity\BaseController;
use App\Framework\Route\Route;
use App\Service\JWTHelper;

class PostController extends BaseController
{
    #[Route('/toto', name: "app_mes_couilles", methods: ['GET'])]
    public function index()
    {
        $cred = str_replace("Bearer ", "", getallheaders()['authorization']);
        $token = JWTHelper::decodeJWT($cred);
        if (!$token) {
            $this->renderJSON([
                "message" => "invalid cred"
            ]);
            die;
        }

        $posts = [1, 12 , 3, 4];

        $this->renderJSON([
            "posts" => $posts
        ]);
    }

    #[Route("/post/{id}")]
    public function showOne(string $id)
    {
        var_dump($id);
    }
}
