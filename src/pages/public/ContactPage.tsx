import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import Button from '../../components/common/Button';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Correo Electrónico",
      content: "contacto@yeul.pe",
      link: "mailto:contacto@yeul.pe"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Teléfono",
      content: "+51 (1) 555-1234",
      link: "tel:+5115551234"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Dirección",
      content: "Av. Javier Prado Este 1425, San Isidro, Lima, Perú"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horario de Atención",
      content: "Lun - Vie: 9:00 AM - 6:00 PM"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-primary-900 dark:bg-gray-900 py-20 mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-primary-800/95 dark:from-gray-900/95 dark:to-gray-800/95" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contáctanos
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Estamos aquí para responder tus preguntas y ayudarte con tu próximo proyecto
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-50 dark:bg-gray-700 text-primary-600 dark:text-yellow-500 mb-4">
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {info.title}
              </h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-yellow-500 transition-colors"
                >
                  {info.content}
                </a>
              ) : (
                <p className="text-gray-600 dark:text-gray-300">{info.content}</p>
              )}
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Envíanos un mensaje
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 dark:focus:ring-yellow-500 dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 dark:focus:ring-yellow-500 dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 dark:focus:ring-yellow-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Asunto
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 dark:focus:ring-yellow-500 dark:bg-gray-700 dark:text-white"
                      required
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="consulta">Consulta general</option>
                      <option value="presupuesto">Solicitar presupuesto</option>
                      <option value="proyecto">Nuevo proyecto</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 dark:focus:ring-yellow-500 dark:bg-gray-700 dark:text-white"
                    required
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={isSubmitting}
                  icon={<Send size={20} />}
                  iconPosition="right"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </Button>

                {submitStatus === 'success' && (
                  <p className="text-green-600 dark:text-green-400 text-center">
                    ¡Mensaje enviado con éxito! Te contactaremos pronto.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 dark:text-red-400 text-center">
                    Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                  </p>
                )}
              </form>
            </div>
          </motion.div>

          {/* Map and Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Map */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.666716421505!2d-77.02124668255615!3d-12.092733891445996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8414f8580f7%3A0x9fee8f3b8e9b9597!2sAv.%20Javier%20Prado%20Este%201425%2C%20San%20Isidro%2015036%2C%20Peru!5e0!3m2!1sen!2s!4v1647884688760!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Additional Info */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Información adicional
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  También puedes encontrarnos en nuestras redes sociales:
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary-600 dark:text-yellow-500 hover:text-primary-700 dark:hover:text-yellow-400">
                    LinkedIn
                  </a>
                  <a href="#" className="text-primary-600 dark:text-yellow-500 hover:text-primary-700 dark:hover:text-yellow-400">
                    Facebook
                  </a>
                  <a href="#" className="text-primary-600 dark:text-yellow-500 hover:text-primary-700 dark:hover:text-yellow-400">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;