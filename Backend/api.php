<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once __DIR__ . '/Models/EmployeModel.php';
require_once __DIR__ . '/ViewModels/EmployeViewModel.php';

$method = $_SERVER['REQUEST_METHOD'];
$vm = new EmployeViewModel();

// verifier si donnees non isNull
function isEmptyOrWhiteSpace($str) {
    return !isset($str) || trim($str) === '';
}
function isInteger($str){
    return filter_var($str,FILTER_VALIDATE_INT) !== false;
}
if ($method == 'GET') {
    $employes = $vm->getEmployes();
    echo json_encode($employes);
}

//recois l objet employe{"nameEmp":...,"nbDay":}
else if($method == 'POST'){
    $employeData = json_decode(file_get_contents("php://input"),true);

    try{
         //test si vide
         if(isEmptyOrWhiteSpace($employeData['nameEmp'])||isEmptyOrWhiteSpace($employeData['nbDay'])||isEmptyOrWhiteSpace($employeData['dayRate'])){
                echo json_encode(["message"=>"Resultat: Veuillez entrez toutes les informations"]);
                return;
           }

         //test si non entier
         else if(!isInteger($employeData["nbDay"])){
            echo json_encode(["message" => "Resultat: Entrer un nombre entier pour le nombre de jours "]);
            return;
         }

        //sinon inserer
         else{
                $vm->insertEmploye($employeData['nameEmp'],$employeData['nbDay'],$employeData['dayRate']);
               echo json_encode(["message"=>"Resultat: Nouveau employe ajoute"]);
         }

    }
    catch(Exception $e){
        echo json_encode(["message"=>"Resultat: Veuillez entrer des donnees corrects"]);

    }
}
else if($method == 'PUT'){
    $employeData = json_decode(file_get_contents("php://input"),true);

    try{
        $vm -> updateEmploye($employeData["numEmp"],$employeData["nameEmp"],$employeData["nbDay"],$employeData["dayRate"]);
        echo json_encode(["message"=>"Resultat: modification employe effectue"]);
    }
    catch(Exception $e){
        echo json_encode(["message"=>"Resultat: Erreur lors de la modification"]);
    }
}
