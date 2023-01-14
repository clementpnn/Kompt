<?php

namespace App\Service;

use App\Entity\User;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class JWTHelper
{
    public static function buildJWT(User $user): string
    {
        $payload = [
            "email" => $user->getEmail(),
            "exp" => (new \DateTime("+ 1440 minutes"))->getTimestamp()
        ];

        return JWT::encode($payload, "mgkfjdslkgjfdkljshgfkld", "HS256");
    }

    public static function decodeJWT(string $jwt): ?object
    {
        try {
            return JWT::decode($jwt, new Key("mgkfjdslkgjfdkljshgfkld", "HS256"));
        } catch (\Exception $exception) {
            return null;
        }
    }
}
