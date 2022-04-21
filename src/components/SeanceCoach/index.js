import { useEffect, useState } from 'react';
import axios from '../../config/axios'
import Inscription from '../Inscription';

const SeanceCoach = () => {

    const [seances, setSeances] = useState([]);

    useEffect(() => { 
        dataResult()
    },[])

    const dataResult = async () => {
        try {
            const result = await axios.get(`/seance/`)
            console.log(result);
            setSeances(result.data.success[0])
        } catch (error) {
            console.log(error);
        }
    }
    
    return (

        <div>
            <ul>
                { seances.map((seance, index) => (
                    <li id="date_seance_css" key={`SeanceCoach${index}`}>
                        { seance.date_seance.substr(0,10) } { seance.nom } <Inscription id_seance_test={seance.id_seance_test}/> 
                    </li>
                )) }
               
            </ul>
        </div>
        
    )
};
export default SeanceCoach;