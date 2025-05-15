import { Link } from 'react-router-dom';

const FooterLink = ({ to, label }: { to: string; label: string }) => (
  <li>
    <Link
      to={to}
      className="text-gray-300 hover:text-yellow-500 transition-colors duration-300"
    >
      {label}
    </Link>
  </li>
);

export default FooterLink;