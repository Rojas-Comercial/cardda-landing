import React, { useState } from 'react';
import { Check, CreditCard, Building2, Zap, Clock } from 'lucide-react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { motion } from 'framer-motion';
export function PricingSection() {
  const [activeTab, setActiveTab] = useState<'cards' | 'operations'>('cards');
  return <section className="py-24 bg-[#f9fafc]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#151515] mb-4">
            Precios transparentes y escalables
          </h2>
          <p className="text-[#38424e] max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tu etapa de crecimiento. Sin
            sorpresas, sin letra chica.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-xl p-1 shadow-sm border border-gray-200">
            <button onClick={() => setActiveTab('cards')} className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center space-x-2 ${activeTab === 'cards' ? 'bg-[#fa7210] text-white shadow-md' : 'text-[#38424e] hover:bg-gray-50'}`}>
              <CreditCard className="w-4 h-4" />
              <span>Tarjetas Corporativas</span>
            </button>
            <button onClick={() => setActiveTab('operations')} className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center space-x-2 ${activeTab === 'operations' ? 'bg-[#fa7210] text-white shadow-md' : 'text-[#38424e] hover:bg-gray-50'}`}>
              <Building2 className="w-4 h-4" />
              <span>Tesorería y Conciliación</span>
            </button>
          </div>
        </div>

        {/* Cards Pricing */}
        {activeTab === 'cards' && <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.4
      }}>
            <div className="max-w-4xl mx-auto mb-8">
              <Card className="border-[#fa7210]/20">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-2 bg-[#fa7210]/10 text-[#fa7210] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <CreditCard className="w-4 h-4" />
                    <span>Ideal para gestión de gastos y rendiciones</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#151515] mb-2">
                    Tarjetas Corporativas
                  </h3>
                  <p className="text-[#38424e]">
                    Control total sobre los gastos de tu equipo
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Monthly Fee */}
                  <div className="bg-[#f9fafc] p-6 rounded-xl border border-gray-200">
                    <div className="text-sm text-[#38424e] mb-2 font-semibold">
                      Costo Mensual
                    </div>
                    <div className="text-3xl font-bold text-[#151515] mb-2">
                      0,4 UF{' '}
                      <span className="text-base font-normal text-[#38424e]">
                        / mes por tarjeta
                      </span>
                    </div>
                    <div className="inline-flex items-center space-x-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                      <Zap className="w-3 h-3" />
                      <span>Gratis (0 UF) si gastas +$4M al mes</span>
                    </div>
                    <p className="text-xs text-[#38424e] mt-3">
                      Solo se cobra si la tarjeta tuvo movimientos en los
                      últimos 6 meses
                    </p>
                  </div>

                  {/* Issuance Fee */}
                  <div className="bg-[#f9fafc] p-6 rounded-xl border border-gray-200">
                    <div className="text-sm text-[#38424e] mb-2 font-semibold">
                      Costo de Emisión
                    </div>
                    <div className="text-3xl font-bold text-[#151515] mb-2">
                      $0{' '}
                      <span className="text-base font-normal text-[#38424e]">
                        tarjetas virtuales
                      </span>
                    </div>
                    <div className="text-sm text-[#38424e]">
                      $10.000 CLP por tarjeta física (emisión + envío)
                    </div>
                  </div>
                </div>

                {/* Usage Fees */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
                  <div className="text-sm text-[#38424e] mb-4 font-semibold">
                    Comisión por Uso
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center justify-between p-4 bg-[#f9fafc] rounded-lg">
                      <div>
                        <div className="font-bold text-[#151515]">
                          Tarjetas Virtuales
                        </div>
                        <div className="text-xs text-[#38424e]">
                          Compras online y suscripciones
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-[#fa7210]">
                        1%
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-[#f9fafc] rounded-lg">
                      <div>
                        <div className="font-bold text-[#151515]">
                          Tarjetas Físicas
                        </div>
                        <div className="text-xs text-[#38424e]">
                          Compras presenciales y online
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-[#fa7210]">
                        2%
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-[#38424e] mt-4 text-center">
                    * Descuentos disponibles para volúmenes sobre USD $20.000
                  </p>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#fa7210] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#151515]">
                        Límites configurables
                      </div>
                      <div className="text-sm text-[#38424e]">
                        Por transacción, diarios o mensuales
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#fa7210] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#151515]">
                        Tarjetas ilimitadas
                      </div>
                      <div className="text-sm text-[#38424e]">
                        Virtuales sin costo de emisión
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#fa7210] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#151515]">
                        Control en tiempo real
                      </div>
                      <div className="text-sm text-[#38424e]">
                        Congela o activa tarjetas al instante
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#fa7210] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#151515]">
                        Rendiciones automáticas
                      </div>
                      <div className="text-sm text-[#38424e]">
                        Integración con contabilidad
                      </div>
                    </div>
                  </div>
                </div>

                <Button variant="primary" className="w-full" size="lg">
                  Comenzar Prueba Gratis
                </Button>
              </Card>
            </div>
          </motion.div>}

        {/* Operations Pricing */}
        {activeTab === 'operations' && <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.4
      }}>
            <div className="max-w-4xl mx-auto">
              <Card className="border-[#38424e]/20 mb-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-2 bg-[#38424e]/10 text-[#38424e] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <Building2 className="w-4 h-4" />
                    <span>
                      Para equipos de finanzas que buscan automatización total
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#151515] mb-2">
                    Tesorería y Conciliación
                  </h3>
                  <p className="text-[#38424e]">
                    Automatiza pagos masivos y conciliación bancaria
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#fa7210]/5 to-[#38424e]/5 p-8 rounded-xl border border-[#fa7210]/20 mb-8">
                  <div className="text-center mb-6">
                    <div className="text-sm text-[#38424e] mb-2 font-semibold">
                      Plan Base
                    </div>
                    <div className="text-4xl font-bold text-[#151515]">
                      Desde 2 UF{' '}
                      <span className="text-lg font-normal text-[#38424e]">
                        / mes
                      </span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Transfers Module */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200">
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="w-10 h-10 bg-[#fa7210]/10 rounded-lg flex items-center justify-center">
                          <Building2 className="w-5 h-5 text-[#fa7210]" />
                        </div>
                        <div>
                          <div className="font-bold text-[#151515]">
                            Módulo Transferencias
                          </div>
                          <div className="text-xs text-[#38424e]">
                            Incluido en plan base
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm text-[#38424e]">
                          <Check className="w-4 h-4 text-[#fa7210] mr-2 flex-shrink-0" />
                          Pagos masivos automatizados
                        </li>
                        <li className="flex items-center text-sm text-[#38424e]">
                          <Check className="w-4 h-4 text-[#fa7210] mr-2 flex-shrink-0" />
                          Gestión de cuentas por pagar
                        </li>
                        <li className="flex items-center text-sm text-[#38424e]">
                          <Check className="w-4 h-4 text-[#fa7210] mr-2 flex-shrink-0" />
                          Flujos de aprobación
                        </li>
                      </ul>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="text-xs text-[#38424e]">
                          Costo por transacción:
                        </div>
                        <div className="text-sm font-bold text-[#151515]">
                          1% con tope según volumen
                        </div>
                      </div>
                    </div>

                    {/* Conciliation Module */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200">
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="w-10 h-10 bg-[#38424e]/10 rounded-lg flex items-center justify-center">
                          <Clock className="w-5 h-5 text-[#38424e]" />
                        </div>
                        <div>
                          <div className="font-bold text-[#151515]">
                            Módulo Conciliación
                          </div>
                          <div className="text-xs text-[#38424e]">
                            Incluido en plan base
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm text-[#38424e]">
                          <Check className="w-4 h-4 text-[#fa7210] mr-2 flex-shrink-0" />
                          Conexión bancaria automática
                        </li>
                        <li className="flex items-center text-sm text-[#38424e]">
                          <Check className="w-4 h-4 text-[#fa7210] mr-2 flex-shrink-0" />
                          Actualización cada 1 hora
                        </li>
                        <li className="flex items-center text-sm text-[#38424e]">
                          <Check className="w-4 h-4 text-[#fa7210] mr-2 flex-shrink-0" />
                          Conciliación automática
                        </li>
                      </ul>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="text-xs text-[#38424e]">
                          Costo por movimiento:
                        </div>
                        <div className="text-sm font-bold text-[#151515]">
                          $20 CLP
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Premium Add-ons */}
                <div className="bg-[#f9fafc] p-6 rounded-xl border border-gray-200 mb-8">
                  <h4 className="font-bold text-[#151515] mb-4 flex items-center">
                    <Zap className="w-5 h-5 text-[#fa7210] mr-2" />
                    Upgrades Disponibles
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                      <div>
                        <div className="font-semibold text-[#151515]">
                          Conciliación en Tiempo Real
                        </div>
                        <div className="text-sm text-[#38424e]">
                          Actualización cada 10-20 minutos
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-[#fa7210]">
                          Desde 3-4 UF/mes
                        </div>
                        <div className="text-xs text-[#38424e]">
                          + $35-$50 por movimiento
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                      <div>
                        <div className="font-semibold text-[#151515]">
                          Lector de Token Físico
                        </div>
                        <div className="text-sm text-[#38424e]">
                          Para mayor seguridad bancaria
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-[#fa7210]">
                          2 UF/mes
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button variant="primary" className="w-full" size="lg">
                  Hablar con Ventas
                </Button>
              </Card>
            </div>
          </motion.div>}

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#38424e] bg-white inline-block px-6 py-3 rounded-full border border-gray-200 shadow-sm">
            <span className="font-semibold text-[#151515]">Nota:</span> Precios
            en UF + IVA. Contratos de operaciones anuales. Descuentos por
            volumen disponibles para transacciones sobre USD $20k.
          </p>
        </div>
      </div>
    </section>;
}