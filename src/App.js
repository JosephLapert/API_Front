import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ListUsers from "./pages/ListTodo";
import NameForm from "./components/Formulaire";
import SeanceCoach from "./components/SeanceCoach";
import InsertComment from "./components/AjoutComment";
import AjoutComment from "./components/AjoutComment";
import './App.css'

function App() {


  return (
    <div className="App">
      <Router>
      <nav>
        <Link id='link_css' to="/">Home</Link>
        <Link id='link_css' to="/users">Users</Link>
        <Link id='link_css' to="/form">Formulaire</Link>
        <Link id='link_css' to="/seance">Date des séances</Link>
      </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/users" element={<ListUsers />} />
          <Route path="/form" element={<NameForm />} />
          <Route path="/seance" element={<SeanceCoach/>} />
          <Route path="/comments" element={<InsertComment />} />
          <Route path="/comment" element={<AjoutComment/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
