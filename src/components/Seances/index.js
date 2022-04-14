import axios from "../../config/axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";


const Seances = () => {
    const { user } = useAuth();
    console.log(user);
    
    const [seances, setSeances] = useState([]);

    useEffect( async () => {
        const result = await axios.get('/seance/')
        setSeances(result.data.success[0])
    }, []);

    if (seances.length === 0 ) { 
        return null;
    }

    return (
        <div>
            <ul>
                { seances.map((seance, index) => (
                    <li key={`Seances${index}`}>
                        { seance.date_seance.substr(0,10) }
                    </li>
                )) }
            </ul>
        </div>
    )
};
 
export default Seances;