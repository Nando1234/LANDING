import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LogoProps {
  isScrolled: boolean;
  isPublicPage: boolean;
  isMenuOpen: boolean;
}

const Logo: React.FC<LogoProps> = ({ isScrolled, isPublicPage, isMenuOpen }) => {
  const location = useLocation();
  const showScrolledStyle = isScrolled || isMenuOpen || !isPublicPage;
  
  const bgClass = isPublicPage
    ? (showScrolledStyle
        ? 'bg-primary-600 dark:bg-white'
        : 'bg-white dark:bg-white')
    : 'bg-primary-600 dark:bg-white';

  const textClass = isPublicPage
    ? (showScrolledStyle
        ? 'text-white dark:text-black'
        : 'text-primary-700 dark:text-gray-800')
    : 'text-white dark:text-black';

  const nameClass = showScrolledStyle
    ? 'text-primary-600 dark:text-white'
    : isPublicPage
      ? 'text-white dark:text-white'
      : 'text-primary-600 dark:text-white';

  return (
    <Link to="/" className="flex items-center" aria-label="Ir a la página de inicio">
      <div className="flex items-center font-bold">
        <div className={`h-10 w-10 rounded-md flex items-center justify-center mr-2 transition-colors duration-300 ease-in-out ${bgClass}`}>
          <span className={`text-xl font-montserrat transition-colors duration-300 ease-in-out ${textClass}`}>
            Y
          </span>
        </div>
        <span className={`text-xl md:text-2xl font-montserrat font-semibold transition-colors duration-300 ease-in-out ${nameClass}`}>
          Yeul<span className="text-yellow-500">Perú</span>
        </span>
      </div>
    </Link>
  );
};

export default Logo;