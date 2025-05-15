import { Link } from 'react-router-dom';
import MobileNavLink from './MobileNavLink';

const MobileMenu: React.FC<{ isAuthenticated: boolean; userRole?: string }> = ({ isAuthenticated, userRole }) => {
  const getDashboardPath = () => {
    switch (userRole) {
      case 'admin': return '/dashboard/admin';
      case 'engineer': return '/dashboard/engineer';
      case 'client': return '/dashboard/client';
      default: return '/dashboard/client';
    }
  };

  return (
    <div className="md:hidden bg-white dark:bg-gray-800 rounded-lg mt-4 py-5 px-4 shadow-xl animate-slide-down transition-all duration-300 ease-in-out">

      {/* Enlaces móviles */}
      <div className="flex flex-col space-y-2">
        <MobileNavLink to="/" label="Inicio" />
        <MobileNavLink to="/nosotros" label="Nosotros" />
        <MobileNavLink to="/servicios" label="Servicios" />
        <MobileNavLink to="/proyectos" label="Proyectos" />
        <MobileNavLink to="/clientes" label="Clientes" />
        <MobileNavLink to="/blog" label="Blog" />
        <MobileNavLink to="/contacto" label="Contacto" />

        <div className="pt-3 border-t border-gray-200 dark:border-gray-700 mt-4">
          <Link
            to={isAuthenticated ? getDashboardPath() : "/login"}
            className={`
              block w-full text-center
              bg-yellow-500 hover:bg-yellow-400
              text-white hover:text-primary-900
              dark:bg-yellow-400 dark:hover:bg-yellow-300 dark:text-primary-900
              font-semibold py-2 px-4 rounded-md
              transition-all duration-300 shadow-button dark:shadow-md hover:shadow-button-hover
            `}
          >
            {isAuthenticated ? "Mi Dashboard" : "Acceso Clientes"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
