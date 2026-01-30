import { Link } from 'react-router-dom';
import { ReimbursementFlow } from '../components/ReimbursementFlow';
import { useState, useEffect, useRef } from 'react';

const erpIntegrations = [
  { name: 'SAP', logo: '/cardda-landing/Logo SAP 2011.svg', description: 'Conexión directa con SAP Business One, SAP R/3 y SAP S/4 HANA para gestión de gastos y rendiciones.' },
  { name: 'Oracle', logo: '/cardda-landing/Oracle 2.svg', description: 'Integración completa con Oracle ERP Cloud y Oracle NetSuite para sincronización contable automatizada.' },
  { name: 'Softland', logo: '/cardda-landing/Favicon-Softland-New.png', description: 'Sincronización con Softland ERP para contabilidad y gestión tributaria en Chile.' },
  { name: 'Microsoft Entra ID', logo: '/cardda-landing/Microsoft_Entra_ID_color_icon.svg-1.png', description: 'Autenticación mediante Microsoft Entra ID para gestión segura de usuarios y permisos corporativos.' },
  { name: 'Nubox', logo: '/cardda-landing/Nubox.png', description: 'Integración con Nubox para contabilidad, facturación electrónica y gestión tributaria.' },
];

export function ReimbursementsPage() {
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeErp, setActiveErp] = useState(0);
  const [selectedErp, setSelectedErp] = useState<number | null>(null);
  const [ocrVisible, setOcrVisible] = useState(false);
  const ocrRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (selectedErp !== null) return;
    const interval = setInterval(() => {
      setActiveErp(prev => (prev + 1) % erpIntegrations.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [selectedErp]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOcrVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ocrRef.current) observer.observe(ocrRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#151515]">
      {/* Header similar to landing */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/">
            <img src="/cardda-landing/logo.svg" alt="Cardda" className="h-18" />
          </Link>
          {/* Mobile hamburger button */}
          <button
            className="md:hidden p-2 text-[#38424e] hover:text-[#151515]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menú"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop nav */}
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

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-3 space-y-1">
              <p className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">Producto</p>
              <Link to="/producto" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-[#38424e] hover:bg-gray-100 rounded-lg">
                Tarjetas prepago para empresas
              </Link>
              <Link to="/producto" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-[#38424e] hover:bg-gray-100 rounded-lg">
                Cuentas por pagar
              </Link>
              <Link to="/producto" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-[#38424e] hover:bg-gray-100 rounded-lg">
                Transferencias bancarias
              </Link>
              <Link to="/reembolsos" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-[#38424e] hover:bg-gray-100 rounded-lg">
                Reembolsos
              </Link>
              <div className="border-t border-gray-200 my-2" />
              <Link to="/clientes" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-[#38424e] hover:bg-gray-100 rounded-lg">
                Clientes
              </Link>
              <Link to="/precios" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-[#38424e] hover:bg-gray-100 rounded-lg">
                Precios
              </Link>
              <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-[#38424e] hover:bg-gray-100 rounded-lg">
                Blog
              </Link>
              <div className="border-t border-gray-200 my-2" />
              <a href="https://www.cardda.com/login" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-[#38424e] hover:bg-gray-100 rounded-lg">
                Ingresar
              </a>
              <a href="https://www.cardda.com/onboarding" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-sm font-medium text-white bg-[#fa7210] hover:bg-[#e86609] rounded-lg text-center">
                Crear Cuenta
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-20">
        {/* Hero Section for Reimbursements */}
        <section className="py-20 bg-gradient-to-br from-[#fa7210]/10 to-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#151515] mb-6">
              Gestión de reembolsos<br /><span className="text-[#fa7210]">simplificada con WhatsApp</span>
            </h1>
            <p className="text-xl text-[#38424e] max-w-3xl mx-auto mb-8">
              Los colaboradores envían sus boletas por WhatsApp, se actualizan automáticamente en Cardda y el equipo de finanzas gestiona todos los reembolsos desde un solo lugar.
            </p>
            <div className="flex items-center justify-center gap-0 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email corporativo"
                className="flex-1 h-12 px-4 rounded-l-lg border-2 border-r-0 border-gray-300 focus:border-[#fa7210] focus:outline-none text-sm text-[#151515] bg-white"
              />
              <a href="https://www.cardda.com/onboarding" className="h-12 px-6 bg-[#fa7210] text-white rounded-r-lg hover:bg-[#e86609] transition-colors flex items-center text-sm font-medium whitespace-nowrap">
                Comenzar
              </a>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <ReimbursementFlow />

        {/* Integraciones - Orbital */}
        <section className="py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">

              {/* Left: Zapier-style wheel */}
              <div className="flex items-center justify-center lg:flex-1">
                <div className="relative w-[285px] h-[285px] sm:w-[355px] sm:h-[355px] lg:w-[470px] lg:h-[470px] overflow-hidden mx-auto">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] scale-[0.6] sm:scale-[0.75] lg:scale-100 origin-center">

                  {/* Static outer ring */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-gray-200" />

                  {/* SVG connecting lines from center to each node */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 440 440">
                    {erpIntegrations.map((_, i) => {
                      const angle = (360 / erpIntegrations.length) * i - 90;
                      const rad = (angle * Math.PI) / 180;
                      const endX = 220 + 190 * Math.cos(rad);
                      const endY = 220 + 190 * Math.sin(rad);
                      const isActive = selectedErp !== null ? selectedErp === i : i === activeErp;
                      return (
                        <g key={i}>
                          {/* Base line (always visible, subtle) */}
                          <line
                            x1="220" y1="220" x2={endX} y2={endY}
                            stroke="#e5e7eb"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                          />
                          {/* Active line (glows when selected) */}
                          <line
                            x1="220" y1="220" x2={endX} y2={endY}
                            stroke="#fa7210"
                            strokeWidth="2.5"
                            style={{
                              opacity: isActive ? 1 : 0,
                              transition: 'opacity 0.5s ease',
                            }}
                          />
                          {/* Dot on the line midpoint */}
                          <circle
                            cx={(220 + endX) / 2}
                            cy={(220 + endY) / 2}
                            r="3"
                            fill={isActive ? '#fa7210' : '#d1d5db'}
                            style={{ transition: 'fill 0.5s ease' }}
                          />
                        </g>
                      );
                    })}
                  </svg>

                  {/* Center: Cardda logo */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div
                      className={`w-20 h-20 bg-[#fa7210] rounded-2xl flex items-center justify-center shadow-lg cursor-pointer transition-all duration-500 ${selectedErp === null ? 'shadow-[#fa7210]/30 scale-100' : 'shadow-[#fa7210]/10 scale-95'}`}
                      onClick={() => setSelectedErp(null)}
                    >
                      <img src="/cardda-landing/Favicon negro.svg" alt="Cardda" className="w-12 h-12 object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
                    </div>
                  </div>

                  {/* ERP nodes positioned statically around the circle */}
                  {erpIntegrations.map((erp, i) => {
                    const angle = (360 / erpIntegrations.length) * i - 90;
                    const rad = (angle * Math.PI) / 180;
                    const x = 220 + 190 * Math.cos(rad);
                    const y = 220 + 190 * Math.sin(rad);
                    const isSelected = selectedErp === i;
                    const isActive = selectedErp !== null ? isSelected : i === activeErp;
                    return (
                      <div
                        key={i}
                        className="absolute z-20"
                        style={{
                          left: `${x}px`,
                          top: `${y}px`,
                          transform: 'translate(-50%, -50%)',
                        }}
                      >
                        <div
                          onClick={() => setSelectedErp(isSelected ? null : i)}
                          className={`bg-white rounded-2xl w-[90px] h-[90px] flex items-center justify-center border-2 cursor-pointer transition-all duration-500 ${
                            isActive
                              ? 'border-[#fa7210] shadow-lg shadow-[#fa7210]/20 scale-110'
                              : 'border-gray-200 shadow-sm hover:border-gray-300 hover:shadow-md hover:scale-105'
                          }`}
                          title={erp.name}
                        >
                          <img src={erp.logo} alt={erp.name} className="w-14 h-14 object-contain" />
                        </div>
                      </div>
                    );
                  })}

                </div>
                </div>
              </div>

              {/* Right: Text */}
              <div className="lg:flex-1 mt-8 lg:mt-0 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-[#151515] mb-4">
                  Nos integramos a tu <span className="text-[#fa7210]">ERP</span>
                </h2>

                {/* Default description or selected ERP description */}
                <div className="relative min-h-[120px]">
                  <div className={`transition-all duration-300 ${selectedErp !== null ? 'opacity-0 absolute inset-0 pointer-events-none' : 'opacity-100'}`}>
                    <p className="text-lg text-[#38424e] mb-4">
                      Conéctate fácilmente con el ERP y sistema contable que tenga tu empresa, gracias a nuestra API robusta u otra opción de integración flexible.
                    </p>
                    <p className="text-lg text-[#38424e]">
                      Nuestro equipo experto te acompaña en cada paso para que la conexión sea rápida y sin complicaciones.
                    </p>
                  </div>
                  <div className={`transition-all duration-300 ${selectedErp !== null ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}>
                    {selectedErp !== null && (
                      <div className="bg-[#fa7210]/5 border border-[#fa7210]/20 rounded-xl p-5">
                        <p className="text-sm font-semibold text-[#fa7210] uppercase tracking-wider mb-1">Integración con</p>
                        <p className="text-2xl font-bold text-[#151515] mb-3">{erpIntegrations[selectedErp].name}</p>
                        <p className="text-lg text-[#38424e]">{erpIntegrations[selectedErp].description}</p>
                        <button
                          onClick={() => setSelectedErp(null)}
                          className="mt-4 text-sm text-[#fa7210] hover:text-[#e86609] font-medium transition-colors"
                        >
                          ← Ver todas las integraciones
                        </button>
                      </div>
                    )}
                  </div>
                </div>

              </div>

            </div>
          </div>

          <style>{`
            @keyframes erpPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
          `}</style>
        </section>

        {/* Cómo funciona el OCR - Boletas Escaneadas */}
        <section className="py-20 bg-gray-50">
          <div ref={ocrRef} className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Tecnología OCR en Acción</h2>
            <p className="text-center text-[#38424e] max-w-2xl mx-auto mb-12">
              Nuestro bot de reconocimiento de texto extrae automáticamente toda la información de tus boletas
            </p>

            <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-center">
              {/* Boleta Original - slides from left */}
              <div className={`flex flex-col items-center transition-all duration-1000 ${ocrVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300 w-full max-w-sm">
                  <div className="bg-gradient-to-b from-gray-100 to-white p-6 rounded text-sm">
                    <div className="text-center mb-4 border-b-2 border-gray-300 pb-2">
                      <p className="font-bold text-xs">TÓPICO</p>
                      <p className="text-xs">RUT: 96.534.456-K</p>
                      <p className="text-xs font-bold">BOLETA</p>
                      <p className="text-xs">Nº 00123456</p>
                    </div>
                    <div className="space-y-1 mb-4">
                      <p className="text-xs"><span className="font-bold">Fecha:</span> 15/01/2026</p>
                      <p className="text-xs"><span className="font-bold">Cliente:</span> Juan Pérez</p>
                      <p className="text-xs"><span className="font-bold">Concepto:</span> Servicios</p>
                      <p className="text-xs"><span className="font-bold">Monto:</span> $50.000</p>
                    </div>
                    <div className="border-t-2 border-gray-300 pt-2">
                      <p className="text-xs font-bold">TOTAL: $50.000</p>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm font-semibold text-[#151515]">Boleta Original</p>
              </div>

              {/* Center - WSP + Cardda with directional arrows */}
              <div className={`flex flex-col items-center justify-center gap-3 py-6 transition-all duration-1000 delay-[800ms] ${ocrVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                {/* Desktop: horizontal flow with arrows */}
                <div className="hidden md:flex items-center gap-5">
                  {/* Arrow from left */}
                  <div className="flex items-center">
                    <div className="w-12 h-px bg-gradient-to-r from-gray-200 to-gray-400" />
                    <svg className="w-6 h-6 text-gray-400 -ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>

                  {/* Logos */}
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg shadow-[#25D366]/20 border-2 border-[#25D366] bg-[#25D366] flex items-center justify-center">
                      <img src="/cardda-landing/Logo oficial WhatsApp.svg" alt="WhatsApp" className="w-20 h-20 object-contain" />
                    </div>
                    <span className="text-gray-400 font-bold text-xl">+</span>
                    <div className="w-24 h-24 bg-[#fa7210] rounded-full flex items-center justify-center shadow-lg shadow-[#fa7210]/20 border-2 border-[#fa7210]">
                      <img src="/cardda-landing/Favicon negro.svg" alt="Cardda" className="w-14 h-14 object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
                    </div>
                  </div>

                  {/* Arrow to right */}
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-gray-400 -mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <div className="w-12 h-px bg-gradient-to-r from-gray-400 to-gray-200" />
                  </div>
                </div>

                {/* Mobile: vertical flow with arrows */}
                <div className="md:hidden flex flex-col items-center gap-3">
                  <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg shadow-[#25D366]/20 border-2 border-[#25D366] bg-[#25D366] flex items-center justify-center">
                      <img src="/cardda-landing/Logo oficial WhatsApp.svg" alt="WhatsApp" className="w-16 h-16 object-contain" />
                    </div>
                    <span className="text-gray-400 font-bold text-xl">+</span>
                    <div className="w-20 h-20 bg-[#fa7210] rounded-full flex items-center justify-center shadow-lg shadow-[#fa7210]/20 border-2 border-[#fa7210]">
                      <img src="/cardda-landing/Favicon negro.svg" alt="Cardda" className="w-12 h-12 object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
                    </div>
                  </div>
                  <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>

                <p className="text-sm font-semibold text-[#38424e] text-center mt-2">Procesado por<br/>WhatsApp + Cardda OCR</p>
              </div>

              {/* Datos Extraídos - slides from right */}
              <div className={`flex flex-col items-center transition-all duration-1000 delay-[1600ms] ${ocrVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-[#fa7210] w-full max-w-sm">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                      <span className="text-sm font-semibold text-[#38424e]">Proveedor:</span>
                      <span className="text-sm text-[#151515]">TÓPICO</span>
                    </div>
                    <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                      <span className="text-sm font-semibold text-[#38424e]">RUT:</span>
                      <span className="text-sm text-[#151515]">96.534.456-K</span>
                    </div>
                    <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                      <span className="text-sm font-semibold text-[#38424e]">Boleta Nº:</span>
                      <span className="text-sm text-[#151515]">00123456</span>
                    </div>
                    <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                      <span className="text-sm font-semibold text-[#38424e]">Fecha:</span>
                      <span className="text-sm text-[#151515]">15/01/2026</span>
                    </div>
                    <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                      <span className="text-sm font-semibold text-[#38424e]">Concepto:</span>
                      <span className="text-sm text-[#151515]">Servicios</span>
                    </div>
                    <div className="flex items-center justify-between bg-[#fa7210]/10 p-3 rounded">
                      <span className="text-sm font-semibold text-[#fa7210]">Monto Total:</span>
                      <span className="text-lg font-bold text-[#fa7210]">$50.000</span>
                    </div>
                    <div className="flex items-center space-x-2 mt-4 bg-green-50 p-2 rounded">
                      <span className="text-green-600 text-sm">✓</span>
                      <span className="text-sm text-green-600 font-medium">Datos extraídos correctamente</span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm font-semibold text-[#151515]">Datos Extraídos Automáticamente</p>
              </div>
            </div>

            {/* Beneficios del OCR */}
            <div className="mt-16 grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#fa7210]">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-[#25D366] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <p className="font-semibold text-[#151515]">Alta Precisión</p>
                </div>
                <p className="text-sm text-[#38424e]">Nuestro OCR cumple con los mayores estándares de precisión del mercado</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#fa7210]">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-[#25D366] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <p className="font-semibold text-[#151515]">Segundos para Procesar</p>
                </div>
                <p className="text-sm text-[#38424e]">Procesa boletas en segundos para resultados rápidos</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#fa7210]">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-[#25D366] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <p className="font-semibold text-[#151515]">Múltiples Formatos</p>
                </div>
                <p className="text-sm text-[#38424e]">Lee boletas digitales, fotografías y documentos escaneados</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Características Clave</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white rounded-lg shadow-sm border-l-4 border-[#25D366] transition-all duration-300 hover:shadow-lg hover:shadow-[#fa7210]/15 hover:-translate-y-2">
                <div className="aspect-[16/9] overflow-hidden rounded-tr-lg">
                  <img src="/cardda-landing/wsp.jpeg" alt="WhatsApp Integrado" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">WhatsApp Integrado</h3>
                  <p className="text-[#38424e]">Solo agrega los números de teléfono de tus colaboradores y podrán enviar sus boletas directamente por WhatsApp, sin instalar ninguna app adicional.</p>
                </div>
              </div>
              <div className="group bg-white rounded-lg shadow-sm border-l-4 border-[#fa7210] transition-all duration-300 hover:shadow-lg hover:shadow-[#fa7210]/15 hover:-translate-y-2">
                <div className="aspect-[16/9] overflow-hidden rounded-tr-lg">
                  <img src="/cardda-landing/rendiciones.png" alt="Rendiciones en Cardda" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Rendiciones en Cardda</h3>
                  <p className="text-[#38424e]">Las solicitudes se generan automáticamente en la plataforma Cardda para control centralizado y aprobación instantánea.</p>
                </div>
              </div>
              <div className="group bg-white rounded-lg shadow-sm border-l-4 border-[#3b82f6] transition-all duration-300 hover:shadow-lg hover:shadow-[#fa7210]/15 hover:-translate-y-2">
                <div className="aspect-[16/9] overflow-hidden rounded-tr-lg">
                  <img src="/cardda-landing/Homeoffice online info.jpg" alt="Aprobación por Finanzas" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Aprobación por Finanzas</h3>
                  <p className="text-[#38424e]">Las rendiciones quedan listas para que el área de finanzas las revise, apruebe y genere el pago correspondiente.</p>
                </div>
              </div>
              <div className="group bg-white rounded-lg shadow-sm border-l-4 border-[#0070f2] transition-all duration-300 hover:shadow-lg hover:shadow-[#fa7210]/15 hover:-translate-y-2">
                <div className="aspect-[16/9] overflow-hidden rounded-tr-lg">
                  <img src="/cardda-landing/SAP.jpeg" alt="Integraciones a Medida" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Integraciones a Medida</h3>
                  <p className="text-[#38424e]">Desarrollamos integraciones personalizadas para conectar Cardda con tu ERP o sistema contable, incluyendo <span className="font-semibold text-[#151515]">SAP</span>, Xero y más.</p>
                </div>
              </div>
              <div className="group bg-white rounded-lg shadow-sm border-l-4 border-[#0ea5e9] transition-all duration-300 hover:shadow-lg hover:shadow-[#fa7210]/15 hover:-translate-y-2">
                <div className="aspect-[16/9] overflow-hidden rounded-tr-lg">
                  <img src="/cardda-landing/dashboard.jpg" alt="Reportes en Tiempo Real" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Reportes en Tiempo Real</h3>
                  <p className="text-[#38424e]">Accede a dashboards y reportes detallados del estado de todos los reembolsos.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#fa7210] text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">¡Prueba Cardda Hoy!</h2>
            <p className="text-xl mb-8">Simplifica tus reembolsos y enfócate en lo que importa.</p>
            <a href="https://www.cardda.com/onboarding" className="inline-block bg-white text-[#fa7210] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Crear Cuenta
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-[#151515] py-12 border-t border-[#38424e] text-gray-400 text-sm">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Cardda Chile SpA. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}