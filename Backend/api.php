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
if ($method == 'GET'&&isset($_GET["total"])) {
    $data = $vm->getTotalSalary();
    echo json_encode($data);
    exit;
}
else if ($method == 'GET'&&isset($_GET["max"])) {
    $data = $vm->getMaxSalary();
    echo json_encode($data);
    exit;
}
else if ($method == 'GET'&&isset($_GET["min"])) {
    $data = $vm->getMinSalary();
    echo json_encode($data);
    exit;
}

else if ($method == 'GET') {
    $employes = $vm->getEmployes();
    echo json_encode($employes);
}

//recois l objet employe{"nameEmp":...,"nbDay":}
else if($method == 'POST'){
    $employeData = json_decode(file_get_contents("php://input"),true);

    try{
        if( $employeData['action'] == 'login_confirmation' ){
            $data = $vm->verifyLoginInformation( $employeData["object"]["username"], $employeData["object"]["password"] );
            echo json_encode($data);
        }
         //test si vide
         else if(isEmptyOrWhiteSpace($employeData['nameEmp'])||isEmptyOrWhiteSpace($employeData['nbDay'])||isEmptyOrWhiteSpace($employeData['dayRate'])){
             echo json_encode(["message"=>"Resultat: Veuillez entrez toutes les informations"]);
             exit;
           }

         //test si non entier
         else if(!isInteger($employeData["nbDay"])){
            echo json_encode(["message" => "Resultat: Entrer un nombre entier pour le nombre de jours "]);
            exit;
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
else if($method=='DELETE'){
    $numEmploye = json_decode(file_get_contents("php://input"),true);

    try{
        $vm -> deleteEmploye($numEmploye["numEmp"]);
        echo json_encode(["message"=>"Resultat: suppression employe effectue"]);
    }
    catch(Exception $e){
        echo json_encode(["message"=>"Resultat: Erreur lors de la suppression"]);
    }
}