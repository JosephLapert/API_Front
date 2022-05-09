import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';

import '../../App.css'

const Home = () => {
    const { login } = useAuth();
    const [error, setError] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const inputs = e.target.querySelectorAll('.form-input');
        const form ={};
        Array.from(inputs).forEach(input => {
            form[input.name] = input.value
        })
        try {
            await login(form)
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div id='home_css'>
            <h2>Bienvenue à la Maison des ligues de Lorraine</h2>
                <form id="form_connect" onSubmit={handleSubmit}>
                    <label id="email_label" htmlFor='email'>Email</label>
                    <input id="email_field" type='text' name='email'className='form-input' />
                    <label id="psswd_label" htmlFor='login'>Password</label>
                    <input type='password' name='psswd' className='form-input' />                    
                    <br />
                    <input id="connect_button" type={"submit"} value='Se connecter'/>
                </form>
                { error && <p>{error}</p> }
        </div>
    )
}
export default Home;