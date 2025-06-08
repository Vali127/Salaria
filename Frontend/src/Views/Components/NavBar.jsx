// src/components/Navbar.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/icon.svg' // Mets ici ton image de logo
import '../../Styles/navbar.css'
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src={logo} alt="Logo" width="35" height="35" className="me-2" />
                    <span className="fw-bold AppTitle">Salaria</span>
                </Link>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav gap-5 align-items-center">
                        <li className="nav-item underline">
                            <Link className="nav-link" to="/">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/EmployeLists">Liste</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Balance">Bilan</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
