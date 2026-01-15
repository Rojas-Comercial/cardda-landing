import { Link } from 'react-router-dom';

export function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-[#151515] pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Blog de Cardda</h1>
        <p className="text-center text-lg mb-8">
          Descubre las últimas noticias, consejos y actualizaciones sobre gestión de gastos y finanzas empresariales.
        </p>
        
        {/* Featured Article */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">Artículo Destacado</h2>
          <a
            href="https://test-cardda.ghost.io/comparativa-2026-las-mejores-herramientas-de-gestion-de-reembolsos-en-chile/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fa7210] hover:text-[#e86609] text-lg underline"
          >
            Comparativa 2026: Las mejores herramientas de gestión de reembolsos en Chile
          </a>
        </div>
        
        <div className="text-center">
          <a
            href="https://blog.cardda.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg h-12 px-6 text-base bg-[#fa7210] text-white hover:bg-[#e86609] focus:ring-[#fa7210] shadow-lg shadow-[#fa7210]/20"
          >
            Ver más contenido en el blog
          </a>
        </div>
        <div className="text-center mt-8">
          <Link to="/" className="text-[#fa7210] hover:underline">Volver al inicio</Link>
        </div>
      </div>
    </div>
  );
}