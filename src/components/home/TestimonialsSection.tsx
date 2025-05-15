import { useState, useEffect } from 'react';
import SectionHeading from '../common/SectionHeading';
import { Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { testimonials } from '../../mockData';

const TestimonialsSection = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <section className="py-20 bg-primary-800 dark:bg-gray-800 text-white" aria-label="Testimonios de clientes">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Lo Que Dicen Nuestros Clientes"
          subtitle="Hemos trabajado con empresas y organizaciones de todos los tamaños, ayudándoles a llevar sus proyectos de ingeniería al siguiente nivel."
          centered
          light
        />

        {domLoaded && (
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active bg-yellow-500',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mt-12 !pb-14"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-primary-700  dark:bg-gray-700 p-6 rounded-lg shadow-lg h-full flex flex-col">
                  <Quote size={40} className="text-yellow-500 mb-4" />
                  <p className="text-gray-300 mb-6 flex-grow italic">
                    “{testimonial.text}”
                  </p>
                  <div className="flex items-center mt-auto">
                    {testimonial.image && (
                      <img
                        src={testimonial.image}
                        alt={`Foto de ${testimonial.name}`}
                        className="w-12 h-12 rounded-full object-cover mr-4 border border-white/20"
                      />
                    )}
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-300">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
