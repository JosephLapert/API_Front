import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ListUsers from "./pages/ListTodo";
import Home from "./pages/Home";
import Formulaire from "./components/Formulaire";
import InsertComment from "./components/AjoutComment";
import SeanceCoach from "./components/SeanceCoach";
import UpdateUtilisateur from "./components/UpdateUtilisateur";

function App() {
  return (
    <div className="App">
      <Router>
      <nav>
        <Link to="/">Home</Link>
        {/* <Link to="/todos">Users</Link> */}
        <Link to="/form">Inscription</Link>
        <Link to="/seance">Date de séance</Link>
        <Link to="/update">Modification de profil</Link>
      </nav>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="todos" element={<ListUsers />} />
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Formulaire />} />
          <Route path="/comment" element={<InsertComment />} />
          <Route path="/seance" element={<SeanceCoach />} />
          <Route path="/update" element={<UpdateUtilisateur />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
