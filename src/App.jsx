
import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import PricingPage from "./pages/PricingPage";
import EnterprisePage from "./pages/EnterprisePage";
import NotFoundPage from "./pages/NotFoundPage";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/enterprise" element={<EnterprisePage />} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/signin" element={<Signin/>} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
