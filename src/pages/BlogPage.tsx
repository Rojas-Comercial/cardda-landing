import { Link } from 'react-router-dom';
import { useState } from 'react';

export function BlogPage() {
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#151515]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/">
            <img src="/cardda-landing/logo.svg" alt="Cardda" className="h-18" />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <div 
              className="relative"
              onMouseEnter={() => setIsProductDropdownOpen(true)}
              onMouseLeave={() => setIsProductDropdownOpen(false)}
            >
              <Link to="/producto" className="text-[#38424e] hover:text-[#151515] transition-colors text-sm font-medium">
                Producto
              </Link>
              {isProductDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50"
                  onMouseEnter={() => setIsProductDropdownOpen(true)}
                >
                  <Link to="/producto" className="block px-4 py-2 text-sm text-[#38424e] hover:bg-gray-100 hover:text-[#151515]">
                    Tarjetas prepago para empresas
                  </Link>
                  <Link to="/producto" className="block px-4 py-2 text-sm text-[#38424e] hover:bg-gray-100 hover:text-[#151515]">
                    Cuentas por pagar
                  </Link>
                  <Link to="/producto" className="block px-4 py-2 text-sm text-[#38424e] hover:bg-gray-100 hover:text-[#151515]">
                    Transferencias bancarias
                  </Link>
                  <Link to="/reembolsos" className="block px-4 py-2 text-sm text-[#38424e] hover:bg-gray-100 hover:text-[#151515]">
                    Reembolsos
                  </Link>
                </div>
              )}
            </div>
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

      <main className="pt-20">
        <h1 className="text-4xl font-bold text-center mb-8">Blog de Cardda</h1>
        <p className="text-center text-lg mb-8">
          Descubre las últimas noticias, consejos y actualizaciones sobre gestión de gastos y finanzas empresariales.
        </p>
        
        {/* Featured Article */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">Artículo Destacado</h2>
          <a
            href="https://test-cardda.ghost.io/comparativa-2026-las-mejores-herramientas-de-gestion-de-reembolsos-en-chile/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fa7210] hover:text-[#e86609] text-lg underline"
          >
            Comparativa 2026: Las mejores herramientas de gestión de reembolsos en Chile
          </a>
        </div>
        
        <div className="text-center">
          <a
            href="https://blog.cardda.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg h-12 px-6 text-base bg-[#fa7210] text-white hover:bg-[#e86609] focus:ring-[#fa7210] shadow-lg shadow-[#fa7210]/20"
          >
            Ver más contenido en el blog
          </a>
        </div>
        <div className="text-center mt-8">
          <Link to="/" className="text-[#fa7210] hover:underline">Volver al inicio</Link>
        </div>
      </main>
    </div>
  );
}