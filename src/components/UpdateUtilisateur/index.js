import React, { useRef, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";

import '../../App.css'

const UpdateUtilisateur = () => {
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = {};
    const inputs = formeRef.current.querySelectorAll("input");
    Array.from(inputs).foreach((input) => {
      form[input.name] = input.value;
    });
    await axios.post("/users/", form);
  };

  useEffect(() => {}, []);
  const formeRef = useRef();
  const profileDelete = async (id) => {
    await axios.delete(`/users/${id}`);
  };
  if (!user) {
    return (
      <div>
        <p>Pas d'utilisateur connu.</p>
      </div>
    );
  }
  return (
    <div id="div_formulaire">
    <h3 id="titre_formulaire_css">Modification de profil</h3>
    <form id="formulaire_css"ref={formeRef} onSubmit={(e) => handleSubmit(e)}>
      <label>
        Nom:
        <input id="modification_saisie_css" type="text" name="nom" value={user.nom} /> <br />
        Prenom:
        <input id="modification_saisie_css" type="text" name="prenom" value={user.prenom} /> <br />
        Date de naissance:
        <input id="modification_saisie_css" type="date" name="ddn" value={user.ddn} /> <br />
        Sexe:
        <input id="modification_saisie_css" type="text" name="sexe" value={user.sexe} /> <br />
        Adresse:
        <input id="modification_saisie_css" type="text" name="adresse" value={user.adresse} /> <br />
        Code postal:
        <input id="modification_saisie_css" type="text" name="cp" value={user.cp} /> <br />
        Ville:
        <input id="modification_saisie_css" type="text" name="ville" value={user.ville} /> <br />
        Pays:
        <input id="modification_saisie_css" type="text" name="pays" value={user.pays} /> <br />
        Mobile:
        <input id="modification_saisie_css" type="text" name="mobile" value={user.mobile} /> <br />
        Email:
        <input id="modification_saisie_css" type="text" name="email" value={user.email} /> <br />
        Password:
        <input id="modification_saisie_css" type="password" name="psswd" value={user.psswd} /> <br />
      </label>
      <div id="div_modification">
        <input type="submit" value="Submit" />
        <button onClick={() => profileDelete(user.id_utilisateur)}>Supprimer</button>
      </div>
    </form>
    </div>
  );
};
export default UpdateUtilisateur;
