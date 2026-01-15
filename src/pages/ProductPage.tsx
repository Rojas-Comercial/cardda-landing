import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CreditCard,
  FileText,
  Receipt,
  ArrowLeftRight,
  CheckCircle,
  Shield,
  Zap,
  Building2,
  Globe,
  Smartphone,
  Users,
  Clock,
  TrendingUp,
  Lock,
  Server,
  Headphones,
  ChevronRight,
  ExternalLink,
  DollarSign,
  FileCheck,
  Banknote,
  Upload,
  Link as LinkIcon
} from 'lucide-react';

const products = [
  {
    id: 'tarjetas',
    name: 'Tarjetas Corporativas',
    icon: CreditCard,
    tagline: 'Mastercard prepago para tu equipo',
    description: 'Tarjetas Mastercard prepago en CLP y USD para gastos corporativos. Control total, límites personalizados y visibilidad en tiempo real.',
    features: [
      { icon: Globe, title: 'Mastercard Internacional', desc: 'Aceptadas en millones de comercios en todo el mundo' },
      { icon: DollarSign, title: 'CLP y USD', desc: 'Elige la moneda que mejor se adapte a tus necesidades' },
      { icon: Shield, title: 'Límites personalizados', desc: 'Define límites por tarjeta, categoría o período' },
      { icon: Zap, title: 'Recarga instantánea', desc: 'Fondea tus tarjetas en segundos desde la plataforma' },
      { icon: Receipt, title: 'Comprobantes automáticos', desc: 'Asocia boletas y facturas a cada transacción' },
      { icon: Lock, title: 'Bloqueo inmediato', desc: 'Congela o cancela tarjetas con un clic' }
    ],
    useCases: [
      'Viajes de negocios',
      'Suscripciones SaaS',
      'Marketing digital',
      'Compras de oficina'
    ],
    pricing: '1% por transacción',
    color: '#fa7210'
  },
  {
    id: 'cuentas',
    name: 'Cuentas por Pagar',
    icon: FileText,
    tagline: 'Centraliza y automatiza tus pagos a proveedores',
    description: 'Gestiona todas tus facturas en un solo lugar. Sincronización automática con el SII, flujos de aprobación y pagos masivos.',
    features: [
      { icon: FileCheck, title: 'Sincronización SII', desc: 'Tus facturas recibidas se importan automáticamente' },
      { icon: Users, title: 'Flujos de aprobación', desc: 'Define quién aprueba qué según montos y categorías' },
      { icon: Banknote, title: 'Pagos masivos', desc: 'Paga múltiples facturas en una sola operación' },
      { icon: Clock, title: 'Programación de pagos', desc: 'Agenda pagos para fechas específicas' },
      { icon: TrendingUp, title: 'Reportes en tiempo real', desc: 'Visibilidad completa de tu flujo de caja' },
      { icon: Building2, title: 'Multi-empresa', desc: 'Gestiona varias empresas desde una sola cuenta' }
    ],
    useCases: [
      'Pago a proveedores',
      'Gestión de facturas',
      'Control de flujo de caja',
      'Auditoría y compliance'
    ],
    pricing: 'Desde 2 UF/mes',
    color: '#38424e'
  },
  {
    id: 'reembolsos',
    name: 'Reembolsos',
    icon: Receipt,
    tagline: 'De la boleta al pago en minutos',
    description: 'Tus colaboradores solicitan reembolsos con un simple link. OCR extrae los datos, validamos con el SII y el pago se procesa automáticamente.',
    features: [
      { icon: LinkIcon, title: 'Link único de solicitud', desc: 'Cada colaborador recibe su link personal' },
      { icon: Upload, title: 'Captura desde el celular', desc: 'Foto de la boleta, OCR extrae los datos' },
      { icon: Shield, title: 'Validación SII', desc: 'Verificamos autenticidad en tiempo real' },
      { icon: Banknote, title: 'Pago automático', desc: 'Deposita directo a la cuenta del colaborador' },
      { icon: FileText, title: 'Cero papeleo', desc: 'Olvídate de planillas Excel y correos' },
      { icon: CheckCircle, title: 'Trazabilidad completa', desc: 'Historial de cada solicitud y su estado' }
    ],
    useCases: [
      'Gastos de representación',
      'Viáticos',
      'Compras menores',
      'Eventos y capacitaciones'
    ],
    pricing: 'Incluido en planes',
    color: '#fa7210'
  },
  {
    id: 'transferencias',
    name: 'Transferencias',
    icon: ArrowLeftRight,
    tagline: 'Pagos a todos los bancos de Chile',
    description: 'Realiza transferencias a cualquier banco chileno. Automatización con Token Reader para operaciones sin intervención manual.',
    features: [
      { icon: Building2, title: 'Todos los bancos', desc: 'Conectamos con todas las instituciones financieras de Chile' },
      { icon: Zap, title: 'Token Reader', desc: 'Automatiza la autorización de transferencias' },
      { icon: Users, title: 'Pagos masivos', desc: 'Procesa cientos de transferencias en minutos' },
      { icon: Shield, title: 'Doble validación', desc: 'Seguridad bancaria en cada operación' },
      { icon: Clock, title: 'Tiempo real', desc: 'Confirmación instantánea de cada transferencia' },
      { icon: FileText, title: 'Comprobantes automáticos', desc: 'Registro y respaldo de cada operación' }
    ],
    useCases: [
      'Pago de nómina',
      'Remuneraciones',
      'Pagos a proveedores',
      'Devoluciones'
    ],
    pricing: '$350 + IVA por transferencia',
    color: '#38424e'
  }
];

