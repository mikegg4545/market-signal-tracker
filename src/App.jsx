import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Notes from "./pages/Notes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="about" element={<About />} />
        <Route path="notes" element={<Notes />} />
      </Route>
    </Routes>
  );
}

export default App;
