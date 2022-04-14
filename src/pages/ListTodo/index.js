import axios from 'axios';
import { useState,useEffect } from 'react';

const ListUsers = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/test')
            .then((response) => {
            setTodos(response.data.success);
        })
    }, []);

    if (todos.length === 0 ) {
        return null;
    }
    
    return todos.map((todo, index) => 
        <div key={`ListUsers${index}`}>
            { todo.nom } { todo.prenom } { todo.ddn.substr(0,10) }
        </div>
    )
};

export default ListUsers;