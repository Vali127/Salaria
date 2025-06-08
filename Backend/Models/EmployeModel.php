<?php

class EmployeModel {
    public $numEmploye;
    public $nomEmploye;
    public $nbjours;

    public function __construct($numEmploye, $nomEmploye, $nbjours,$tauxJournalier) {
        $this->numEmploye = $numEmploye;
        $this->nomEmploye = $nomEmploye;
        $this->nbjours = $nbjours;
        $this->tauxJournalier = $tauxJournalier;
    }
}
