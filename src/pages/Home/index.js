import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';
import Logout from '../../components/Logout';

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
            <h1>Maison des ligues de Lorraine</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email'className='form-input' />

                    <label htmlFor='login'>Password</label>
                    <input type='password' name='psswd' className='form-input' />
                    
                    <br />
                    <input type={"submit"} value='Se connecter'/><Logout />
                </form>
                { error && <p>{error}</p> }
        </div>
        
    )
}
export default Home;