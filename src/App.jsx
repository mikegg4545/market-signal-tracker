import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Notes from "./pages/Notes";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="flex gap-6 p-6 border-b border-slate-700">
        <Link to="/">Dashboard</Link>
        <Link to="/about">About</Link>
        <Link to="/notes">Notes</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </div>
  );
}

export default App;
