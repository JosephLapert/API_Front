import axios from '../../config/axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react'

const Home = () => {
    const { login } = useAuth();
    const [error, setError] = useState();
    // const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const inputs = e.target.querySelectorAll('.form-input');

        const form ={};
        Array.from(inputs).forEach(input => {
            form[input.name] = input.value
        })
        try {
            // const { data } = await axios.post('/auth', form)    // permet de d'accéder à ce back = sécurité
            await login(form)
        } catch (error) {
            setError(error.message)
        }
    }


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>Email</label>
                <input type='text' name='email'className='form-input' />
                <label htmlFor='login'>Password</label>
                <input type='password' name='psswd' className='form-input' />

                <input type={"submit"}/>
            </form>
            { error && <p>{error}</p> }
        </div>
    )
    
}

export default Home;