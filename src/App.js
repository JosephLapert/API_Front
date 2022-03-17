import { Routes, Route, Link } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Formulaire from "./components/Formulaire";
import InsertComment from "./components/AjoutComment";
import SeanceCoach from "./components/SeanceCoach";
import UpdateUtilisateur from "./components/UpdateUtilisateur";

import { useAuth } from './contexts/AuthContext';


function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/form">Inscription</Link>
        <Link to="/seance">Date de séance</Link>
        <Link to="/update">Modification de profil</Link>
        <Link to="/comment">insert commentaire</Link>
      </nav>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Formulaire />} />
          <Route path="/comment" element={<InsertComment />} />
          <Route path="/seance" element={<SeanceCoach />} />
          <Route path="/update" element={<UpdateUtilisateur />} />
        </Routes>
    </div>
  );
}

export default App;