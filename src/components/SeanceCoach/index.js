import { useEffect, useState } from 'react';
import axios from '../../config/axios'
import Inscription from '../Inscription';


const SeanceCoach = () => {

    const [seances, setSeances] = useState([]);

    useEffect(() => { 
        dataResult()
    },[])

    const dataResult = async () => {
        const result = await axios.get('/seances/1')
        setSeances(result.data.success[0])
    }
    

    if (seances.length === 0) { 
        return null;
    }
    return (
        <div>
            <ul>
                { seances.map((seance, index) => (
                    <li id="date_seance_css" key={`SeanceCoach${index}`}>
                        { seance.date_seance.substr(0,10) } { seance.nom } <Inscription /> 
                    </li>
                )) }
               
            </ul>
        </div>
    )
};
export default SeanceCoach;