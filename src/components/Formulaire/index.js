import React, { useRef } from 'react';
import axios from 'axios';

const NameForm = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = {};
        const inputs = formRef.current.querySelectorAll('input');
        Array.from(inputs).forEach(input => {
            form[input.name] = input.value
        })
        await axios.post('http://localhost:8000/api/users/', form)
        
    }
    const formRef = useRef();
    return (
        <div id='div_formulaire'>
            <h3 id='titre_formulaire_css'>
                Formulaire d'inscription
            </h3>
            <form id='formulaire_css' ref={formRef} onSubmit={(e) => handleSubmit(e)}>
                <label>
                    Nom: 
                    <input id='formulaire_saisie_css' type="text" name="nom"/> <br />
                    Prenom: 
                    <input id='formulaire_saisie_css' type="text" name="prenom"/> <br />
                    Date de naissance:
                    <input id='formulaire_saisie_css' type="date" name="ddn"/> <br />
                    Sexe:
                    <input id='formulaire_saisie_css' type="text" name="sexe"/> <br />
                    Adresse:
                    <input id='formulaire_saisie_css' type="text" name="adresse"/> <br />
                    Code postal:
                    <input id='formulaire_saisie_css' type="text" name="cp"/> <br />
                    Ville:
                    <input id='formulaire_saisie_css' type="text" name="ville"/> <br />
                    Pays:
                    <input id='formulaire_saisie_css' type="text" name="pays"/> <br />
                    Mobile:
                    <input id='formulaire_saisie_css' type="text" name="mobile"/> <br />
                    Email:
                    <input id='formulaire_saisie_css' type="text" name="email"/> <br />
                    Password:
                    <input id='formulaire_saisie_css' type="password" name="psswd"/> <br />
                </label>
                    <input id='button_form_css' type="submit" value="Submit" />            
            </form>
        </div>
    );
};
export default NameForm;