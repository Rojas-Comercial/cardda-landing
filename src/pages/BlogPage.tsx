import React from 'react';

export function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-[#151515] pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Blog de Cardda</h1>
        <p className="text-center text-lg mb-8">
          Descubre las últimas noticias, consejos y actualizaciones sobre gestión de gastos y finanzas empresariales.
        </p>
        <div className="text-center">
          <a
            href="https://blog.cardda.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg h-12 px-6 text-base bg-[#fa7210] text-white hover:bg-[#e86609] focus:ring-[#fa7210] shadow-lg shadow-[#fa7210]/20"
          >
            Visitar Blog de Cardda
          </a>
        </div>
        <div className="text-center mt-8">
          <a href="/" className="text-[#fa7210] hover:underline">Volver al inicio</a>
        </div>
      </div>
    </div>
  );
}