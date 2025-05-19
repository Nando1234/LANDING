import SectionHeading from '../common/SectionHeading';
import Card from '../common/Card';
import Button from '../common/Button';
import { 
  Building2, Construction, ClipboardCheck, 
  Trees, Droplets, Zap, ChevronRight 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    { id: 1, name: 'Diseño Arquitectónico', description: 'Diseño de edificaciones con enfoque en funcionalidad, estética y sustentabilidad.', icon: <Building2 size={40} /> },
    { id: 2, name: 'Ingeniería Estructural', description: 'Diseño y cálculo de estructuras seguras y eficientes, cumpliendo con normativas vigentes.', icon: <Construction size={40} /> },
    { id: 3, name: 'Supervisión de Obra', description: 'Control y seguimiento de proyectos de construcción, asegurando calidad y tiempos de ejecución.', icon: <ClipboardCheck size={40} /> },
    { id: 4, name: 'Estudios de Impacto Ambiental', description: 'Evaluación de impactos ambientales de proyectos y diseño de medidas de mitigación.', icon: <Trees size={40} /> },
    { id: 5, name: 'Proyectos Hidráulicos', description: 'Diseño de sistemas de aprovechamiento, conducción y tratamiento de agua.', icon: <Droplets size={40} /> },
    { id: 6, name: 'Ingeniería Eléctrica', description: 'Diseño de instalaciones eléctricas de baja, media y alta tensión.', icon: <Zap size={40} /> },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" aria-label="Servicios ofrecidos">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Nuestros Servicios"
          subtitle="Ofrecemos soluciones integrales de ingeniería adaptadas a las necesidades de cada cliente y proyecto."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card 
              key={service.id} 
              hoverable 
              className="flex flex-col h-full group bg-white dark:bg-gray-800"
            >
              <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg inline-flex text-primary-600 dark:text-yellow-600">
                {service.icon}
              </div>
              <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">
                {service.name}
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300 flex-grow">
                {service.description}
              </p>
              <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 transition-all duration-300">
                <Button 
                  to="/servicios" 
                  variant="ghost" 
                  icon={<ChevronRight size={18} />} 
                  iconPosition="right"
                  className="text-primary-600 dark:text-yellow-600 hover:underline"
                >
                  Ver detalles
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            to="/servicios" 
            variant="primary"
            size="lg"
          >
            Ver Todos los Servicios
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;