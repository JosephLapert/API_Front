import { Routes, Route, Link, Outlet, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Formulaire from "./components/Formulaire";
import SeanceCoach from "./components/SeanceCoach";
import UpdateUtilisateur from "./components/UpdateUtilisateur";
import Logout from "./components/Logout";

import { useAuth } from "./contexts/AuthContext";

import "./App.css";

const ProtectedRoute = () => {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/" />;
};

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      {user && <nav>
        <Link to="/">Home</Link>
        <Link to="/form">Inscription</Link>
        <Link to="/seance">Date de séance</Link>
        <Link to="/update">Modification de profil</Link>
        <Logout />
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
