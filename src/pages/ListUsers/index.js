import axios from 'axios';
import { useState, useEffect } from 'react';

const ListUsers = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async() => {
        try {
            const result = await axios.get('http://localhost:7000/api/users/')
            setUsers(result.data.success[0])
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {

        getUsers()
    }, []);

    if (users.length === 0 ) {
        return null;
    }
  
    // console.log(users);

    return (
        <div id='div_list_users'>
            <h3 id='titre_list_users_css'>Liste des inscrits</h3>
            { 
                users.map(user => {
                    {/* console.log(user) */}
                    return <div id='list_users_css' key={user.id_utilisateur}>{ user.nom } { user.prenom } { user.ddn }
                    </div> 
                })
            
            }

        </div>
    )
};

export default ListUsers;