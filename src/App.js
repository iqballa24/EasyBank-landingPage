import "./main.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" index element={<Home />} />
        <Route path="about" element={<NotFound />} />
        <Route path="contact" element={<NotFound />} />
        <Route path="blogs" element={<NotFound />} />
        <Route path="careers" element={<NotFound />} />
        <Route path="support" element={<NotFound />} />
        <Route path="privacy-police" element={<NotFound />} />
        <Route path="" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
