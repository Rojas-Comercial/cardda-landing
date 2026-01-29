import { motion } from 'framer-motion';
import { Play, Building2, TrendingUp, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Datos de casos de éxito con videos
const successCases = [
  {
    name: 'Kaufmann',
    industry: 'Retail Automotriz',
    description: 'Kaufmann automatizó sus pagos con tarjetas corporativas, reduciendo tiempos de gestión y mejorando el control de gastos.',
    videoUrl: 'https://youtu.be/OIyeo5yqw78?si=jQqTlgL_uUPyRyPF',
    logo: '/cardda-landing/logos/kaufmann.png',
    quote: '"Con Cardda simplificamos todos nuestros procesos de pago"'
  },
  {
    name: 'Punto Ticket',
    industry: 'Entretenimiento',
    description: 'Punto Ticket optimizó la gestión de pagos a proveedores y reembolsos para sus eventos masivos.',
    videoUrl: 'https://youtu.be/PLJxPrZUcyQ?si=dFceRpCPf3UobPQK',
    logo: '/cardda-landing/logos/punto-ticket.png',
    quote: '"Cardda nos permite escalar sin perder el control"'
  },
  {
    name: 'AFP Uno',
    industry: 'Servicios Financieros',
    description: 'AFP Uno implementó transferencias automatizadas para sus operaciones de pago masivo.',
    videoUrl: 'https://youtu.be/PkceJaXdJ38?si=XWd3Lflqi_1eQad8',
    logo: '/cardda-landing/logos/afp-uno.png',
    quote: '"La automatización de Cardda transformó nuestra operación"'
  }
];

// Clientes destacados por categoría
const clientCategories = [
  {
    title: 'Empresas Líderes',
    clients: ['Sky Airlines', 'Samsonite', 'Kaufmann', 'NotCo', 'Fintual', 'Universidad de Chile']
  },
  {
    title: 'Administradoras de Fondos',
    clients: ['Ameris', 'FYNSA', 'Vantrust', 'Volcom Capital', 'Picton', 'Frontal Trust']
  },
  {
    title: 'Entretenimiento y Eventos',
    clients: ['Punto Ticket', 'Zapping']
  },
  {
    title: 'AFPs',
    clients: ['AFP Uno', 'AFP Plan Vital', 'AFP Modelo']
  }
];

// Métricas
const metrics = [
  { value: '+350', label: 'Empresas activas', icon: Building2 },
  { value: '3', label: 'Países', icon: TrendingUp },
  { value: '+150k', label: 'Usuarios', icon: Users },
  { value: 'Y Combinator', label: 'Backed by', icon: Award }
];

export function ClientsPage() {
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#151515]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
          <Link to="/">
            <img src="/cardda-landing/logo.svg" alt="Cardda" className="h-12" />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-[#38424e] hover:text-[#151515] transition-colors text-sm font-medium">
              Inicio
            </Link>
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
            <Link to="/clientes" className="text-[#151515] font-semibold text-sm">
              Clientes
            </Link>
            <Link to="/precios" className="text-[#38424e] hover:text-[#151515] transition-colors text-sm font-medium">
              Precios
            </Link>
            <Link to="/blog" className="text-[#38424e] hover:text-[#151515] transition-colors text-sm font-medium">
              Blog
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Empresas que confían en Cardda
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#38424e] max-w-2xl mx-auto"
          >
            Más de 350 empresas en Chile, México y Perú usan Cardda para gestionar sus pagos con seguridad y rapidez.
          </motion.p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <metric.icon className="w-8 h-8 mx-auto mb-3 text-[#fa7210]" />
                <div className="text-3xl font-bold text-[#151515]">{metric.value}</div>
                <div className="text-sm text-[#38424e]">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Cases with Videos */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Casos de Éxito</h2>
          <p className="text-center text-[#38424e] mb-12 max-w-2xl mx-auto">
            Descubre cómo empresas líderes han transformado su gestión de pagos con Cardda
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {successCases.map((case_, index) => (
              <motion.div
                key={case_.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Video Thumbnail */}
                <a
                  href={case_.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-video flex items-center justify-center group"
                  style={{ backgroundImage: `url(https://img.youtube.com/vi/${case_.videoUrl.split('/').pop().split('?')[0]}/maxresdefault.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-[#fa7210] ml-1" fill="currentColor" />
                  </div>
                  <span className="absolute bottom-4 left-4 text-white font-semibold text-lg z-10">
                    Ver caso de éxito
                  </span>
                </a>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-[#38424e]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{case_.name}</h3>
                      <p className="text-sm text-[#38424e]">{case_.industry}</p>
                    </div>
                  </div>
                  <p className="text-[#38424e] text-sm mb-4">{case_.description}</p>
                  <blockquote className="text-sm italic text-[#151515] border-l-2 border-[#fa7210] pl-4">
                    {case_.quote}
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Clientes por Industria</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {clientCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <h3 className="font-semibold text-lg mb-4 text-[#fa7210]">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.clients.map((client) => (
                    <span
                      key={client}
                      className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-[#38424e]"
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#151515] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Únete a las empresas que ya usan Cardda</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Agenda una reunión y descubre cómo podemos ayudarte a optimizar tus pagos
          </p>
          <a
            href="https://meetings.hubspot.com/arturo-hobaica/arturocardda?uuid=321bfd66-4234-492f-978b-1b5d493726eb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#fa7210] text-white font-semibold rounded-lg hover:bg-[#e86609] transition-colors"
          >
            Agendar Reunión
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#151515] py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>&copy; 2024 Cardda Chile SpA. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}