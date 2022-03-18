import { useEffect, useState } from 'react';
import axios from '../../config/axios'


const SeanceCoach = (id) => {

    const [seances, setSeances] = useState([]);

    useEffect(() => {
        axios.get(`/seances/${ id }`)
            .then((response) => {
            setSeances(response.data.success[0])
        })
    }, [id]);

    if (seances.length === 0) { 
        return null;
    }
    return (

        <div>
            <ul>
                { seances.map((seance, index) => (
                    <li key={`SeanceCoach${index}`}>
                        { seance.date_seance.substr(0,10) } { seance.nom }
                    </li>
                )) }
            </ul>
            {/* <button>S'inscrire</button>  A coder quand on aura le cours
            sur les sessions */}
        </div>
        
    )
};

export default SeanceCoach;