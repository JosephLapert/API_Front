import React, { useRef } from 'react';
import axios from 'axios';

const NameForm = () => {

    const handleSubmit = async (e) => {
        // e.preventDefault();
        const form = {};
        const inputs = formRef.current.querySelectorAll('input');
        Array.from(inputs).forEach(input => {
            form[input.name] = input.value
        })
        await axios.post('http://localhost:8000/api/users/', form)
        
    }
    const formRef = useRef();
    return (
        <form ref={formRef} onSubmit={(e) => handleSubmit(e)}>
            <label>
                Nom: 
                <input type="text" name="nom"/> <br />
                Prenom: 
                <input type="text" name="prenom"/> <br />
                Date de naissance:
                <input type="date" name="ddn"/> <br />
                Sexe:
                <input type="text" name="sexe"/> <br />
                Adresse:
                <input type="text" name="adresse"/> <br />
                Code postal:
                <input type="text" name="cp"/> <br />
                Ville:
                <input type="text" name="ville"/> <br />
                Pays:
                <input type="text" name="pays"/> <br />
                Mobile:
                <input type="text" name="mobile"/> <br />
                Email:
                <input type="text" name="email"/> <br />
                Password:
                <input type="password" name="psswd"/> <br />
            </label>
                <input type="submit" value="Submit" />            
        </form>
    );
};
export default NameForm;