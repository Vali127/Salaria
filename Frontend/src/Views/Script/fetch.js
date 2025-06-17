//recuperer employe
export async function fetchEmployees() {
    const res = await fetch(import.meta.env.VITE_API_URL);
    console.log(res);
    // Vérification du statut HTTP
    if (!res.ok) {
        throw new Error(`Erreur HTTP ${res.status}`);
    }

    // Lecture et affichage des données JSON
    const data = await res.json();
    console.log("donnes recu deirrect:",data);
    return data;
}
//envoyer les info nouveau employe
export async  function postEmployee(e){
    e.preventDefault();
    let nameEmp = document.getElementById("nameEmp").value;
    let nbDay = document.getElementById("nbDay").value;
    let dayRate = document.getElementById("dayRate").value;
    console.log(nameEmp,typeof(nbDay),typeof(dayRate));

    const employe = {
        nameEmp: nameEmp,
        nbDay:nbDay,
        dayRate:dayRate,
    }

    // document.getElementById("nameEmp").value = "";
    // document.getElementById("nbDay").value = '';

    let res = await fetch(import.meta.env.VITE_API_URL, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(employe)
    });

    const data = await res.json();
    console.log("reponse du serveur",data.message);
    document.getElementById("request-result").textContent = data.message;//message de retour apres insertion
}

export async function updateEmploye(e,numEmp,nameEmp,nbDay,rate){
    e.preventDefault();
    const employe = {
        numEmp: numEmp,
        nameEmp: nameEmp,
        nbDay:nbDay,
        dayRate:rate
    }
    let res = await fetch(import.meta.env.VITE_API_URL, {
        method: 'PUT',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(employe)
    });
    let data = await res.json();
    document.getElementById("request-result").textContent = data.message;

}

export async function deleteEmploye(numEmp){
    const numEmploye = {
        numEmp: numEmp
    }
    let res = await fetch(import.meta.env.VITE_API_URL, {
        method: 'DELETE',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(numEmploye)
    })
    let data = await res.json();
    console.log("reponse du serveur",data.message);

}

export async function fetchUserLogin(object) {
    try {
        const res = await fetch(import.meta.env.VITE_API_URL, {
            method : 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                action : 'login_confirmation',
                object: object,
            })
        })
        if( !res.ok )
            throw new Error(`Erreur HTTP ${res.status}`)
        let data = await res.json()
        return data
    }
    catch (error) {
        console.log("ERROR MESSAGE : ",error);
    }
}