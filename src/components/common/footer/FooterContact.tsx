import { Mail, Phone, MapPin } from 'lucide-react';

const FooterContact = () => (
  <div>
    <h3 className="text-lg font-bold mb-4 text-white">Contacto</h3>
    <ul className="space-y-4">
      <li className="flex items-start">
        <MapPin size={20} className="mr-3 mt-1 text-yellow-500" />
        <span className="text-gray-300">Av. Javier Prado Este 1425, San Isidro, Lima, Perú</span>
      </li>
      <li className="flex items-center">
        <Phone size={20} className="mr-3 text-yellow-500" />
        <span className="text-gray-300">+51 (1) 555-1234</span>
      </li>
      <li className="flex items-center">
        <Mail size={20} className="mr-3 text-yellow-500" />
        <span className="text-gray-300">contacto@yeul.pe</span>
      </li>
    </ul>
  </div>
);
export default FooterContact;