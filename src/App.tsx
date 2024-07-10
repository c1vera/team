import { NavBar } from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { Line } from "./pages/Line";
import { Roster } from "./pages/Roster";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Line/>} />
          <Route path="/roster" element={<Roster/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