const integrations = [
  { name: 'SII', desc: 'Sincronización de facturas y boletas', icon: FileCheck },
  { name: 'Bancos', desc: 'Todos los bancos de Chile', icon: Building2 },
  { name: 'ERPs', desc: 'SAP, Oracle, Softland y más', icon: Server },
  { name: 'API REST', desc: 'Integración personalizada', icon: Globe }
];

export function ProductPage() {
  const [activeProduct, setActiveProduct] = useState('tarjetas');
  const currentProduct = products.find(p => p.id === activeProduct)!;

  return (
    <div className="min-h-screen bg-white text-[#151515]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
          <Link to="/">
            <img src="/cardda-landing/logo.svg" alt="Cardda" className="h-18" />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/producto" className="text-[#fa7210] font-medium text-sm">
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
            <a href="https://www.cardda.com/login" className="text-[#38424e] hover:text-[#151515] text-sm font-medium">
              Ingresar
            </a>
            <a href="https://www.cardda.com/onboarding" className="bg-[#fa7210] text-white hover:bg-[#e86609] px-4 py-2 rounded-lg text-sm font-medium">
              Crear Cuenta
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-[#fa7210]/10 rounded-full px-4 py-2 mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#fa7210] animate-pulse"></span>
            <span className="text-sm font-medium text-[#fa7210]">Plataforma completa</span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Todo lo que necesitas para{' '}
            <span className="text-[#fa7210]">gestionar tus gastos</span>
          </motion.h1>

          <motion.p
            className="text-xl text-[#38424e] max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Tarjetas corporativas, cuentas por pagar, reembolsos y transferencias.
            Una plataforma, control total.
          </motion.p>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-8 border-b border-gray-200 sticky top-20 bg-white z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 pb-2 -mb-2 scrollbar-hide">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(product.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                  activeProduct === product.id
                    ? 'bg-[#fa7210] text-white shadow-lg shadow-[#fa7210]/20'
                    : 'bg-gray-100 text-[#38424e] hover:bg-gray-200'
                }`}
              >
                <product.icon className="w-4 h-4" />
                {product.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={activeProduct}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Product Header */}
            <div className="text-center mb-16">
              <div
                className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                style={{ backgroundColor: `${currentProduct.color}20` }}
              >
                <currentProduct.icon
                  className="w-10 h-10"
                  style={{ color: currentProduct.color }}
                />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">{currentProduct.name}</h2>
              <p className="text-xl text-[#38424e] mb-2">{currentProduct.tagline}</p>
              <p className="text-[#38424e] max-w-2xl mx-auto">{currentProduct.description}</p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {currentProduct.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                    style={{ backgroundColor: `${currentProduct.color}15` }}
                  >
                    <feature.icon
                      className="w-6 h-6"
                      style={{ color: currentProduct.color }}
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-[#38424e] text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Use Cases & Pricing */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#151515] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Casos de uso</h3>
                <div className="space-y-3">
                  {currentProduct.useCases.map((useCase, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#fa7210]" />
                      <span>{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#fa7210] to-[#e86609] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Precio</h3>
                <p className="text-3xl font-bold mb-4">{currentProduct.pricing}</p>
                <p className="text-white/80 mb-6">Sin costos ocultos. Cancela cuando quieras.</p>
                <a
                  href="https://meetings.hubspot.com/arturo-hobaica/arturocardda?uuid=321bfd66-4234-492f-978b-1b5d493726eb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#fa7210] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Agendar reunión
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Integraciones</h2>
            <p className="text-[#38424e] max-w-2xl mx-auto">
              Conectamos con tus herramientas existentes para una experiencia sin fricciones
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-[#fa7210]/10 mx-auto mb-4 flex items-center justify-center">
                  <integration.icon className="w-7 h-7 text-[#fa7210]" />
                </div>
                <h3 className="font-bold mb-1">{integration.name}</h3>
                <p className="text-sm text-[#38424e]">{integration.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Support */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-green-100 mx-auto mb-4 flex items-center justify-center">
                <Server className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">99.9% Uptime</h3>
              <p className="text-[#38424e]">Infraestructura de alta disponibilidad para tu tranquilidad</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 mx-auto mb-4 flex items-center justify-center">
                <Lock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">Encriptación bancaria</h3>
              <p className="text-[#38424e]">Tus datos protegidos con los más altos estándares de seguridad</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 mx-auto mb-4 flex items-center justify-center">
                <Headphones className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">Soporte ≤12h</h3>
              <p className="text-[#38424e]">Respuesta garantizada en menos de 12 horas hábiles</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#151515]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            ¿Listo para simplificar tus finanzas?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Únete a más de 350 empresas que ya confían en Cardda para gestionar sus gastos corporativos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.cardda.com/onboarding"
              className="inline-flex items-center justify-center gap-2 bg-[#fa7210] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#e86609] transition-colors"
            >
              Crear cuenta gratis
              <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href="https://meetings.hubspot.com/arturo-hobaica/arturocardda?uuid=321bfd66-4234-492f-978b-1b5d493726eb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              Agendar reunión
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#151515] py-12 border-t border-[#38424e] text-gray-400 text-sm">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Cardda Chile SpA. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
