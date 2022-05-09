import React, { useRef, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";

import './updateutilisateur.css'

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
    <div id="div_updateutilisateur">
      <h3 id="h3_updateutilisateur">Modification de profil</h3>
      <form id="formulaire_updateutilisateur"ref={formeRef} onSubmit={(e) => handleSubmit(e)}>
        <label id="label_updateutilisateur">
          Nom:
          <input id="input_updateutilisateur" type="text" name="nom" value={user.nom} /> <br />
          Prenom:
          <input id="input_updateutilisateur" type="text" name="prenom" value={user.prenom} /> <br />
          Date de naissance:
          <input id="input_updateutilisateur" type="date" name="ddn" value={user.ddn} /> <br />
          Sexe:
          <input id="input_updateutilisateur" type="text" name="sexe" value={user.sexe} /> <br />
          Adresse:
          <input id="input_updateutilisateur" type="text" name="adresse" value={user.adresse} /> <br />
          Code postal:
          <input id="input_updateutilisateur" type="text" name="cp" value={user.cp} /> <br />
          Ville:
          <input id="input_updateutilisateur" type="text" name="ville" value={user.ville} /> <br />
          Pays:
          <input id="input_updateutilisateur" type="text" name="pays" value={user.pays} /> <br />
          Mobile:
          <input id="input_updateutilisateur" type="text" name="mobile" value={user.mobile} /> <br />
          Email:
          <input id="input_updateutilisateur" type="text" name="email" value={user.email} /> <br />
          Password:
          <input id="input_updateutilisateur" type="password" name="psswd" value={user.psswd} /> <br />
        </label>
        <div id="div_button_updateutilisateur">
          <input type="submit" value="Submit" />
          <button onClick={() => profileDelete(user.id_utilisateur)}>Supprimer</button>
        </div>
      </form>
    </div>
  );
};
export default UpdateUtilisateur;
