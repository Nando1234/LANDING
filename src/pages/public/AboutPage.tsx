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
    }
  ];

  const achievements = [
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: "+500",
      description: "Clientes Satisfechos"
    },
    {
      icon: <Target className="h-8 w-8 text-primary-600" />,
      title: "+1000",
      description: "Proyectos Completados"
    },
    {
      icon: <Award className="h-8 w-8 text-primary-600" />,
      title: "15+",
      description: "Años de Experiencia"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-primary-900 py-20 px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg)'
          }}
        />
        <div className="container mx-auto relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transformando Ideas en Realidad
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Somos una empresa líder en consultoría de ingeniería y expedientes técnicos en el Perú,
              comprometidos con la excelencia y la innovación.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Historia y Misión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div 
            className="space-y-6"
            {...fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900">Nuestra Historia</h2>
            <p className="text-gray-600 leading-relaxed">
              Desde nuestra fundación en 2010, YEUL Perú ha estado a la vanguardia de la ingeniería 
              y consultoría técnica. Comenzamos como un pequeño equipo de ingenieros apasionados 
              y hemos crecido hasta convertirnos en una empresa líder en el sector.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nuestra trayectoria está marcada por proyectos emblemáticos que han contribuido al 
              desarrollo de infraestructura en todo el Perú, desde Lima hasta las regiones más remotas.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-6"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900">Nuestra Misión</h2>
            <p className="text-gray-600 leading-relaxed">
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
                  className="flex items-center text-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                >
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Valores */}
        <div className="mb-20">
          <SectionHeading
            title="Nuestros Valores"
            subtitle="Los principios que guían nuestro trabajo diario"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
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
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                <div className="bg-primary-50 p-3 rounded-full w-fit mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Logros */}
        <div className="bg-primary-50 rounded-2xl p-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 * index }}
              >
                <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  {achievement.icon}
                </div>
                <h3 className="text-3xl font-bold text-primary-600 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Equipo */}
        <div className="mb-20">
          <SectionHeading
            title="Nuestro Equipo"
            subtitle="Conoce a los profesionales detrás de YEUL Perú"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ¿Listo para trabajar juntos?
          </h2>
          <Button 
            to="/contacto"
            variant="primary"
            size="lg"
            icon={<ArrowRight size={20} />}
            iconPosition="right"
          >
            Contáctanos
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;