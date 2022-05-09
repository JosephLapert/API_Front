import React, { useRef, useState } from "react";
import axios from "../../config/axios";

import './formulaire.css'

const NameForm = () => {
  const [message, setMessage] = useState("");         // Pour afficher le message de réussite d'inscription

  const handleSubmit = async (e) => {                 // fonction qui permet de prendre les données que le user rentre et les assignée aux inputs
    
    e.preventDefault();
    const form = {};
    const inputs = formRef.current.querySelectorAll("input");
    Array.from(inputs).forEach((input) => {
      form[input.name] = input.value;
    });
    try {
      await axios.post("/users/", form);                  // requete post qui permet d'ajouter l'user dans la DB
      formRef.current.reset();
      setMessage("Félicitation, Vous êtes inscrit !!");   // utilisation du useState pour le comportement des champs (réussite ou non)
      setTimeout(() => {
        // set un timeout pour UX/UI
        setMessage("");
      }, 2000);
    } catch (error) {
      setMessage("Veuillez remplir tous les champs");
      console.log(error.message);
    }
  };
  const formRef = useRef(); // déclaration d'un ref pour les inputs utilisateur.

  return (
    <div id="div_formulaire">
      <h3 id="h3_formulaire">Formulaire d'inscription</h3>
      <form id="form_formulaire" ref={formRef} onSubmit={(e) => handleSubmit(e)}>
        <label id="label_formulaire">
          Nom:
          <input id="input_formulaire" type="text" name="nom" /> <br />
          Prenom:
          <input id="input_formulaire" type="text" name="prenom" /> <br />
          Date de naissance:
          <input id="input_formulaire" type="date" name="ddn" /> <br />
          Sexe:
          <input id="input_formulaire" type="text" name="sexe" /> <br />
          Adresse:
          <input id="input_formulaire" type="text" name="adresse" /> <br />
          Code postal:
          <input id="input_formulaire" type="text" name="cp" /> <br />
          Ville:
          <input id="input_formulaire" type="text" name="ville" /> <br />
          Pays:
          <input id="input_formulaire" type="text" name="pays" /> <br />
          Mobile:
          <input id="input_formulaire" type="text" name="mobile" /> <br />
          Email:
          <input id="input_formulaire" type="text" name="email" /> <br />
          Password:
          <input id="input_formulaire" type="password" name="psswd" /> <br />
        </label>
        <input type="submit" value="Submit" />
        {/* disabled={true}  créer une fonction pour activer le bouton seulement 
                    quand tous les champs sont valide v2 */}
      {message && <p id="p_formulaire">{message}</p>}
      </form>
    </div>
  );
};
export default NameForm;
