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

    return (
            <div className="section-modal">
                <div className="overlay">
                    <div className="modal-content">
                        <form method="post" onSubmit={hideModal}>
                            <h2>Nouveau employe</h2>
                            {/*champ nom*/}
                            <p><label htmlFor="nameEmp">Nom et Prenom(s):</label><input type={"text"}   name="nameEmp" id="nameEmp"
                                                                                        placeholder="nom..." value={name} onChange={refreshName}/></p>

                            <p className={"validation_error_message"} id={"errorName"}>{errors.name}</p>

                            {/*champ nb jour*/}
                            <p><label htmlFor="nbDay">Nombre de jours :</label><input type={"text"} name="nbDay"
                                                                                      id="nbDay" value={day}
                                                                                      placeholder="nb jours..." onChange={refreshDay}/></p>
                            <p className={"validation_error_message"} >{errors.day}</p>

                            {/*champ taux journalier*/}
                            <p><label htmlFor="dayRate">Taux journalier (%) :</label><input type={"text"} name="dayRate"
                                                                                            id="dayRate" value={rate}
                                                                                            placeholder="taux journalier..." onChange={refreshRate}/></p>
                            <p className={"validation_error_message"} >{errors.rate}</p>

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