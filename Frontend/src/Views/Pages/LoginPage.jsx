import React, {useEffect, useState} from 'react';
import  '/src/Styles/LoginPage.css'
import {fetchUserLogin} from "../Script/fetch.js";
import { Link } from 'react-router-dom'


const LoginPage = ({onLogin}) => {
    const [Hidden, setHidden] = useState(true)
    const [Access, setAccess] = useState(false)
    const [Username , setUsername ] = useState('')
    const [UserPassword, setUserPassword ] = useState('')

    const HideAndShowPassword = () =>  setHidden( !Hidden )

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
    const ResetFields = () => {
        setUsername('')
        setUserPassword('')
    }

    const GoToHomePage = () => {
        sessionStorage.setItem("isLoggedIn", "true")
        onLogin(true)
        window.open("/HomePage", "_blank")
    }

    useEffect(() => {
        document.getElementById("hide_and_show").innerHTML = (Hidden) ? "&#xE220;" : "&#xE224;" //ça marche pas avec un textContent
    }, [Hidden])
    useEffect(() => {
        sessionStorage.removeItem('isLoggedIn')
    }, [])

    return (
        <div className={"container-fluid m-5 d-flex align-items-center justify-content-center"} >
                <div className={"login_form"} >
                    <form className={"form"} method="post" onSubmit={HandleSubmit} >

                        <h2>Connexion</h2>

                        <p className={"login_paragraph"}>
                            <label className={"login_label"} >Nom d 'utilisateur</label>
                            <input
                                className={"login_input"}
                                onChange={(event) => setUsername(event.target.value)}
                                value={Username}
                            />
                        </p>

                        <p className={"login_paragraph"} >
                            <label className={"login_label"}>Mot de passe</label>
                            <span className={"input_div"} >
                                <input
                                    className={"login_input"}
                                    id={"passwd"} type={ Hidden ? "password" : "text" }
                                    onChange={(event) => setUserPassword(event.target.value)}
                                    value={UserPassword}
                                />
                                <label onClick={HideAndShowPassword} className={"icon-font log_icon"} id={"hide_and_show"} ></label>
                            </span>
                        </p>

                        <p className={"login_paragraph"} ><label id={"login_request_response"}></label></p>

                        { Access ?
                            (
                                <button className={"btn btn-success"} onClick={GoToHomePage}  style={{width : '75%'}} >page d' acceuil</button>
                            ) :
                            (
                                <div className={"d-flex justify-content-center  align-items-center gap-2 w-100"} >
                                    <button className={"btn btn-primary "} type={"submit"} >Confirmer</button>
                                    <button className={"btn btn-warning "} type={"button"} onClick={ResetFields} >Annuler</button>
                                </div>
                            )
                        }

                    </form>
                </div>
        </div>
    );
};

export default LoginPage;
