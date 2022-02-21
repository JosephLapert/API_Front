import React, { useRef, useState } from 'react';

const NameForm = (props) => {

    const [form, setForm] = useState({
        nom: "",
        prenom:"",
        dateDeNaissance:"",
        sexe:"",
        adresse:"",
        codePostal:"",
        ville:"",
        pays:"",
        mobile:"",
        email:"",
        password:""
    });

    const formRef = useRef();

    return (
        <>
        <label>
            Nom: 
            <input type="text" /> <br />
            Prenom: 
            <input type="text" /> <br />
            Date de naissance:
            <input type="text" /> <br />
            Sexe:
            <input type="text" /> <br />
            Adresse:
            <input type="text" /> <br />
            Code postal:
            <input type="text" /> <br />
            Ville:
            <input type="text" /> <br />
            Pays:
            <input type="text" /> <br />
            Mobile:
            <input type="text" /> <br />
            Email:
            <input type="text" /> <br />
            Password:
            <input type="password" /> <br />
        </label>
        <input type="submit" value="Submit" />            
        </>
    );
};

export default NameForm;