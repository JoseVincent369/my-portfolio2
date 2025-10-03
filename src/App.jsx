import { Routes, Route, Navigate } from "react-router-dom";
import Home_main from "./pages/home/Home_main";
import Project_main from "./pages/projects/Project_main";
import Aboutme_main from "./pages/about/Aboutme_main"
import Contactme_main from "./pages/contact/Contactme_main"
import Navbar from "./pages/navbar/Navbar";  

function App() {
  return (
    <div>
      {/* Navbar stays on all pages */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/home" element={<Home_main />} />
        <Route path="/projects" element={<Project_main />} />
        <Route path="/aboutme" element={<Aboutme_main />} />
        <Route path="/contact" element={<Contactme_main />} />

        {/* Redirect root and unknown routes */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
}

export default App;