import axios from "../../config/axios";
import { useEffect, useState } from "react";




const Seances = () => {

    const [seances, setSeances] = useState([]);

    useEffect( async () => {
        const result = await axios.get('/seance/')
        setSeances(result.data.success[0])
        console.log(result.data.success[0]);
    }, []);

    if (seances.length === 0) { 
        return null;
    }

    return ( seances.map((seance, index) =>
        <div key={`Seances${index}`}>
            { seance.date_seance.substr(0, 10) }
        </div>
    ))
};
 
export default Seances;