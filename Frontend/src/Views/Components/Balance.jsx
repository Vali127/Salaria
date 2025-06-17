import React from "react";

export default function Balance({data1,data2,data3}) {
    return (
        <div className={"d-flex flex-column balance"} >
            <h2 className={"title"}>Bilan des salaires</h2>
             <div className={"balance-div d-flex flex-column "}>

            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Salaire total(Ar)</th>
                        <th>Nombre employe</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{data1.totalSalary.toLocaleString("fr-FR")}</td>
                        <td>{data1.nbEmployeTotal}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Salaire minimale(Ar)</th>
                        <th>Nombre employe</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{data2.minSalary.toLocaleString("fr-FR")}</td>
                        <td>{data2.nbEmployeMin}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Salaire maximale(Ar)</th>
                        <th>Nombre employe</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{data3.maxSalary.toLocaleString("fr-FR")}</td>
                        <td>{data3.nbEmployeMax}</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            </div>
        </div>)
}