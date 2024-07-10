import { NavBar } from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { Line } from "./pages/Line";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Line/>} />
          <Route path="/roster" element={<div>로스터 확인하기</div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
