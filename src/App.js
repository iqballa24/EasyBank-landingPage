import "./main.css";
import Nav from "./components/layouts/Nav";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="home" index element={<Home />} />
        <Route path="about" element={<NotFound />} />
        <Route path="contact" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
