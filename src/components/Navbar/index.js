import React, { useRef } from "react";


const Navbar = () => {
    
    const LogoutButtonRef = useRef();
    return (
        <div id="Navbar">
            <p>Oh une navbar...</p>
            <button id="button_navbar_css">Déconnexion</button>
        </div>
    
    )
        
};
  export default Navbar;