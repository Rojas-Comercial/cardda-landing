import { Hero } from '../components/Hero';
import { ProblemSection } from '../components/ProblemSection';
import { SolutionsSection } from '../components/SolutionsSection';
import { ReimbursementFlow } from '../components/ReimbursementFlow';
import { IntegrationsSection } from '../components/IntegrationsSection';
import { PricingSection } from '../components/PricingSection';
import { FinalCTA } from '../components/FinalCTA';
import { Link } from 'react-router-dom';
export function LandingPage() {
  return <div className="min-h-screen bg-white text-[#151515]">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 h-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/">
            <img src="/cardda-landing/logo.svg" alt="Cardda" className="h-18" />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/producto" className="text-[#38424e] hover:text-[#151515] transition-colors text-sm font-medium">
              Producto
            </Link>
            <Link to="/clientes" className="text-[#38424e] hover:text-[#151515] transition-colors text-sm font-medium">
              Clientes
            </Link>
            <Link to="/precios" className="text-[#38424e] hover:text-[#151515] transition-colors text-sm font-medium">
              Precios
            </Link>
            <Link to="/blog" className="text-[#38424e] hover:text-[#151515] transition-colors text-sm font-medium">
              Blog
            </Link>
            <a href="https://www.cardda.com/login" className="inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg h-9 px-4 text-sm text-[#38424e] hover:bg-[#38424e]/10 hover:text-[#151515]">
              Ingresar
            </a>
            <a href="https://www.cardda.com/onboarding" className="inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg h-9 px-4 text-sm bg-[#fa7210] text-white hover:bg-[#e86609] focus:ring-[#fa7210] shadow-lg shadow-[#fa7210]/20">
              Crear Cuenta
            </a>
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