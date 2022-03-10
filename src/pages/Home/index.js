import axios from 'axios';

const Home = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form ={};
        const inputs = e.target.querySelectorAll('.form-input');
        Array.from(inputs).forEach(input => {
            form[input.name] = input.value
        })
        try {
            await axios.post('http://localhost:8000/api/auth/', form)
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h3>
                Bienvenue sur la page d'accueil de Maison des Ligues.        
            </h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>
                    Email:
                    <input className="form-input" type="text" name="email" />
                    Password:
                    <input className="form-input" type="password" name="psswd" />
                </label> 
                    <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Home;    