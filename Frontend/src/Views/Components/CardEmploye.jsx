import React from "react";

export default function CardEmploye({ employe, onEditEmploye, onDeleteEmploye }) {
    return (
        <tr>
            <td className="col-1">{employe.numEmploye}</td>
            <td className="col-2">{employe.nomEmploye}</td>
            <td className="col-3">{employe.nbjours}</td>
            <td className="col-4">{employe.tauxJournalier}</td>

            <td className="col-5">
                <button onClick={() => onEditEmploye()}>Modifier</button>
            </td>
            <td className="col-6">
                <button onClick={() => onDeleteEmploye(employe.numEmploye)}>Supprimer</button>
            </td>
        </tr>
    );
}
