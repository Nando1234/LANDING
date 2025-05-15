import { Link } from 'react-router-dom';
import Button from '../common/Button';

const CtaSection = () => {
  return (
    <section className="py-20 bg-primary-600 dark:bg-gray-800 text-white dark:text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">
            ¿Listo para impulsar tu próximo proyecto?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 dark:text-gray-300 mb-8">
            Nuestro equipo de expertos está preparado para ayudarte a convertir tus ideas en realidad. 
            Contáctanos hoy para una consulta gratuita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              to="/contacto"
              variant="yellow"
              size="lg"
            >
              Solicitar Consulta
            </Button>
            <Button 
              to="/proyectos"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 dark:border-white dark:hover:bg-white/10"
            >
              Ver Nuestros Proyectos
            </Button>
          </div>
          <div className="mt-10 text-center">
            <p className="text-gray-200 dark:text-gray-300 mb-2">¿Ya eres cliente?</p>
            <Link 
              to="/login" 
              className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors"
            >
              Accede a tu Expediente Técnico
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
