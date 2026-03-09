import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/home/Home";
import HowItWorks from "./pages/HowItWorks";
import Privacy from "./pages/Privacy";
import ForCompanies from "./pages/ForCompanies";
import HelpCenter from "./pages/HelpCenter";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/como-funciona" element={<HowItWorks />} />
          <Route path="/privacidad" element={<Privacy />} />
          <Route path="/para-empresas" element={<ForCompanies />} />
          <Route path="/centro-de-ayuda" element={<HelpCenter />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}