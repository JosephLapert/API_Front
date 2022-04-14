<<<<<<< HEAD
import axios from 'axios';
import { useEffect, useState } from 'react';
=======
import { useEffect, useState } from 'react';
import axios from '../../config/axios'
import Inscription from '../Inscription';
>>>>>>> joseph


const SeanceCoach = () => {

    const [seances, setSeances] = useState([]);

    useEffect( async () => { 
        const result = await axios.get('/seances/1')
        setSeances(result.data.success[0])
    },[])

<<<<<<< HEAD
    if (seances.length === 0) {
        return null;
    }

    // const []

=======
    

    if (seances.length === 0) { 
        return null;
    }
>>>>>>> joseph
    return (
        <div>
            <ul>
                { 
                    seances.map((seance, index) => (
                    <li key={`SeanceCoach${index}`}>
                        { seance.date_seance.substr(0,10) } { seance.nom }  
                    </li>
<<<<<<< HEAD
                )) 
                }
            </ul>
            {/* <button>S'inscrire</button>  A coder quand on aura le cours
            sur les sessions */}
=======
                )) }
               
            </ul><Inscription />
>>>>>>> joseph
        </div>
    )
};
export default SeanceCoach;