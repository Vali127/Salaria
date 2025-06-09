import {useState} from "react";

export default function UseEmployeForm(){
    const [name, setName] = useState("");
    const [day,setDay]=useState("");
    const [rate, setRate] = useState("");

    const refreshName =(e)=>setName(e.target.value);
    const  refreshDay = (e)=> setDay(e.target.value);
    const refreshRate = (e) => setRate(e.target.value);

    const isInteger =(str)=> /^[0-9]+$/.test(str);

    const errors={
        name:name===""?"Veuillez remplir le nom":"",
        dayType:(day!==""&&!isInteger(day))?"L'entree doit etre un nombre entier":"",
        rateType:(rate!==""&&isNaN(rate))?"L'entree doit etre un nombre":"",
        day:day===""?"Veuillez remplir le nombre de jour":!isInteger(day)?"L'entree doit etre un nombre entier":"",
        rate:rate===""?"Veuillez remplir le taux  journalier":isNaN(rate)?"L'entree doit etre un nombre":""
    }

    return {
        name,setName,
        day,setDay,
        rate,setRate,
        refreshName,
        refreshDay,
        refreshRate,
        errors
    };
}