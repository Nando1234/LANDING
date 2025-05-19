import { Link, useLocation } from 'react-router-dom';

const MobileNavLink = ({ to, label }: { to: string; label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));

  return (
    <Link
      to={to}
      className={`block px-4 py-2 rounded-md font-medium transition-colors duration-300 ease-in-out
        ${isActive
          ? 'bg-primary-50 text-primary-600 dark:bg-primary-900 dark:text-white'
          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
        }`}
    >
      {label}
    </Link>
  );
};

export default MobileNavLink;
