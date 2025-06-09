import React from "react";
import {useState} from "react";
import '../../Styles/homePage.css';
import {postEmployee} from "../Script/fetch.js";
import useEmployeForm from "../Components/UseEmployeForm.jsx";

export default function HomePage() {
    const  [modal,setModal] = useState(false);
    const showModal = () => {setModal(true);};
    const hideModal = () => {setModal(false);};

    const {
        name,
        day,
        rate,
        refreshName,
        refreshDay,
        refreshRate,
        errors,

    } = useEmployeForm();

    return (
        <div className="section-container">

            {modal &&
               (
                    <div className="section-modal">
                        <div className="overlay">
                            <div className="modal-content">
                                <form method="post" onSubmit={hideModal}>
                                    <h2>Nouveau employe</h2>
                                    {/*champ nom*/}
                                    <p><label htmlFor="nameEmp">Nom :</label><input type={"text"}   name="nameEmp" id="nameEmp"
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
                    </div>)}
            <div className="section-text">
                <span>
                    <span style={{fontSize: "35px", letterSpacing: "2px"}} className="fw-bolder">
                        Visualiser les statistiques des salaires
                    </span>
                </span>
                <p style={{ fontSize: "13px" }}>
                    Ce site vous offre la possibilité d'enregistrer vos salariés et
                    avoir une idée des salaires minimaux ainsi que maximaux
                    à travers des données statistiques.
                </p>
                <button onClick={showModal} className="btn-add">Nouveau employé</button>
            </div>
            <div className="section-image">
                <img  alt="Employé" />
            </div>
        </div>
    );
}
