import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Inicio/Home";
import HowItWorks from "./pages/ComoFunciona/HowItWorks";
import Privacy from "./pages/Privacidad/Privacy";
import ForCompanies from "./pages/ParaOrganizaciones/ForCompanies";
import HelpCenter from "./pages/CentroAyuda/HelpCenter";
import PrivacyPolicy from "./pages/Legal/PrivacyPage";
import TermsPage from "./pages/Legal/TermsPage";
import ScrollToTop from "./components/layout/ScrollToTop";

export default function App() {
  const { pathname } = useLocation();

  const hideNavbarRoutes = [
    "/politica-de-privacidad",
    "/terminos-y-condiciones",
  ];
  const shouldHideNavbar = hideNavbarRoutes.includes(pathname);

  return (
    <div className="app-scroll bg-white text-neutral-900">
      <ScrollToTop />
      {!shouldHideNavbar ? <Navbar /> : null}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/como-funciona" element={<HowItWorks />} />
          <Route path="/privacidad" element={<Privacy />} />
          <Route path="/para-empresas" element={<ForCompanies />} />
          <Route path="/centro-de-ayuda" element={<HelpCenter />} />
          <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
          <Route path="/terminos-y-condiciones" element={<TermsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
