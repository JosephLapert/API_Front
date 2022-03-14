import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const ListUsers = () => {

    const [todos, setTodos] = React.useState( [] );

    React.useEffect(() => {
        axios.get('http://localhost:8000/api/users/')
            .then((response) => {
            setTodos(response.data.success[0]);
            // console.log(response);
        })
    }, []);

    if (todos.length === 0 ) {
        return null;
    }
  
    // console.log(todos);

    return (
        <div id='div_list_todos'>
            <h3 id='titre_list_todos_css'>Liste des inscrits</h3>
            {
                todos.map(todo => {
                    console.log(todo)
                    return <div id='list_todos_css' key={todo.id_utilisateur}>{ todo.nom } { todo.prenom } { todo.ddn }</div> 
                })
            
            }

        </div>
    )
};

export default ListUsers;