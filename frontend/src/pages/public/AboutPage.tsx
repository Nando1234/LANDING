import { motion } from 'framer-motion';
import { Users, Target, Award, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import Button from '../../components/common/Button';

const AboutPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const teamMembers = [
    {
      name: "Carlos Ramírez",
      position: "Director de Ingeniería",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    },
    {
      name: "Ana Mendoza",
      position: "Gerente de Proyectos",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
    },
    {
      name: "Luis García",
      position: "Ingeniero Senior",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg"
    },
    {
      name: "María Torres",
      position: "Arquitecta Principal",
      image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg"
    }
  ];

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovación",
      description: "Buscamos constantemente nuevas formas de resolver desafíos de ingeniería."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excelencia",
      description: "Mantenemos los más altos estándares en cada proyecto que emprendemos."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Colaboración",
      description: "Trabajamos en estrecha colaboración con nuestros clientes y socios."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800">
      {/* Hero Section */}
      <section className="relative bg-primary-900 py-32 dark:bg-gray-800">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg)'
          }}
        />
        <div className="container mx-auto px-4 relative z-10 ">
          <motion.div 
            className="max-w-3xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 ">
              Transformando Ideas en Realidad
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Somos una empresa líder en consultoría de ingeniería y expedientes técnicos en el Perú,
              comprometidos con la excelencia y la innovación.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 ">
        {/* Historia y Misión */}
        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
            <motion.div 
              className="space-y-6"
              {...fadeInUp}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white ">Nuestra Historia</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Desde nuestra fundación en 2010, YEUL Perú ha estado a la vanguardia de la ingeniería 
                y consultoría técnica. Comenzamos como un pequeño equipo de ingenieros apasionados 
                y hemos crecido hasta convertirnos en una empresa líder en el sector.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Nuestra trayectoria está marcada por proyectos emblemáticos que han contribuido al 
                desarrollo de infraestructura en todo el Perú, desde Lima hasta las regiones más remotas.
              </p>
            </motion.div>

            <motion.div 
              className="space-y-6"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Nuestra Misión</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Buscamos ser catalizadores del desarrollo sostenible en el Perú, proporcionando 
                soluciones de ingeniería innovadoras y expedientes técnicos de alta calidad que 
                impulsen el progreso de nuestro país.
              </p>
              <ul className="space-y-4">
                {[
                  "Excelencia en cada proyecto",
                  "Compromiso con la sostenibilidad",
                  "Innovación constante",
                  "Desarrollo del talento peruano"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary-600 dark:text-yellow-500 mr-2" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Nuestros Valores"
              subtitle="Los principios que guían nuestro trabajo diario"
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                >
                  <div className="bg-primary-50 dark:bg-gray-600 p-3 rounded-full w-fit mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section className="py-20">
          <SectionHeading
            title="Nuestro Equipo"
            subtitle="Conoce a los profesionales detrás de YEUL Perú"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{member.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-900 dark:bg-gray-800 rounded-3xl my-20">
          <motion.div 
            className="text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Listo para trabajar juntos?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Descubre cómo podemos ayudarte a llevar tu próximo proyecto al siguiente nivel.
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

export default AboutPage;