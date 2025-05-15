import { useState, useEffect, useRef } from 'react';
import { 
  Building, Users, CheckCircle, Award 
} from 'lucide-react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { id: 1, value: 250, label: 'Proyectos Completados', icon: <Building size={36} className="text-yellow-500" />, suffix: '+' },
    { id: 2, value: 120, label: 'Clientes Satisfechos', icon: <Users size={36} className="text-yellow-500" />, suffix: '+' },
    { id: 3, value: 15, label: 'Años de Experiencia', icon: <CheckCircle size={36} className="text-yellow-500" />, suffix: '' },
    { id: 4, value: 30, label: 'Premios Recibidos', icon: <Award size={36} className="text-yellow-500" />, suffix: '+' },
  ];

  const useCounter = (end: number, start = 0, duration = 2000) => {
    const [count, setCount] = useState(start);
    const stepRef = useRef(0);
    const countRef = useRef(start);

    useEffect(() => {
      if (!isVisible) return;

      countRef.current = start;
      const steps = 60;
      const increment = (end - start) / steps;
      const intervalTime = duration / steps;

      const timer = setInterval(() => {
        stepRef.current += 1;
        countRef.current += increment;

        if (countRef.current >= end || stepRef.current >= steps) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.floor(countRef.current));
        }
      }, intervalTime);

      return () => clearInterval(timer);
    }, [end, start, duration, isVisible]);

    return count;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-white dark:bg-gray-800" ref={sectionRef} aria-label="Estadísticas de la empresa">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const count = useCounter(stat.value);
            return (
              <div 
                key={stat.id} 
                className="text-center p-6 border border-gray-200 dark:border-gray-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white dark:bg-gray-800"
              >
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-primary-600 dark:text-white font-montserrat">
                  {count}{stat.suffix}
                </div>
                <div className="mt-2 text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
