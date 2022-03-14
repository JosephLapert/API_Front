import axios from 'axios';
import { useEffect, useState } from 'react';


const SeanceCoach = () => {

    const [seances, setSeances] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/seance/')
            .then((response) => {
            setSeances(response.data.success[0])
        })
    }, []);

    if (seances.length === 0) {
        return null;
    }

    console.log (seances)

    return (
        <div>
            <h3 id="titre_date_seance_css">Liste des séances</h3>
            <ul>
                { 
                    seances.map((seance, index) => (
                    <li id="date_seance_css" key={`selectAllDateTest${index}`}>
                        { seance.date_seance.substr(0,10) }
                    </li>
                )) 
                }
            </ul>
            {/* <button>S'inscrire</button>  A coder quand on aura le cours
            sur les sessions */}
        </div>
    )
};
export default SeanceCoach;