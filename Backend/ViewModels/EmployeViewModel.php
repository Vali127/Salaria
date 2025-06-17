<?php
require_once __DIR__ . '/../Models/EmployeModel.php';
require_once __DIR__ . '/../Models/dbConfig.php';

class EmployeViewModel {
    private $connection;

    public function __construct() {
        $this->connection = dbConnect();
    }

    public function getEmployes() {
        $sql = "SELECT * FROM EMPLOYE";
        $employes = [];

        try {
            $stmt = $this->connection->query($sql);

            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $employes[] = new EmployeModel($row['numEmp'], $row['nomEmp'], $row['nbJour'],$row['tauxJournalier']);
            }

            return $employes;
        } catch (PDOException $e) {
            return ['error' => $e->getMessage()];
        }
    }

   //obtenir la salaire Totale salaire Maximale et salaire Minimale avec le nb des employes

  public function getTotalSalary() {
        $sql = "select count(*) as totalEmploye,SUM(tauxJournalier*nbJour) as salaireTotal FROM EMPLOYE;";
        $data = [];

        try {
            $stmt = $this->connection->query($sql);

            if ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $data = [
                    "nbEmployeTotal" => $row['totalEmploye'],
                    "totalSalary" => $row['salaireTotal']
                ];
            }

            return $data;
        } catch (PDOException $e) {
            return ['error' => $e->getMessage()];
        }
    }
      public function getMaxSalary() {
         $sql = "SELECT MAX(salaire) AS salaireMax,
                 COUNT(*) AS nombreEmployeMax
                 FROM (SELECT nbJour*tauxJournalier AS salaire FROM EMPLOYE) AS sous_salaire
                 WHERE salaire = (SELECT MAX(nbJour*tauxJournalier)
                 FROM EMPLOYE);";

        $data = [];

         try {
             $stmt = $this->connection->query($sql);

             if ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                 $data = [
                     "nbEmployeMax" => $row['nombreEmployeMax'],
                     "maxSalary" => $row['salaireMax']
                 ];
             }

             return $data;
         }
         catch (PDOException $e) {
             return ['error' => $e->getMessage()];
         }
     }
      public function getMinSalary() {
          $sql =   "SELECT MIN(salaire) AS salaireMin,
                    COUNT(*) AS nombreEmployeMin
                    FROM (SELECT nbJour*tauxJournalier AS salaire FROM EMPLOYE) AS sous_salaire
                    WHERE salaire = (SELECT MIN(nbJour*tauxJournalier)
                    FROM EMPLOYE);";

         $data = [];

         try {
             $stmt = $this->connection->query($sql);

             if ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                 $data = [
                     "nbEmployeMin" => $row['nombreEmployeMin'],
                     "minSalary" => $row['salaireMin']
                 ];
             }

             return $data;
         }
         catch (PDOException $e) {
             return ['error' => $e->getMessage()];
         }
     }


    public function insertEmploye($nomEmp,$nbJour,$tauxJournalier){
        $sql = "INSERT INTO EMPLOYE(nomEmp,nbJour,tauxJournalier) VALUES(?,?,?)";
        $stmt = $this -> connection -> prepare($sql);
        return $stmt -> execute([$nomEmp,$nbJour,$tauxJournalier]);
    }

    public function updateEmploye($numEmp,$nomEmp,$nbJour,$tauxJournalier){
        $sql =  "UPDATE EMPLOYE SET nomEmp = ?,nbJour =?,tauxJournalier=? WHERE numEmp =?";
        $stmt = $this -> connection -> prepare($sql);

        return $stmt -> execute([$nomEmp,$nbJour,$tauxJournalier,$numEmp]);

    }

    public function deleteEmploye($numEmp){
        $sql = "DELETE FROM EMPLOYE WHERE numEmp = ?";
        $stmt = $this -> connection -> prepare($sql);
        return $stmt -> execute([$numEmp]);
    }

    public function verifyLoginInformation($username, $password){

                if(empty($username) || empty($password)){
                    return [ "message"=>"Veuillez remplir tous les champs !!","access"=>false];
                }

                $sql = "SELECT * FROM USER WHERE user_name = :nom ";
                $stmt = $this->connection->prepare($sql);
                $stmt->execute(['nom' => $username]);
                $result = $stmt->fetch(PDO::FETCH_ASSOC);

                if($result) {
                    $db_password = $result['user_password'];
                    if( $password == $db_password ) {
                        return  [ "message"=>"Information correct ! Bienvue sur Salaria","access"=>true] ;
                    }
                    return [ "message"=>"Accès réfusé ! verifier vos informations","access"=>false];
                }
                return [ "message"=>"Accès réfusé ! utilisateur inexistant","access"=>false];
    }

}
