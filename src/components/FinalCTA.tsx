import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
export function FinalCTA() {
  return <section className="py-24 bg-[#151515] relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#fa7210] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#38424e] rounded-full blur-[100px] opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
          Moderniza tu tesorería hoy
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Únete a las empresas chilenas que ya automatizaron sus finanzas. Crea
          tu cuenta en minutos, sin trámites bancarios.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" variant="primary" icon={ArrowRight}>
            Crear cuenta gratis
          </Button>
          <Button size="lg" variant="secondary">
            Hablar con ventas
          </Button>
        </div>
      </div>
    </section>;
}