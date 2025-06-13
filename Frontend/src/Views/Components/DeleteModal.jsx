import React from "react";
import {deleteEmploye} from "../Script/fetch.js";

export default function DeleteModal({visible,onClose,employe}) {

    if(!visible) return null;

    return (
        <div className="section-modal">
            <div className="overlay">
                <div className="modal-content animate__animated animate__fadeInDown " style={{animationDuration : '0.7s'}}>
                    <form method="post">
                        <h2>Confirmer la suppression: {employe.numEmploye} </h2>

                        <div className="btn-div">
                            <button className="btn" type="reset" id="close-btn" onClick={onClose}>Annuler</button>
                            <button className="btn" type="submit" id="confirm-btn" onClick={(e)=>{
                                e.preventDefault();
                                deleteEmploye(employe.numEmploye);}} onDoubleClick={onClose}>Confirmer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}