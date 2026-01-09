import React from 'react';
import { motion } from 'framer-motion';
import { FileX, AlertCircle, Clock } from 'lucide-react';
export function ProblemSection() {
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 className="text-3xl sm:text-4xl font-bold text-[#151515] mb-6" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
            ¿Tu equipo de finanzas sigue persiguiendo boletas a fin de mes?
          </motion.h2>
          <p className="text-lg text-[#38424e]">
            La gestión manual de gastos frena el crecimiento de tu empresa y
            genera estrés innecesario.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Visual Representation of Chaos */}
          <motion.div className="relative bg-[#f9fafc] rounded-2xl shadow-lg p-8 border border-gray-200" initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <div className="absolute -top-4 -left-4 bg-red-100 text-red-600 p-3 rounded-full shadow-md">
              <AlertCircle className="w-6 h-6" />
            </div>

            <div className="space-y-4">
              {/* Fake Spreadsheet Rows */}
              <div className="flex items-center space-x-4 p-3 bg-red-50 rounded border border-red-100">
                <FileX className="w-5 h-5 text-red-500 flex-shrink-0" />
                <div className="flex-1">
                  <div className="h-2 w-3/4 bg-red-200 rounded mb-2"></div>
                  <div className="h-2 w-1/2 bg-red-100 rounded"></div>
                </div>
                <span className="text-xs font-bold text-red-600">
                  Falta Boleta
                </span>
              </div>

              <div className="flex items-center space-x-4 p-3 bg-[#f9fafc] rounded border border-gray-200 opacity-60">
                <Clock className="w-5 h-5 text-[#38424e] flex-shrink-0" />
                <div className="flex-1">
                  <div className="h-2 w-2/3 bg-gray-200 rounded mb-2"></div>
                  <div className="h-2 w-1/3 bg-gray-100 rounded"></div>
                </div>
                <span className="text-xs font-bold text-[#38424e]">
                  Pendiente
                </span>
              </div>

              <div className="flex items-center space-x-4 p-3 bg-[#f9fafc] rounded border border-gray-200 opacity-60">
                <div className="w-5 h-5 rounded-full bg-gray-200 flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="h-2 w-4/5 bg-gray-200 rounded mb-2"></div>
                  <div className="h-2 w-1/4 bg-gray-100 rounded"></div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm font-medium text-[#38424e] italic">
                "¿Quién tiene la tarjeta corporativa?"
              </p>
            </div>
          </motion.div>

          {/* Pain Points List */}
          <div className="space-y-8">
            {[{
            title: 'Pérdida de tiempo valioso',
            desc: 'Horas perdidas recolectando recibos físicos y cuadrando planillas Excel manualmente.'
          }, {
            title: 'Sin visibilidad en tiempo real',
            desc: 'No sabes cuánto se ha gastado hasta que llega el estado de cuenta a fin de mes.'
          }, {
            title: 'Riesgo de fraude y errores',
            desc: 'Compartir tarjetas de crédito y claves aumenta el riesgo de gastos no autorizados.'
          }].map((point, index) => <motion.div key={index} className="flex items-start space-x-4" initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }}>
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 font-bold text-sm">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#151515] mb-1">
                    {point.title}
                  </h3>
                  <p className="text-[#38424e] leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}