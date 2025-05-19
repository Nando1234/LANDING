import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-black dark:bg-black">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/80 dark:from-black/80 dark:to-black/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat leading-tight text-white mb-6">
            Expedientes Técnicos e{' '}
            <span className="text-yellow-500">Ingeniería</span>{' '}
            de Excelencia
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 dark:text-gray-300 mb-8 leading-relaxed">
            Transformamos ideas en proyectos exitosos con soluciones técnicas innovadoras y sostenibles para el Perú moderno.
          </p>
          <div className="flex flex-wrap gap-4">
  {/* Botón principal: mantiene amarillo */}
  <Button 
    to="/servicios" 
    variant="yellow" 
    size="lg"
    icon={<ChevronRight size={20} />}
    iconPosition="right"
    className="animate-slide-up"
    style={{ animationDelay: '0.2s' }}
  >
    Nuestros Servicios
  </Button>

  {/* Botón secundario: inversión sutil al hacer hover */}
  <Button 
    to="/contacto" 
    variant="outline" 
    size="lg"
    className="animate-slide-up text-white hover:bg-white hover:text-primary-600 dark:hover:bg-white"
    style={{ animationDelay: '0.4s' }}
  >
    Cotiza tu Proyecto
  </Button>
</div>


          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            {[
              { value: '+500', label: 'Proyectos Completados' },
              { value: '15+', label: 'Años de Experiencia' },
              { value: '98%', label: 'Clientes Satisfechos' },
              { value: '24/7', label: 'Soporte Técnico' },
            ].map((stat, idx) => (
              <div className="text-center" key={idx}>
                <div className="text-4xl font-bold text-yellow-500 mb-2">{stat.value}</div>
                <div className="text-gray-300 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float">
          <span className="text-white text-sm mb-2">Descubre más</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="animate-bounce w-2 h-2 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
