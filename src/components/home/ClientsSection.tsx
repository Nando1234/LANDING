import { useState, useEffect } from 'react';
import SectionHeading from '../common/SectionHeading';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { clients } from '../../mockData';

const ClientsSection = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800" aria-label="Clientes destacados">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Nuestros Clientes"
          subtitle="Trabajamos con organizaciones líderes en diversos sectores para desarrollar soluciones de ingeniería innovadoras."
          centered
        />

        {domLoaded && (
          <div className="mt-12">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={2}
              loop={true}
              speed={3000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
              className="clients-swiper"
            >
              {clients.map((client) => (
                <SwiperSlide key={client.id}>
                  <div className="rounded-xl bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 shadow-md h-48 hover:h-56 transition-all duration-300 group overflow-hidden flex flex-col justify-center items-center px-4 pt-5 mx-auto">
                    <div className="w-full h-36 flex items-center justify-center overflow-hidden">
                      <img
                        src={client.logo}
                        alt={`Logo de ${client.name}`}
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p className="text-lg text-gray-800 dark:text-white/90 font-medium text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {client.name}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientsSection;