import { PricingSection } from '../components/PricingSection';
import { Link } from 'react-router-dom';

export function PricingPage() {
  return (
    <div className="min-h-screen bg-white text-[#151515]">
      <PricingSection />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="block text-center text-[#fa7210] hover:underline">Volver al inicio</Link>
      </div>
    </div>
  );
}