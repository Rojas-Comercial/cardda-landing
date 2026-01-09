import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CreditCard, TrendingUp, DollarSign } from 'lucide-react';
import { Button } from './ui/Button';
export function Hero() {
  return <section className="relative overflow-hidden bg-[#151515] pt-20 pb-24 lg:pt-32 lg:pb-40">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#fa7210]/10 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#38424e]/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }}>
              <div className="inline-flex items-center space-x-2 bg-[#38424e]/30 rounded-full px-4 py-2 mb-8 border border-[#38424e] backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-[#fa7210] animate-pulse"></span>
                <span className="text-sm font-medium text-gray-300">
                  Nueva integración SII 2.0
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                El fin del caos en los{' '}
                <span className="text-[#fa7210]">gastos de tu empresa</span>.
              </h1>

              <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Plataforma financiera todo-en-uno integrada al SII. Emite
                tarjetas corporativas inteligentes, automatiza tus cuentas por
                pagar y gestiona rendiciones con un solo clic.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                <Button size="lg" icon={ArrowRight}>
                  Empezar prueba gratis
                </Button>
                <Button variant="outline" size="lg" icon={Play} className="border-[#38424e] text-gray-300 hover:bg-[#38424e]/20 hover:text-white">
                  Ver cómo funciona
                </Button>
              </div>

              <div className="border-t border-[#38424e] pt-8">
                <p className="text-sm text-gray-500 mb-4">
                  Respaldados por los mejores y usados por +500 empresas en
                  Chile
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                  <div className="h-8 flex items-center">
                    <span className="text-xl font-bold text-white tracking-tighter">
                      Y Combinator
                    </span>
                  </div>
                  <div className="h-8 flex items-center">
                    <span className="text-xl font-bold text-white tracking-tighter">
                      Platanus
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero Visual - Card + Dashboard */}
          <div className="flex-1 w-full max-w-[600px] lg:max-w-none relative">
            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="relative" style={{
            perspective: '1500px'
          }}>
              {/* Dashboard Window (Background) */}
              <motion.div className="absolute top-8 right-0 w-[85%] bg-[#f9fafc] rounded-2xl border border-gray-200 shadow-2xl overflow-hidden" initial={{
              opacity: 0,
              x: 50,
              rotateY: -15
            }} animate={{
              opacity: 1,
              x: 0,
              rotateY: 0
            }} transition={{
              duration: 0.8,
              delay: 0.4
            }}>
                {/* Window Header */}
                <div className="h-10 bg-white border-b border-gray-200 flex items-center px-4 space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="ml-4 text-xs text-[#38424e] font-medium">
                    Rendición de Gastos
                  </span>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 bg-[#f9fafc]">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="bg-white p-3 rounded-lg border border-gray-200">
                      <div className="text-xs text-[#38424e] mb-1">Gastado</div>
                      <div className="text-lg font-bold text-[#151515]">
                        $2.4M
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-gray-200">
                      <div className="text-xs text-[#38424e] mb-1">
                        Pendiente
                      </div>
                      <div className="text-lg font-bold text-[#fa7210]">
                        $450K
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-gray-200">
                      <div className="text-xs text-[#38424e] mb-1">
                        Aprobado
                      </div>
                      <div className="text-lg font-bold text-green-600">
                        $1.9M
                      </div>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-[#38424e]">
                        Gastos Mensuales
                      </span>
                      <TrendingUp className="w-4 h-4 text-[#fa7210]" />
                    </div>
                    <div className="h-24 w-full relative">
                      <svg className="w-full h-full" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#fa7210" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#fa7210" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path d="M0 80 L 60 65 L 120 70 L 180 45 L 240 50 L 300 30 L 360 35 L 400 20 L 400 96 L 0 96 Z" fill="url(#orangeGradient)" />
                        <path d="M0 80 L 60 65 L 120 70 L 180 45 L 240 50 L 300 30 L 360 35 L 400 20" stroke="#fa7210" strokeWidth="2.5" fill="none" />
                      </svg>
                    </div>
                  </div>

                  {/* Recent Transactions */}
                  <div className="space-y-2">
                    {[{
                    name: 'AWS Services',
                    amount: '$245.000',
                    icon: '☁️'
                  }, {
                    name: 'Uber Business',
                    amount: '$12.500',
                    icon: '🚗'
                  }].map((item, i) => <div key={i} className="flex items-center justify-between p-2 bg-white rounded-lg border border-gray-200">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{item.icon}</span>
                          <span className="text-xs font-medium text-[#151515]">
                            {item.name}
                          </span>
                        </div>
                        <span className="text-xs font-bold text-[#38424e]">
                          {item.amount}
                        </span>
                      </div>)}
                  </div>
                </div>
              </motion.div>

              {/* Corporate Card (Foreground) */}
              <motion.div className="relative z-10 w-[70%] aspect-[1.586/1] rounded-2xl overflow-hidden shadow-2xl" initial={{
              opacity: 0,
              x: -50,
              rotateY: 15
            }} animate={{
              opacity: 1,
              x: 0,
              rotateY: 0
            }} transition={{
              duration: 0.8,
              delay: 0.6
            }} style={{
              transformStyle: 'preserve-3d'
            }}>
                {/* Card Background with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#fa7210] via-[#ff8534] to-[#fa7210]">
                  {/* Subtle Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)',
                  backgroundSize: '30px 30px'
                }}></div>
                </div>

                {/* Card Content */}
                <div className="relative h-full p-6 flex flex-col justify-between text-white">
                  {/* Card Header */}
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-xs opacity-80 mb-1">
                        Corporate Card
                      </div>
                      <div className="text-2xl font-bold tracking-tight">
                        Cardda
                      </div>
                    </div>
                    <CreditCard className="w-8 h-8 opacity-90" />
                  </div>

                  {/* Card Number */}
                  <div className="space-y-1">
                    <div className="flex space-x-3 text-lg font-mono tracking-wider">
                      <span>••••</span>
                      <span>••••</span>
                      <span>••••</span>
                      <span className="font-bold">4829</span>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-[10px] opacity-70 mb-1">
                        CARDHOLDER
                      </div>
                      <div className="text-sm font-semibold">
                        EQUIPO MARKETING
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] opacity-70 mb-1">EXPIRES</div>
                      <div className="text-sm font-semibold">12/27</div>
                    </div>
                    <div className="w-10 h-6 bg-white/20 backdrop-blur-sm rounded flex items-center justify-center">
                      <DollarSign className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Card Shine Effect */}
                <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" animate={{
                x: ['-100%', '200%']
              }} transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: 'easeInOut'
              }} style={{
                transform: 'skewX(-20deg)'
              }} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
}