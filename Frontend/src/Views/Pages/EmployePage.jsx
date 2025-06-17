import React, { useEffect, useState } from "react";
import CardEmploye from "../Components/CardEmploye.jsx";
import ModifyModal from "../Components/ModifyModal.jsx";
import DeleteModal from "../Components/DeleteModal.jsx";
import '../../Styles/employePage.css';
import '../../Styles/homePage.css';

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

    //recuperer  l employe clique
    const [selectedEmploye, setSelectedEmploye] = useState(null);

    //confirmer la suppression
    const [deleteModal, setDeleteModal] = useState(false);

    const showDeleteModal = () => {
        setDeleteModal(true);
    }
    const hideDeleteModal = () => {
        setDeleteModal(false);
        fetchEmployes();
    }

    return (
        <div className="my-container animate__animated animate__fadeIn ">
            <ModifyModal  visible={modal} onClose={hideModal} employe={selectedEmploye}/>
            <DeleteModal visible={deleteModal} onClose={hideDeleteModal} employe={selectedEmploye}/>
            <h4>Listes des employes</h4>
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
                        onDeleteEmploye={()=> {
                            setSelectedEmploye(employe);
                            showDeleteModal();
                        }}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
}
