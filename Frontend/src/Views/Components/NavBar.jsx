// src/components/Navbar.jsx
import { Link } from 'react-router-dom'
import logo from '../../assets/icon.svg' // Mets ici ton image de logo
import '../../Styles/navbar.css'
import {useEffect} from "react";
export default function Navbar() {

    const ToggleMenuIndicator = (event) => {
        let navigations = document.querySelectorAll('.nav-item')
        navigations.forEach(navigation => { navigation.classList.remove('underline') })
        event.currentTarget.classList.add('underline')
        sessionStorage.setItem('currentPage', document.getElementsByClassName('underline')[0].id)
    }
    useEffect(() => {
        if(sessionStorage.getItem('currentPage')) {
            let navigations = document.querySelectorAll('.nav-item')
            navigations.forEach(navigation => { navigation.classList.remove('underline') })
            document.getElementById(sessionStorage.getItem('currentPage')).classList.add('underline')
        }
    })

    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/HomePage">
                    <img src={logo} alt="Logo" width="35" height="35" className="me-2" />
                    <span className="fw-bold AppTitle">Salaria</span>
                </Link>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav gap-5 align-items-center">
                        <li className="nav-item underline" id="home" onClick={ToggleMenuIndicator} >
                            <Link className="nav-link   d-flex align-items-center " to="/HomePage">
                                <span className="icon-font" >&#xE2C4;</span>
                                <label>&nbsp;Accueil</label>
                            </Link>
                        </li>
                        <li className="nav-item" id="list" onClick={ToggleMenuIndicator} >
                            <Link className="nav-link d-flex align-items-center" to="/EmployeLists">
                                <span className="icon-font" >&#xE2F0;</span>
                                <label>&nbsp;Liste</label>
                            </Link>
                        </li>
                        <li className="nav-item" id="bilan" onClick={ToggleMenuIndicator} >
                            <Link className="nav-link d-flex align-items-center " to="/Balance">
                                <span className="icon-font" >&#xE154;</span>
                                <label>&nbsp;Bilan</label>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
