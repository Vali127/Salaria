import React from "react";
import {useState} from "react";
import '../../Styles/homePage.css';
import AddModal from "../Components/AddModal.jsx";

export default function HomePage() {
    /**
     * pour gerer tous les popups j ai utilise useState
     * si hidemodal est appele le popup est cache
     * mais puisque le bouton pour fermer est le composant AddModal j ai passe cette fonction en props
     *
     */

    const  [modal,setModal] = useState(false);
    const showModal = () => {setModal(true);};
    const hideModal = () => {setModal(false);};


    return (
        <div className="section-container">
            <AddModal visible={modal} hideModal={hideModal}/>
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
                <img  alt="put a pic here if u find one" />
            </div>
        </div>
    );
}
