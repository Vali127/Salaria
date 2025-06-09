<?php

class EmployeModel {
    public $numEmploye;
    public $nomEmploye;
    public $nbJour;
    public $tauxJournalier;

    public function __construct($numEmploye, $nomEmploye, $nbJour,$tauxJournalier) {
        $this->numEmploye = $numEmploye;
        $this->nomEmploye = $nomEmploye;
        $this->nbJour = $nbJour;
        $this->tauxJournalier = $tauxJournalier;
    }
}
