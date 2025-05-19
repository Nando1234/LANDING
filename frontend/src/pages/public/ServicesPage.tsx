import React from 'react';
import SectionHeading from '../../components/common/SectionHeading';
import { 
  DraftingCompass, HardHat, ClipboardList,
  Map, FileSearch, FileCheck2 
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      title: "Diseño Estructural",
      description: "Diseño y cálculo de estructuras para proyectos residenciales, comerciales e industriales.",
      icon: <DraftingCompass className="h-5 w-5" />
    },
    {
      title: "Supervisión de Obras",
      description: "Control y seguimiento profesional durante la ejecución de proyectos constructivos.",
      icon: <HardHat className="h-5 w-5" />
    },
    {
      title: "Consultoría Técnica",
      description: "Asesoramiento especializado en aspectos técnicos y normativas de construcción.",
      icon: <ClipboardList className="h-5 w-5" />
    },
    {
      title: "Estudios de Suelo",
      description: "Análisis geotécnicos y recomendaciones para cimentaciones y estructuras.",
      icon: <Map className="h-5 w-5" />
    },
    {
      title: "Peritajes Estructurales",
      description: "Evaluación y diagnóstico del estado de estructuras existentes.",
      icon: <FileSearch className="h-5 w-5" />
    },
    {
      title: "Regularización de Obras",
      description: "Gestión de permisos y documentación técnica para regularización de construcciones.",
      icon: <FileCheck2 className="h-5 w-5" />
    }
  ];

  return (
    <div className="container mx-auto px-4 pt-16 pb-12 transition-colors duration-300">
      <SectionHeading
        title="Nuestros Servicios"
        subtitle="Soluciones integrales para sus proyectos de ingeniería"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {services.map((service, index) => (
          <div 
            key={index}
            className="rounded-lg shadow-md p-6 transition-all duration-300
                      bg-white dark:bg-gray-800
                      border border-gray-200 dark:border-gray-700
                      hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-gray-900/30"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 mr-3 rounded-full 
                            bg-primary-50 text-primary-600
                            dark:bg-gray-700 dark:text-yellow-400">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold 
                            text-gray-800 dark:text-white">
                {service.title}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;