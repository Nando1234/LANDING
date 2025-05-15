import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import SocialIcon from './SocialIcon';

const FooterBrand = () => (
  <div className="space-y-4">
    <div className="flex items-center">
      <div className="h-10 w-11 bg-white rounded-md flex items-center justify-center mr-2">
        <span className="text-primary-800 dark:text-gray-900 text-xl font-bold">Y</span>
      </div>
      <span className="text-xl font-montserrat font-bold">
        Yeul<span className="text-yellow-500">Perú</span>
      </span>
    </div>
    <p className="text-gray-300 mt-4 max-w-xs">
      Brindamos soluciones de ingeniería innovadoras y sostenibles para transformar la infraestructura del Perú.
    </p>
    <div className="flex space-x-4 mt-4">
      <SocialIcon icon={<Facebook size={20} />} href="#" />
      <SocialIcon icon={<Twitter size={20} />} href="#" />
      <SocialIcon icon={<Linkedin size={20} />} href="#" />
      <SocialIcon icon={<Instagram size={20} />} href="#" />
    </div>
  </div>
);
export default FooterBrand;