import axios from 'axios';
import React from 'react';
import { useState } from 'react';


const SeanceCoach = () => {

    const [seances, setSeances] = useState([]);

    React.useEffect(() => {
        axios.get('http://localhost:8000/api/seances/1')
            .then((response) => {
            // console.log(response.data.success[0][0]);
            setSeances(response.data.success[0])
            // console.log(response.data.success);
        })
    }, []);

    if (seances.length === 0) {
        return null;
    }

        console.log(seances[0]);

    return (
        <ul>
            { seances.map((seance, index) => (
                <li key={`SeanceCoach${index}`}>
                    { seance.date_seance } { seance.id_coach }
                </li>
            )) }
        </ul>
    )
};

export default SeanceCoach;