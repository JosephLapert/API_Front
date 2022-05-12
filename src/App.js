import { Routes, Route, Link, Outlet, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Formulaire from "./components/Formulaire";
import SeanceCoach from "./components/SeanceCoach";
import UpdateUtilisateur from "./components/UpdateUtilisateur";
<<<<<<< HEAD
import Logout from "./components/Logout";

import { useAuth } from "./contexts/AuthContext";

import "./App.css";

const ProtectedRoute = () => {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/" />;
};
=======
import Inscription from "./components/Inscription";
import Logout from './components/Logout';

import './components/Logout/logout.css'
>>>>>>> test_css

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      {user && <nav>
        <Link id="link_css" to="/">Home</Link>
        <Link id="link_css" to="/form">Inscription</Link>
        <Link id="link_css" to="/seance">Date de séance</Link>
        <Link id="link_css" to="/update">Modification de profil</Link>
        <Logout/>
      </nav>}
      <Routes>
          <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path="*" element={<NotFound />} />
          <Route path="/form" element={<Formulaire />} />
          <Route path="/seance" element={<SeanceCoach />} />
          <Route path="/update" element={<UpdateUtilisateur />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
