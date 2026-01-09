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
      <nav className="absolute top-0 left-0 right-0 z-50 py-6 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a href="#">
            <img src="/cardda-landing/logo.svg" alt="Cardda" className="h-8" />
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-[#38424e] hover:text-[#151515] transition-colors text-sm font-medium">
              Producto
            </a>
            <a href="#" className="text-[#38424e] hover:text-[#151515] transition-colors text-sm font-medium">
              Clientes
            </a>
            <a href="#" className="text-[#38424e] hover:text-[#151515] transition-colors text-sm font-medium">
              Precios
            </a>
            <Button variant="ghost" className="text-[#38424e] hover:bg-[#38424e]/10 hover:text-[#151515]" size="sm">
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