import React from "react";

export default function CardEmploye({ employe, onEditEmploye, onDeleteEmploye }) {
    return (
        <tr >
            <td className="col-1 text-danger" style={{paddingLeft : '25px'}} >{employe.numEmploye}</td>
            <td className="col-2">{employe.nomEmploye}</td>
            <td className="col-3">{employe.nbJour}</td>
            <td className="col-4">{employe.tauxJournalier.toLocaleString('fr-FR')}</td>
            <td className="col-4">{(employe.nbJour*employe.tauxJournalier).toLocaleString('fr-FR')}</td>


            <td className="col-5">
                <button className={"btn btn-primary"} style={{width : '80px'}} onClick={() => onEditEmploye(employe.numEmploye)}>Modifier</button>
            </td>
            <td className="col-6" style={{paddingRight : '25px'}} >
                <button className={"btn btn-danger"}  style={{width : '80px'}} onClick={() => onDeleteEmploye(employe.numEmploye)}>Supprimer</button>
            </td>
        </tr>
    );
}
