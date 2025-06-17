import React, {useEffect} from "react";
import {useState} from "react";
import Balance from "../Components/Balance.jsx";
import Chart from "../Components/Chart.jsx";
import '../../Styles/statisticsPage.css'

export default function StatisticsPage() {
    //recuperer les infos salaire tot min max et nb employes associes
    const [data1, setData1] = useState({});
    const [data2, setData2] = useState({});
    const [data3, setData3] = useState({});


    const fetchData = async () => {
        let res1 = await fetch(`${import.meta.env.VITE_API_URL}?total=1`);
        let data1 = await res1.json();
        setData1(data1);

        let res2 = await fetch(`${import.meta.env.VITE_API_URL}?min=1`);
        let data2 = await res2.json();
        setData2(data2);

        let res3 = await fetch(`${import.meta.env.VITE_API_URL}?max=1`);
        let data3 = await res3.json();
        setData3(data3);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="my-container d-flex flex-row align-items-center px-5">
            {data1.totalSalary && data2.minSalary && data3.maxSalary ? (
                <div className={"main_data"}>
                    <Balance data1={data1} data2={data2} data3={data3} />
                    <Chart className={"chart"} total={data1.totalSalary} min={data2.minSalary} max={data3.maxSalary} />
                </div>
            ) : (
                <p>...</p>
            )}
        </div>
    );


};