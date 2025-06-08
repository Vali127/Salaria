import React, { useEffect, useState } from "react";
import '../../Styles/employePage.css';
import '../../Styles/homePage.css';
import CardEmploye from "../Components/CardEmploye.jsx";
import {postEmployee} from "../Script/fetch.js";

export default function EmployePage() {
    //code redondant avec usestate partout or hook oblige d etre dans le composant donc composant tres charge



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

    const [employes, setEmployes] = useState([]);

    const fetchEmployes = async () => {
        let res = await fetch(import.meta.env.VITE_API_URL);
        let data = await res.json();
        setEmployes(data);
        console.log(data);
    };

    useEffect(() => {
        fetchEmployes();
    }, []);

    const handleOnEdit = (employe) => {
        setModal(true);
    };

    const handleOnDelete = (id) => {

    };

    return (
        <div className="my-container">
            {modal&&(<div className="section-modal">
                <div className="overlay">
                    <div className="modal-content">
                        <form method="post" onSubmit={hideModal}>
                            <h2>Modifier employe</h2>
                            {/*champ nom*/}
                            <p><label htmlFor="nameEmp">Nom :</label><input type={"text"} name="nameEmp" id="nameEmp"
                                                                            placeholder="nom..." value={name}
                                                                            onChange={refreshName}/></p>

                            <p className={"validation_error_message"}
                               id={"errorName"}>{name === "" && "Veuillez remplir le nom"}</p>

                            {/*champ nb jour*/}
                            <p><label htmlFor="nbDay">Nombre de jours :</label><input type={"text"} name="nbDay"
                                                                                      id="nbDay" value={day}
                                                                                      placeholder="nb jours..."
                                                                                      onChange={refreshDay}/></p>
                            <p className={"validation_error_message"}>{day !== "" && !isInteger(day) && "L'entree doit etre un nombre entier"}{day === "" && "Veuillez remplir le nombre de jour"}</p>

                            {/*champ taux journalier*/}
                            <p><label htmlFor="dayRate">Taux journalier (%) :</label><input type={"text"} name="dayRate"
                                                                                            id="dayRate" value={rate}
                                                                                            placeholder="taux journalier..."
                                                                                            onChange={refreshRate}/></p>
                            <p className={"validation_error_message"}>{rate !== "" && isNaN(rate) && "L'entree doit etre un nombre"}{rate === "" && "Veuillez remplir le taux  journalier"}</p>


                            {/*resultat du ajout*/}
                            <p id={"request-result"}>Resultat: </p>
                            <div className={"btn-div"}>
                                <button className={"btn"} type={"reset"} id={"close-btn"} onClick={hideModal}>Annuler
                                </button>
                                <button className={"btn"} type={'submit'} id={"confirm-btn"}
                                        onClick={postEmployee}>Confimer
                                </button>
                            </div>

                        </form>
                    </div>
                </div>

            </div>)}
            <div className="row"></div>
            <table className="my-table">
                <thead>
                <tr>
                    <th>Numero</th>
                    <th>Nom et Prénoms</th>
                    <th>Nombre de jours</th>
                    <th>Taux journalier</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {employes.map((employe) => (
                    <CardEmploye
                        key={employe.numEmploye}
                        employe={employe}
                        onEditEmploye={handleOnEdit}
                        onDeleteEmploye={handleOnDelete}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
}
