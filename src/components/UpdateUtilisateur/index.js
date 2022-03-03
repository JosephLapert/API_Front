import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';

const UpdateUtilisateur = () => {

    const handleSubmite = async (e) => {
        e.preventDefault();
        const form = {};
        const inputs = formeRef.current.querySelectorAll('input');
        Array.from(inputs).foreach(input => {
            form[input.name] = input.value
        })
        await axios.post('http://localhost:8000/api/users/', form)
    }
    
    const HandleId = async (id) => {
        
        const result = await axios.get(`http://localhost:8000/api/users/${ id }`)
        setUser(result.data.success[0][0]);
        
    }
    
    useEffect(() => {
        HandleId(1)
    }, [])
    
    const [user, setUser] = useState({});
    
    const formeRef = useRef();

    const profileDelete = async (id) => {
        await axios.delete(`http://localhost:8000/api/users/${ id }`)
        
    }
    return (
        <form ref={formeRef} onSubmit={(e) => handleSubmite(e)}>
            <label>
                Nom: 
                <input type="text" name="nom" value={user.nom}/> <br />
                Prenom: 
                <input type="text" name="prenom" value={user.prenom}/> <br />
                Date de naissance:
                <input type="date" name="ddn" value={user.ddn}/> <br />
                Sexe:
                <input type="text" name="sexe" value={user.sexe}/> <br />
                Adresse:
                <input type="text" name="adresse" value={user.adresse}/> <br />
                Code postal:
                <input type="text" name="cp" value={user.cp}/> <br />
                Ville:
                <input type="text" name="ville" value={user.ville}/> <br />
                Pays:
                <input type="text" name="pays" value={user.pays}/> <br />
                Mobile:
                <input type="text" name="mobile" value={user.mobile}/> <br />
                Email:
                <input type="text" name="email" value={user.email}/> <br />
                Password:
                <input type="password" name="psswd" value={user.psswd}/> <br />
            </label>
                <input type="submit" value="Submit" />
                <button onClick={ () =>  profileDelete(user.id_utilisateur) }>Supprimer</button>    
        </form>
    );
};
export default UpdateUtilisateur;