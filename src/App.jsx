
import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import PricingPage from "./pages/PricingPage";
import EnterprisePage from "./pages/EnterprisePage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/enterprise" element={<EnterprisePage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
