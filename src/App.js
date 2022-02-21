import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ListUsers from "./pages/ListTodo";
import Home from "./pages/Home";
import Formulaire from "./components/Formulaire";
import InsertComment from "./components/AjoutComment";

function App() {


  return (
    <div className="App">
      <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/todos">Users</Link>
        <Link to="/form">Formulaire</Link>
        <Link to="/comment">Commentaire</Link>
      </nav>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="todos" element={<ListUsers />} />
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Formulaire />} />
          <Route path="/comment" element={<InsertComment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
