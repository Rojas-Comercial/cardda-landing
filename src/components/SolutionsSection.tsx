import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Receipt, Smartphone } from 'lucide-react';
import { Card } from './ui/Card';
const solutions = [{
  icon: CreditCard,
  title: 'Tarjetas Virtuales y Físicas con Límites',
  description: "Crea tarjetas ilimitadas para empleados o equipos (ej. 'Marketing'). Asigna presupuestos en tiempo real, congélalas con un clic y olvídate de compartir la tarjeta del dueño.",
  color: 'text-[#fa7210]',
  bg: 'bg-[#fa7210]/10'
}, {
  icon: Receipt,
  title: 'Gestión de Facturas y Conexión SII',
  description: 'Conexión directa al SII. Centraliza todas tus facturas de proveedores, apruébalas en equipo y programa pagos masivos sin entrar al banco.',
  color: 'text-[#38424e]',
  bg: 'bg-[#38424e]/10'
}, {
  icon: Smartphone,
  title: 'Reembolsos sin Burocracia',
  description: '¿Gastos de bolsillo? Envía un link único al colaborador. Ellos suben la foto de la boleta y sus datos bancarios, tú apruebas y pagas con un clic desde la misma plataforma.',
  color: 'text-[#fa7210]',
  bg: 'bg-[#fa7210]/10'
}];
export function SolutionsSection() {
  return <section className="py-24 bg-[#f9fafc]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span className="text-[#fa7210] font-semibold tracking-wider uppercase text-sm" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }}>
            Soluciones Integrales
          </motion.span>
          <motion.h2 className="text-3xl sm:text-4xl font-bold text-[#151515] mt-2 mb-6" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
            Todo lo que necesitas para controlar tus finanzas
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => <Card key={index} className="h-full hover:shadow-2xl transition-shadow duration-300 border-t-4 border-t-transparent hover:border-t-[#fa7210] bg-white">
              <div className={`w-14 h-14 rounded-xl ${solution.bg} flex items-center justify-center mb-6`}>
                <solution.icon className={`w-7 h-7 ${solution.color}`} />
              </div>
              <h3 className="text-xl font-bold text-[#151515] mb-4">
                {solution.title}
              </h3>
              <p className="text-[#38424e] leading-relaxed">
                {solution.description}
              </p>
            </Card>)}
        </div>
      </div>
    </section>;
}