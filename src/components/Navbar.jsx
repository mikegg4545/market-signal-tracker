import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-6 p-6 border-b border-slate-700">
      <Link to="/">Dashboard</Link>
      <Link to="/about">About</Link>
      <Link to="/notes">Notes</Link>
    </nav>
  );
}

export default Navbar;
