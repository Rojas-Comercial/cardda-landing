import React from 'react';
import { Hero } from '../components/Hero';
import { ProblemSection } from '../components/ProblemSection';
import { SolutionsSection } from '../components/SolutionsSection';
import { ReimbursementFlow } from '../components/ReimbursementFlow';
import { IntegrationsSection } from '../components/IntegrationsSection';
import { PricingSection } from '../components/PricingSection';
import { FinalCTA } from '../components/FinalCTA';
import { Button } from '../components/ui/Button';
export function LandingPage() {
  return <div className="min-h-screen bg-white text-[#151515]">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="text-2xl font-bold text-white tracking-tight">
            Card<span className="text-[#fa7210]">da</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Producto
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Clientes
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Precios
            </a>
            <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white" size="sm">
              Ingresar
            </Button>
            <Button variant="primary" size="sm">
              Crear Cuenta
            </Button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <ProblemSection />
        <SolutionsSection />
        <ReimbursementFlow />
        <IntegrationsSection />
        <PricingSection />
        <FinalCTA />
      </main>

      <footer className="bg-[#151515] py-12 border-t border-[#38424e] text-gray-400 text-sm">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Cardda Chile SpA. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>;
}