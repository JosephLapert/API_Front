import { useState } from "react";
import axios from '../../config/axios'
import { useAuth } from '../../contexts/AuthContext';


const Inscription = ({id_seance_test}) => {
  const [message, setMessage] = useState();
  const { user } = useAuth();

  const handleClick = async () => {
    try {
      console.log(user);
      await axios.post(`/inscription/`, {
        idSeanceTest:id_seance_test,
        idUtilisateur:user.id_utilisateur,
        idStatutInscription: 1
       })
    } catch (error) {
      console.log(error);
    }
    setMessage("Vous êtes inscrit pour la session");
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <div>
      <button onClick={handleClick}>Inscription</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Inscription;
