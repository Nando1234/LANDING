import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Award, Globe, ArrowRight } from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import { clients } from '../../mockData';

const ClientsPage = () => {
  const [selectedSector, setSelectedSector] = useState('all');

  const sectors = [
    { id: 'all', name: 'Todos' },
    { id: 'construction', name: 'Construcción' },
    { id: 'government', name: 'Gobierno' },
    { id: 'private', name: 'Sector Privado' },
  ];

  const stats = [
    {
      icon: <Building2 size={24} />,
      value: '500+',
      label: 'Proyectos Completados'
    },
    {
      icon: <Users size={24} />,
      value: '1000+',
      label: 'Clientes Satisfechos'
    },
    {
      icon: <Award size={24} />,
      value: '15+',
      label: 'Años de Experiencia'
    },
    {
      icon: <Globe size={24} />,
      value: '20+',
      label: 'Ciudades Atendidas'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <SectionHeading
            title="Nuestros Clientes"
            subtitle="Trabajamos con organizaciones líderes en diversos sectores para desarrollar soluciones de ingeniería innovadoras."
            centered
          />

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <div className="text-primary-600 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sector Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {sectors.map((sector) => (
            <button
              key={sector.id}
              onClick={() => setSelectedSector(sector.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedSector === sector.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {sector.name}
            </button>
          ))}
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="h-32 flex items-center justify-center mb-6">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {client.name}
                </h3>
                {client.testimonial && (
                  <p className="text-gray-600 italic mb-4">
                    "{client.testimonial}"
                  </p>
                )}
                <button className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                  Ver proyectos
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center bg-primary-50 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Listo para ser parte de nuestra historia de éxito?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Únete a nuestra creciente lista de clientes satisfechos y descubre cómo podemos ayudarte a alcanzar tus objetivos.
          </p>
          <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
            Contáctanos
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ClientsPage;