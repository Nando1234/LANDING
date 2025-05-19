import { Link, useLocation } from 'react-router-dom';

interface Props {
  to: string;
  label: string;
  isScrolled: boolean;
  isPublicPage: boolean;
}

const NavLink: React.FC<Props> = ({ to, label, isScrolled, isPublicPage }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));

  const baseColor = isPublicPage
    ? (isScrolled
        ? 'text-primary-600 hover:text-primary-700 dark:text-white dark:hover:text-yellow-400'
        : 'text-white hover:text-yellow-300 dark:text-white dark:hover:text-yellow-400')
    : 'text-primary-600 hover:text-primary-700 dark:text-white dark:hover:text-yellow-400';

  const activeColor = 'text-yellow-500 dark:text-yellow-400';

  return (
    <Link
      to={to}
      className={`group relative px-3 py-2 rounded-md font-medium transition-colors duration-300 ease-in-out ${
        isActive ? activeColor : baseColor
      }`}
    >
      {label}
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 dark:bg-yellow-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ${
          isActive ? '!scale-x-100' : ''
        }`}
      ></span>
    </Link>
  );
};

export default NavLink;
