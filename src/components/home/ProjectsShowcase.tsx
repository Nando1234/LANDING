import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../mockData';

// Status badges component
const StatusBadge = ({ status }: { status: string }) => {
  const statusMap: Record<string, { label: string; className: string }> = {
    in_progress: {
      label: 'En Progreso',
      className: 'bg-primary-100 text-primary-700 dark:bg-primary-900/100 dark:text-primary-500',
    },
    pending: {
      label: 'Pendiente',
      className: 'bg-warning/20 text-warning dark:text-yellow-300',
    },
    completed: {
      label: 'Completado',
      className: 'bg-success/20 text-success dark:text-green-400',
    },
  };

  const { label, className } = statusMap[status] || {
    label: status,
    className: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${className}`}>
      {label}
    </span>
  );
};

const ProjectsShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const sectors = [...new Set(projects.map(project => project.sector))];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects.slice(0, 3)
    : projects.filter(project => project.sector === activeFilter).slice(0, 3);

  return (
    <section className="py-20 bg-white dark:bg-gray-900" aria-label="Proyectos destacados">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Proyectos Destacados"
          subtitle="Conoce algunas de nuestras obras más recientes e innovadoras en diversos sectores."
          centered
        />

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Button
            variant={activeFilter === 'all' ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => setActiveFilter('all')}
          >
            Todos
          </Button>
          {sectors.map(sector => (
            <Button
              key={sector}
              variant={activeFilter === sector ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setActiveFilter(sector)}
            >
              {sector}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg bg-white dark:bg-gray-800"
            >
              {/* Project image */}
              <div className="h-60 overflow-hidden">
                <img
                  src={project.image || 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600'}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Project info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <StatusBadge status={project.status} />
                  <span className="text-sm text-gray-500 dark:text-gray-400">{project.location}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {project.status === 'in_progress' && (
                  <div className="mt-3 mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600 dark:text-gray-400">Progreso</span>
                      <span className="font-medium dark:text-white">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-primary-600 dark:bg-yellow-400 h-2 rounded-full" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
                
                <Link 
                  to={`/proyectos/${project.id}`}
                  className="inline-flex items-center text-primary-600 dark:text-yellow-400 font-medium hover:text-primary-700 dark:hover:text-yellow-300 transition-colors"
                >
                  Ver detalles
                  <ArrowUpRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* "View all" button */}
        <div className="text-center mt-12">
          <Button 
            to="/proyectos"
            variant="outline"
            size="lg"
          >
            Ver Todos los Proyectos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
