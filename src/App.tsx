import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { ProductPage } from './pages/ProductPage';
import { ClientsPage } from './pages/ClientsPage';
import { PricingPage } from './pages/PricingPage';
import { BlogPage } from './pages/BlogPage';
import { ReimbursementsPage } from './pages/ReimbursementsPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/producto" element={<ProductPage />} />
      <Route path="/clientes" element={<ClientsPage />} />
      <Route path="/precios" element={<PricingPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/reembolsos" element={<ReimbursementsPage />} />
    </Routes>
  );
}