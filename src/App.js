import { Routes, Route, Link } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Formulaire from "./components/Formulaire";
import SeanceCoach from "./components/SeanceCoach";
import UpdateUtilisateur from "./components/UpdateUtilisateur";
import Inscription from "./components/Inscription";

import './App.css'
import Logout from "./components/Logout";

function App() {
  return (
    <div className="App">
      <nav>
        <Link id="link_css" to="/">Home</Link>
        <Link id="link_css" to="/form">Inscription</Link>
        <Link id="link_css" to="/seance">Date de séance</Link>
        <Link id="link_css" to="/update">Modification de profil</Link>
        <Logout />
      </nav>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Formulaire />} />
        <Route path="/seance" element={<SeanceCoach />} />
        <Route path="/update" element={<UpdateUtilisateur />} />
        <Route path="/test" element={<Inscription />} />
      </Routes>
    </div>
  );
}

export default App;
