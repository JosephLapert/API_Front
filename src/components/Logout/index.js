import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

import './logout.css'

const Logout = () => {
  const { logout } = useAuth();
  const [error, setError] = useState();
  const [message, setMessage] = useState();

  const handleLogout = async () => {
    try {
      await logout();
      setMessage("Vous êtes déconnectez");
    } catch (error) {
      setError(error.message);
      console.log(message);
    }
  };
  return (
    <div>
      <button id="button_logout" onClick={() => handleLogout()}>Déconnexion</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Logout;
