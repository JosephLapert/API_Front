import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';


const SeanceCoach = () => {

    const [seances, setSeances] = useState([]);

    React.useEffect(() => {
        axios.get('http://localhost:8000/api/seances/2')
            .then((response) => {
            setSeances(response.data.success[0])
        })
    }, []);



    if (seances.length === 0) {
        return null;
    }


    return (


        <ul>
            { seances.map((seance, index) => (
                <li key={`SeanceCoach${index}`}>
                    { seance.date_seance.substr(0,10) } { seance.nom }
                </li>
            )) }
        </ul>
        
    )
};

export default SeanceCoach;