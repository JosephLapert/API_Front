import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ListUsers from "./pages/ListTodo";
import Home from "./pages/Home";
import Formulaire from "./components/Formulaire";
import InsertComment from "./components/AjoutComment";
import NewComment from "./components/Newcomment";
import './App.css'

function App() {


  return (
    <div className="App">
      <Router>
      <nav>
        <Link id='link_css' to="/">Home</Link>
        <Link id='link_css' to="/todos">Users</Link>
        <Link id='link_css' to="/form">Formulaire</Link>
        <Link id='link_css' to="/comment">Commentaire</Link>
      </nav>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="todos" element={<ListUsers />} />
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Formulaire />} />
          <Route path="/comments" element={<InsertComment />} />
          <Route path="/comment" element={<NewComment/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
