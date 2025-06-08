import React from "react";
import {useState} from "react";
import '../../Styles/homePage.css';
import {fetchEmployees, postEmployee} from "../Script/fetch.js";

export default function HomePage() {
    const  [modal,setModal] = useState(false);
    const showModal = () => {setModal(true);};
    const hideModal = () => {setModal(false);};

    const [name, setName] = useState("");
    const refreshName =(e)=>{
         const inputName = e.target.value;
         setName(inputName);
    }

    const [rate, setRate] = useState("");
    const refreshRate = (e) =>{
        const inputRate = e.target.value;
        setRate(inputRate);
    }

    const [day,setDay]=useState("");
    const  refreshDay = (e)=>{
        const inputDay = e.target.value;
        setDay(inputDay);
    }
    const isInteger =(str)=> /^[0-9]+$/.test(str);

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

                                    <p className={"validation_error_message"} id={"errorName"}>{name === "" && "Veuillez remplir le nom"}</p>

                                    {/*champ nb jour*/}
                                    <p><label htmlFor="nbDay">Nombre de jours :</label><input type={"text"} name="nbDay"
                                                                                     id="nbDay" value={day}
                                                                                     placeholder="nb jours..." onChange={refreshDay}/></p>
                                     <p className={"validation_error_message"} >{day!==""&&!isInteger(day)&&"L'entree doit etre un nombre entier"}{day===""&& "Veuillez remplir le nombre de jour"}</p>

                                    {/*champ taux journalier*/}
                                    <p><label htmlFor="dayRate">Taux journalier (%) :</label><input type={"text"} name="dayRate"
                                                                                              id="dayRate" value={rate}
                                                                                              placeholder="taux journalier..." onChange={refreshRate}/></p>
                                    <p className={"validation_error_message"} >{rate!==""&&isNaN(rate)&&"L'entree doit etre un nombre"}{rate===""&& "Veuillez remplir le taux  journalier"}</p>


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
