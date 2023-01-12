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

        $user = new User();
        $collocation = new Collocation();

        $TotalPeople = $userManager->countPeople($user);
        $totalToPay = $userManager->countToPay($user);
        $totalReceivable = $userManager->countReceivable($user);
        $totalLine = $userManager->displayLine($user);
    }
}

// récupère le pourcentage de remboursement
// $query = $pdo->prepare("SELECT expenses.*, 
//                  (SELECT SUM(amount) FROM payments WHERE payments.expense_id = expenses.id) / expenses.payers_amount * 100 AS percentage_reimbursed, 
//                  users.name AS user_name, collocations.name AS collocation_name
//                  FROM expenses 
//                  JOIN users ON expenses.user_id = users.id
//                  JOIN collocations ON expenses.collocation_id = collocations.id
//                  WHERE expenses.user_id = :userId OR expenses.payers LIKE :userId");
// $query->bindValue(':userId', $user->getId(), \PDO::PARAM_STR);
// $query->execute();
// $expenseInfo = $query->fetchAll(\PDO::FETCH_ASSOC);

// récupère la somme de remboursement
// $query = $pdo->prepare("SELECT expenses.*, 
//                  (SELECT SUM(amount) FROM payments WHERE payments.expense_id = expenses.id) AS amount_reimbursed,
//                  users.name AS user_name, collocations.name AS collocation_name
//                  FROM expenses 
//                  JOIN users ON expenses.user_id = users.id
//                  JOIN collocations ON expenses.collocation_id = collocations.id
//                  WHERE expenses.user_id = :userId OR expenses.payers LIKE :userId");
// $query->bindValue(':userId', $user->getId(), \PDO::PARAM_STR);
// $query->execute();
// $expenseInfo = $query->fetchAll(\PDO::FETCH_ASSOC);
