import { Link } from 'react-router-dom';

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="pt-8 mt-8 border-t border-gray-700 text-gray-400 text-sm flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0">
      <div>
        &copy; {currentYear} Yeul Perú. Todos los derechos reservados.
      </div>
      <div className="flex space-x-4">
        <Link to="/terminos" className="hover:text-yellow-500 transition-colors">
          Términos y Condiciones
        </Link>
        <Link to="/privacidad" className="hover:text-yellow-500 transition-colors">
          Política de Privacidad
        </Link>
      </div>
    </div>
  );
};

export default FooterBottom;