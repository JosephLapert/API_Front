import { Routes, Route, Link } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Formulaire from "./components/Formulaire";
import InsertComment from "./components/AjoutComment";
// import SeanceCoach from "./components/SeanceCoach";
import UpdateUtilisateur from "./components/UpdateUtilisateur";
import Logout from "./components/Logout";
import Seances from "./components/Seances";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/form">Inscription</Link>
        {/* <Link to="/seance">Date de séance</Link> */}
        <Link to="/update">Modification de profil</Link>
        <Link to="/seances">Séances</Link>
      </nav>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Formulaire />} />
          <Route path="/comment" element={<InsertComment />} />
          {/* <Route path="/seance" element={<SeanceCoach />} /> */}
          <Route path="/update" element={<UpdateUtilisateur />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/seances" element={<Seances />} />
        </Routes>
    </div>
  );
}

export default App;