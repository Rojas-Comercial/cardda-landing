import React from 'react';
import { motion } from 'framer-motion';
import {
  Link,
  Upload,
  CheckCircle,
  FileCheck,
  Banknote,
  Smartphone,
  Building2,
  Users,
  Shield,
  Zap,
  Receipt,
  ArrowRight
} from 'lucide-react';

const steps = [
  {
    icon: Link,
    title: 'Genera el link',
    desc: 'Crea un enlace único para cada colaborador o uno genérico para solicitudes puntuales'
  },
  {
    icon: Upload,
    title: 'Colaborador sube boleta',
    desc: 'Desde el celular, fotografía la boleta y completa sus datos bancarios'
  },
  {
    icon: FileCheck,
    title: 'Validación automática',
    desc: 'OCR extrae los datos y valida la boleta con el SII en tiempo real'
  },
  {
    icon: Banknote,
    title: 'Aprobación y pago',
    desc: 'El reembolso aparece en cuentas por pagar. Un clic para aprobar y pagar'
  }
];

const benefitsCompany = [
  { icon: Receipt, text: 'Cero papeleo ni Excel' },
  { icon: Shield, text: 'Boletas validadas con SII' },
  { icon: Building2, text: 'Control centralizado' },
  { icon: Zap, text: 'Pagos automáticos' }
];

const benefitsEmployee = [
  { icon: Smartphone, text: 'Proceso de 2 minutos' },
  { icon: FileCheck, text: 'Sin guardar boletas' },
  { icon: Banknote, text: 'Reembolso rápido' },
  { icon: CheckCircle, text: 'Transparencia total' }
];

export function ReimbursementFlow() {
  return (
    <section className="py-24 bg-[#151515] text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-[#38424e]/30 rounded-full px-4 py-2 mb-6 border border-[#38424e]"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#fa7210] animate-pulse"></span>
            <span className="text-sm font-medium text-gray-300">Nuevo módulo</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Reembolsos sin fricciones para tus{' '}
            <span className="text-[#fa7210]">colaboradores</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            De la boleta al pago en minutos, no en semanas. Olvídate de las planillas de rendición y los correos perdidos.
          </motion.p>
        </div>

        {/* Steps Flow */}
        <div className="relative mb-24">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-[#38424e] z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="w-24 h-24 rounded-full bg-[#38424e] border-4 border-[#fa7210] flex items-center justify-center mb-6 shadow-lg shadow-[#fa7210]/20 relative">
                  <step.icon className="w-10 h-10 text-[#fa7210]" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#fa7210] flex items-center justify-center font-bold text-white text-sm border-2 border-[#151515]">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Feature Section with Mockup */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              Un link, cero complicaciones
            </h3>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              Cuando un empleado hace un gasto con su propio dinero, ya no necesita guardar boletas ni llenar planillas Excel. Con un simple link puede solicitar su reembolso en minutos.
            </p>

            <div className="space-y-4">
              {[
                { icon: Link, title: 'Link único de solicitud', desc: 'Cada colaborador recibe su link personal o generas uno por solicitud' },
                { icon: Upload, title: 'Sube la boleta desde el celular', desc: 'Foto del documento, OCR extrae los datos automáticamente' },
                { icon: FileCheck, title: 'Validación automática con SII', desc: 'Verificamos que la boleta sea válida en tiempo real' },
                { icon: Banknote, title: 'Pago directo a su cuenta', desc: 'El reembolso se integra a cuentas por pagar y se deposita automáticamente' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#fa7210]/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#fa7210]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Phone Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[#1a1a1a] rounded-3xl p-6 border border-[#38424e] shadow-2xl max-w-sm mx-auto">
              {/* Phone Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#fa7210] flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Solicitud de reembolso</p>
                  <p className="text-sm text-gray-500">cardda.com/r/juan-perez</p>
                </div>
              </div>

              {/* Form Content */}
              <div className="space-y-4">
                {/* Upload Area */}
                <div className="border-2 border-dashed border-[#38424e] rounded-xl p-6 text-center hover:border-[#fa7210]/50 transition-colors">
                  <Upload className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm font-medium">Arrastra tu boleta aquí</p>
                  <p className="text-gray-500 text-xs">o haz clic para seleccionar</p>
                </div>

                {/* Validation Success */}
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="font-medium text-green-400 text-sm">Boleta validada en SII</p>
                      <p className="text-xs text-green-500/70">Folio: 12345 - $45.000</p>
                    </div>
                  </div>
                </div>

                {/* Bank Data */}
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-2">Datos bancarios</label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-[#38424e]/30 rounded-lg p-3">
                      <p className="text-gray-500 text-xs">Banco</p>
                      <p className="text-white text-sm font-medium">Banco Estado</p>
                    </div>
                    <div className="bg-[#38424e]/30 rounded-lg p-3">
                      <p className="text-gray-500 text-xs">Cuenta</p>
                      <p className="text-white text-sm font-medium">****4521</p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button className="w-full bg-[#fa7210] hover:bg-[#e56508] text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2">
                  Enviar solicitud
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-8 -right-8 w-48 h-48 bg-[#fa7210]/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-8 -left-8 w-32 h-32 bg-[#38424e]/30 rounded-full blur-3xl"></div>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Company Benefits */}
          <motion.div
            className="bg-gradient-to-br from-[#fa7210]/10 to-[#fa7210]/5 rounded-2xl p-8 border border-[#fa7210]/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#fa7210] flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Para la empresa</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {benefitsCompany.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-[#1a1a1a] rounded-xl p-4">
                  <benefit.icon className="w-5 h-5 text-[#fa7210]" />
                  <span className="text-sm font-medium text-white">{benefit.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Employee Benefits */}
          <motion.div
            className="bg-gradient-to-br from-[#38424e]/30 to-[#38424e]/10 rounded-2xl p-8 border border-[#38424e]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#38424e] flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Para el colaborador</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {benefitsEmployee.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-[#1a1a1a] rounded-xl p-4">
                  <benefit.icon className="w-5 h-5 text-gray-400" />
                  <span className="text-sm font-medium text-white">{benefit.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
