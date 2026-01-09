import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock } from 'lucide-react';
const erps = ['Defontana', 'Softland', 'Nubox', 'SAP'];
export function IntegrationsSection() {
  return <section className="py-20 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#151515] mb-4">
            Se conecta con tu contabilidad actual
          </h2>
          <p className="text-[#38424e]">
            Sincronización automática para mantener tus libros al día.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {erps.map((erp, index) => <motion.div key={index} className="bg-[#f9fafc] px-8 py-6 rounded-xl shadow-sm border border-gray-200 flex items-center justify-center min-w-[160px]" initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }}>
              <span className="text-xl font-bold text-[#38424e]">{erp}</span>
            </motion.div>)}
        </div>

        <div className="max-w-2xl mx-auto bg-[#f9fafc] rounded-lg p-6 border border-gray-200 flex items-center justify-center space-x-4 shadow-sm">
          <div className="bg-green-100 p-2 rounded-full">
            <Shield className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h4 className="font-bold text-[#151515] flex items-center">
              Seguridad bancaria de nivel empresarial
              <Lock className="w-4 h-4 ml-2 text-[#38424e]" />
            </h4>
            <p className="text-sm text-[#38424e]">
              Tus datos están encriptados y protegidos bajo los más altos
              estándares.
            </p>
          </div>
        </div>
      </div>
    </section>;
}