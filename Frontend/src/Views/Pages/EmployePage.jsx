import React, { useEffect, useState } from "react";
import CardEmploye from "../Components/CardEmploye.jsx";
import '../../Styles/employePage.css';
import '../../Styles/homePage.css';
import ModifyModal from "../Components/ModifyModal.jsx";


export default function EmployePage() {

    //recuperer et afficher les employes

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

    //etat pour afficher  et cacher le popup modifier

    const [modal, setModal] = useState(false);
    const showModal = () => {
        setModal(true);
    }
    const hideModal = ()=>{
        setModal(false);
        fetchEmployes();
    }

    //recuperer  l employe a modifier
    const [selectedEmploye, setSelectedEmploye] = useState(null);

    //confirmer la suppression
    const confirmDeleteEmploye = (numEmp) => {
        confirm("Voulez vous supprimer l'employe?");
    }

    return (
        <div className="my-container">
            <ModifyModal  visible={modal} onClose={hideModal} employe={selectedEmploye} load={fetchEmployes}/>
            <div className="row"></div>
            <table className="my-table">
                <thead>
                <tr>
                    <th>Numero</th>
                    <th>Nom et Prénoms</th>
                    <th>Nombre de jours</th>
                    <th>Taux journalier</th>
                    <th>Salaire</th>

                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {employes.map((employe) => (
                    <CardEmploye
                        key={employe.numEmploye}
                        employe={employe}
                        onEditEmploye={()=> {
                            setSelectedEmploye(employe);
                            showModal();
                        }}
                        onDeleteEmploye={()=>confirmDeleteEmploye(employe.numEmploye)}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
}
