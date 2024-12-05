import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Historico from "./Historico";
import "./App.css";
import Home from "./Home"; 

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/historico">Histórico</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;