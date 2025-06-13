import React, {useEffect, useState} from 'react';
import  '/src/Styles/LoginPage.css'
import {fetchUserLogin} from "../Script/fetch.js";
import { Link } from 'react-router-dom'


const LoginPage = ({onLogin}) => {
    const [Hidden, setHidden] = useState(true)
    const [Access, setAccess] = useState(false)
    const [Username , setUsername ] = useState('')
    const [UserPassword, setUserPassword ] = useState('')

    const HandleUsername = (event) => setUsername(event.target.value)
    const HandleUserPassword = (event) => setUserPassword(event.target.value)

    const HideAndShow = () =>  setHidden( !Hidden )

    const HandleSubmit = async (event)=> {
        event.preventDefault()
        let userLoginData = {
            username : Username,
            password : UserPassword
        }
        let response = await fetchUserLogin(userLoginData)
        let element = document.getElementById('login_request_response')
        element.innerHTML = response.message
        element.style.color = ( response.access ) ? 'green' : 'red'
        setAccess(response.access)
    }
    const GoToHomePage = () => onLogin(Access)

    useEffect(() => {
        document.getElementById("hide_and_show").innerHTML = (Hidden) ? "&#xE220;" : "&#xE224;" //ça marche pas avec un textContent
    }, [Hidden])

    return (
        <div className={"container-fluid m-5 d-flex align-items-center justify-content-center"} >
                <div className={"login_form"} >
                    <form method="post">
                        <h2>Connexion</h2>
                        <p>
                            <label>Nom d 'utilisateur</label>
                            <input onChange={HandleUsername} value={Username} required />
                        </p>
                        <p>
                            <label>Mot de passe</label>
                            <span className={"input_div"} >
                                <input id={"passwd"} type={ Hidden ? "password" : "text" } onChange={HandleUserPassword} value={UserPassword} required />
                                <label onClick={HideAndShow} className={"icon-font log_icon"} id={"hide_and_show"} ></label>
                            </span>
                        </p>
                        <p><label id={"login_request_response"}></label></p>
                        { Access && <Link className={"btn btn-success"} to="/HomePage" onClick={GoToHomePage}  style={{width : '75%'}} >page d' acceuil</Link>}

                        { !Access && <div className={"d-flex justify-content-center  align-items-center gap-2 w-100"} >
                                    <button className={"btn btn-primary "} onClick={HandleSubmit} >Confirmer</button>
                                    <button className={"btn btn-warning "} type={"reset"} >Quitter</button>
                        </div> }
                    </form>
                </div>
        </div>
    );
};

export default LoginPage;
