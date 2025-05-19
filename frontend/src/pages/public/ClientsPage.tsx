import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Users, Award, Globe, ArrowRight } from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import { clients, testimonials } from '../../mockData';
import Button from '../../components/common/Button';

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
      icon: <Building2 size={24} className="text-primary-600 dark:text-yellow-500" />,
      value: '500+',
      label: 'Proyectos Completados'
    },
    {
      icon: <Users size={24} className="text-primary-600 dark:text-yellow-500" />,
      value: '1000+',
      label: 'Clientes Satisfechos'
    },
    {
      icon: <Award size={24} className="text-primary-600 dark:text-yellow-500" />,
      value: '15+',
      label: 'Años de Experiencia'
    },
    {
      icon: <Globe size={24} className="text-primary-600 dark:text-yellow-500" />,
      value: '20+',
      label: 'Ciudades Atendidas'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary-900 dark:bg-gray-900 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-primary-800/95 dark:from-gray-900/95 dark:to-gray-800/95" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros Clientes
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trabajamos con organizaciones líderes en diversos sectores para desarrollar
              soluciones de ingeniería innovadoras y sostenibles.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md text-center"
            >
              <div className="mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clients Grid */}
        <section className="mb-16">
          <SectionHeading
            title="Empresas que Confían en Nosotros"
            subtitle="Colaboramos con organizaciones líderes en diversos sectores"
            centered
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            {clients.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-600 shadow-md aspect-square group overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-lg text-white font-medium text-center px-4">
                    {client.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <SectionHeading
            title="Lo Que Dicen Nuestros Clientes"
            subtitle="Testimonios de quienes han confiado en nosotros"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="mb-4">
                  <svg className="h-8 w-8 text-primary-600 dark:text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  {testimonial.image && (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover mr-4"
                    />
                  )}
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-900 dark:bg-gray-800 rounded-3xl p-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Listo para ser parte de nuestra historia de éxito?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Únete a nuestra creciente lista de clientes satisfechos y descubre cómo
              podemos ayudarte a alcanzar tus objetivos.
            </p>
            <Button
              to="/contacto"
              variant="yellow"
              size="lg"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
            >
              Contáctanos
            </Button>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default ClientsPage;