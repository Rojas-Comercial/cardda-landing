import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { ProductPage } from './pages/ProductPage';
import { ClientsPage } from './pages/ClientsPage';
import { PricingPage } from './pages/PricingPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/producto" element={<ProductPage />} />
      <Route path="/clientes" element={<ClientsPage />} />
      <Route path="/precios" element={<PricingPage />} />
    </Routes>
  );
}