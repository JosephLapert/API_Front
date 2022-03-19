import React, { useRef, useState } from 'react';
import axios from '../../config/axios';

const NameForm = () => {
    
    const [message, setMessage] = useState('')          // Pour afficher le message de réussite d'inscription

    const handleSubmit = async (e) => {                 // fonction qui permet de prendre les données que le user rentre et les assignée aux inputs
        e.preventDefault();
        const form = {};
        const inputs = formRef.current.querySelectorAll('input');
        Array.from(inputs).forEach(input => {
            form[input.name] = input.value
        })
        try {
            await axios.post('/users/', form)      // requete post qui permet d'ajouter l'user dans la DB
            
            setMessage('Félicitation, Vous êtes inscrit !!')                // utilisation du useState pour le comportement des champs (réussite ou non)
            setTimeout(() => {                                              // set un timeout pour UX/UI 
                setMessage('')
            }, 2000 )
        } catch (error) {

            setMessage('Veuillez remplir tous les champs');                 
            console.log(error.message);
        }
    }
    const formRef = useRef();                                               // déclaration d'un ref pour les inputs utilisateur.
    return (
        <div>
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
                    {/* disabled={true}  créer une fonction pour activer le bouton seulement 
                    quand tous les champs sont valide  */}     
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};
export default NameForm;