import React from "react";
import {useEffect} from "react";
import UseEmployeForm from "./UseEmployeForm.jsx";
import {updateEmploye} from "../Script/fetch.js";

export default function ModifyModal({ visible, onClose,employe }) {
    const {
        name,setName,
        day,setDay,
        rate,setRate,
        refreshName,
        refreshDay,
        refreshRate,
        errors
    } = UseEmployeForm();

   //definir les valeurs des infos employes a modifier pour afficher dans chaque value input
    useEffect(() => {
        if (employe) {
            setName(employe.nomEmploye);
            setDay(employe.nbJour);
            setRate(employe.tauxJournalier);
        }
    }, [employe]);

    if (!visible) return null;

    return (
        <div className="section-modal">
            <div className="overlay">
                <div className="modal-content animate__animated animate__fadeInDown " style={{animationDuration : '0.7s'}} >
                    <form method="post">
                        <h2>Modifier employe : {employe.numEmploye} </h2>
                        <p><label>Nom :</label>
                            <input type="text" value={name} onChange={refreshName} /></p>
                        <p><label>Nombre de jours :</label>
                            <input type="text" value={day} onChange={refreshDay} /></p>
                        <p className="validation_error_message">{errors.dayType}</p>
                        <p><label>Taux journalier (%) :</label>
                            <input type="text" value={rate} onChange={refreshRate} /></p>
                        <p className="validation_error_message">{errors.rateType}</p>
                        <p id="request-result">Résultat :</p>
                        <div className="btn-div">
                            <button className="btn" type="reset" id="close-btn" onClick={onClose}>Fermer</button>
                            <button className="btn" type="submit" id="confirm-btn" onClick={(e)=>updateEmploye(e,employe.numEmploye,name,day,rate)}>Confirmer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
