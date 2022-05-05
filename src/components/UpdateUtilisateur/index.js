import React, { useRef, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";

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
    <form ref={formeRef} onSubmit={(e) => handleSubmit(e)}>
      <label>
        Nom:
        <input type="text" name="nom" value={user.nom} /> <br />
        Prenom:
        <input type="text" name="prenom" value={user.prenom} /> <br />
        Date de naissance:
        <input type="date" name="ddn" value={user.ddn} /> <br />
        Sexe:
        <input type="text" name="sexe" value={user.sexe} /> <br />
        Adresse:
        <input type="text" name="adresse" value={user.adresse} /> <br />
        Code postal:
        <input type="text" name="cp" value={user.cp} /> <br />
        Ville:
        <input type="text" name="ville" value={user.ville} /> <br />
        Pays:
        <input type="text" name="pays" value={user.pays} /> <br />
        Mobile:
        <input type="text" name="mobile" value={user.mobile} /> <br />
        Email:
        <input type="text" name="email" value={user.email} /> <br />
        Password:
        <input type="password" name="psswd" value={user.psswd} /> <br />
      </label>
      <input type="submit" value="Submit" />
      <button onClick={() => profileDelete(user.id_utilisateur)}>
        Supprimer
      </button>
    </form>
  );
};
export default UpdateUtilisateur;
