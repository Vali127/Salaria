import React from "react";
import {postEmployee} from "../Script/fetch.js";
import UseEmployeForm from "./UseEmployeForm.jsx";

export  default function AddModal({visible,hideModal}) {
    const {
        name,setName,
        day,setDay,
        rate,setRate,
        refreshName,
        refreshDay,
        refreshRate,
        errors
    } = UseEmployeForm();

    if(!visible) return null;

    const ManageInputWarningDisplay = (event) => {
        let currentInput = event.currentTarget;
        let currentInputId = currentInput.id;
        let currentWarningDisplayerId
        switch(currentInputId) {
            case "nameEmp": currentWarningDisplayerId = document.getElementById("errorName").id
            break;
            case "nbDay": currentWarningDisplayerId = document.getElementById("errorDay").id
            break;
            case "dayRate": currentWarningDisplayerId = document.getElementById("errorRate").id
            break;
        }
        if (currentWarningDisplayerId) {
            let warningDisplayer = document.getElementById(currentWarningDisplayerId)
            warningDisplayer.classList.add("active_validation_error_message")
        }
    }

    return (
            <div className="section-modal" >
                <div className="overlay" >
                    <div className="modal-content animate__animated animate__fadeInDown " style={{animationDuration : '0.7s'}}>
                        <form method="post" onSubmit={hideModal}>
                            <h2>Nouveau employe</h2>
                            {/*champ nom*/}
                            <p><label htmlFor="nameEmp">Nom et Prenom(s):</label><input type={"text"}   name="nameEmp" id="nameEmp"
                                                                                        placeholder="nom..." value={name} onChange={refreshName} onFocus={ManageInputWarningDisplay} /></p>

                            <p className={"validation_error_message"} id={"errorName"}>{errors.name}</p>

                            {/*champ nb jour*/}
                            <p><label htmlFor="nbDay">Nombre de jours :</label><input type={"text"} name="nbDay"
                                                                                      id="nbDay" value={day}
                                                                                      placeholder="nb jours..." onChange={refreshDay} onFocus={ManageInputWarningDisplay} /></p>
                            <p className={"validation_error_message"} id={"errorDay"} >{errors.day}</p>

                            {/*champ taux journalier*/}
                            <p><label htmlFor="dayRate">Taux journalier (%) :</label><input type={"text"} name="dayRate"
                                                                                            id="dayRate" value={rate}
                                                                                            placeholder="taux journalier..." onChange={refreshRate} onFocus={ManageInputWarningDisplay} /></p>
                            <p className={"validation_error_message"} id={"errorRate"} >{errors.rate}</p>

                            {/*resultat du ajout*/}
                            <p id={"request-result"}>Resultat: </p>
                            <div className={"btn-div"}>
                                <button className={"btn"} type={"reset"} id={"close-btn"} onClick={hideModal}>Annuler</button>
                                <button  className={"btn"} type={'submit'} id={"confirm-btn"} onClick={postEmployee}>Confimer</button>
                            </div>

                        </form>


                    </div>
                </div>
            </div>
    )
}