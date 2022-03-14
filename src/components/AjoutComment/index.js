import React, { useRef } from 'react';
import axios from 'axios';

const NewComment = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = {};
        const inputs = formRef.current.querySelectorAll('input');
        Array.from(inputs).filter( input => input.checked ).forEach(input => {
            form[input.name] = input.value  
        })
        await axios.post('http://localhost:8000/api/comment/', form)
    }
    const formRef = useRef();
    return (
        <form id='comment_css' ref={formRef} onSubmit={(e) => handleSubmit(e)}>
            <input type="radio" id="admis" name="commentaire" value="admis"/>
            <label for="admis">Admis</label>

            <input type="radio" id="refuser" name="commentaire" value="refusé"/>
            <label for="refuser">Refuser</label> <br />

            <button>Validez</button>
        </form>
    );
};

export default NewComment;