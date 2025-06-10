import {useState} from "react";

export default function UseEmployeForm(){
    const [name, setName] = useState("");
    const [day,setDay]=useState("");
    const [rate, setRate] = useState("");
    function toCapitalize(str) {
        if (!str) return "";

        const map = {
            a: 'A', b: 'B', c: 'C', d: 'D', e: 'E',
            f: 'F', g: 'G', h: 'H', i: 'I', j: 'J',
            k: 'K', l: 'L', m: 'M', n: 'N', o: 'O',
            p: 'P', q: 'Q', r: 'R', s: 'S', t: 'T',
            u: 'U', v: 'V', w: 'W', x: 'X', y: 'Y',
            z: 'Z'
        };

        const firstChar = map[str[0]] ?? str[0]; // majuscule manuelle ou même caractère
        return firstChar + str.slice(1);
    }


    const refreshName =(e)=> {
        let name = e.target.value;
        setName(toCapitalize(name));
    }
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