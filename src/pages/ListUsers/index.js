import axios from 'axios';
import { useState, useEffect } from 'react';

const ListUsers = ({ one, tableau }) => {

    const [users, setUsers] = useState([]);

    const getUsers = async() => {
        try {
            const result = await axios.get('http://localhost:8000/api/users/')
            setUsers(result.data.success[0])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log(one);
        console.log(tableau[2]);
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
                    return <div id='list_users_css' key={user.id_utilisateur}>{ user.nom } { user.prenom } { user.ddn }</div> 
                })
            
            }

        </div>
    )
};

export default ListUsers;