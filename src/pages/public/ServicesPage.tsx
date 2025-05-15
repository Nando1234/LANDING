import React from 'react';
import SectionHeading from '../../components/common/SectionHeading';

const ServicesPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionHeading
        title="Nuestros Servicios"
        subtitle="Soluciones integrales para sus proyectos de ingeniería"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* Service Cards */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Diseño Estructural</h3>
          <p className="text-gray-600">
            Diseño y cálculo de estructuras para proyectos residenciales, comerciales e industriales.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Supervisión de Obras</h3>
          <p className="text-gray-600">
            Control y seguimiento profesional durante la ejecución de proyectos constructivos.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Consultoría Técnica</h3>
          <p className="text-gray-600">
            Asesoramiento especializado en aspectos técnicos y normativas de construcción.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Estudios de Suelo</h3>
          <p className="text-gray-600">
            Análisis geotécnicos y recomendaciones para cimentaciones y estructuras.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Peritajes Estructurales</h3>
          <p className="text-gray-600">
            Evaluación y diagnóstico del estado de estructuras existentes.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Regularización de Obras</h3>
          <p className="text-gray-600">
            Gestión de permisos y documentación técnica para regularización de construcciones.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;