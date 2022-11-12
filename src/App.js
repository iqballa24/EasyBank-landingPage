import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/layouts/";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} exact/>
        <Route path="/home" index element={<Home />} />
        <Route path="*" index element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
