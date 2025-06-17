import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts';

export default function Chart({ total, min, max }) {
    // On prépare les données
    const data = [
        { name: 'Salaire Total', value: total },
        { name: 'Salaire Maximale', value: max },
        { name: 'Salaire Minimale', value: min },
    ];
    const COLORS = ['#ff6384','#ffcd56','#36a2eb']

    return (
        <>
            <ResponsiveContainer width="60%" height={300}>
                <h2 className={"title"}>Histogramme du bilan</h2>
                <BarChart
                    data={data}
                    layout="vertical" // Pour les barres horizontales
                    margin={{ top: 20, right: 30, left: 100, bottom: 5 }}>

                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Bar fill="#ea756b" dataKey="value"  barSize={30}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Bar>

                </BarChart>
            </ResponsiveContainer>
        </>

    );
}
