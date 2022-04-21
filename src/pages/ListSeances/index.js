import axios from 'axios';
import { useState, useEffect } from 'react';

const ListSeance = () => {

    // const [dateSeance, setDateSeance] = useState([]);

    // const getDateSeance = async() => {
    //     try {
    //         const result = await axios.get('http://localhost:7000/api/seance/') setDateSeance (result.data.success[0])
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    useEffect(() => {

        getDateSeance()
    }, []);

    if (date.length ===0 ) {
        return null;
    }

    return (
        <div id= 'div_list_date'>
            <h3 id='titre_list_date_css'> Liste des dates</h3>
            {
                datesSeance.map(date => {

                    return <div 
                    id='list_date_css' key={date.id_seance_test}>{date.date_seance}</div>
                })
            }
        </div>
    )
};