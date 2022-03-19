import { useEffect, useState } from 'react';
import axios from '../../config/axios'


const SeanceCoach = () => {

    const [seances, setSeances] = useState([]);

    useEffect( async () => {
        const result = await axios.get('/seances/1')
        setSeances(result.data.success[0])
    },[])

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
        </div>
        
    )
};

export default SeanceCoach;

{/* <button>S'inscrire</button>  A coder quand on aura le cours
            sur les sessions */}