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
}
