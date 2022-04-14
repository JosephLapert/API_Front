import { useState } from "react";

const Inscription = () => {

    const [message, setMessage] = useState();

    const handleClick = () => {
        setMessage('Vous êtes inscrit pour la session')
        setTimeout(() => {                                              
            setMessage('')
        }, 2000 )
    }

    
    return (
         <div>
            <button onClick={() => handleClick()}>Inscription</button>
            {message && <p>{message}</p>}
        </div> 
    );
}
 
export default Inscription;