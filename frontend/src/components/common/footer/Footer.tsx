import FooterBrand from './FooterBrand';
import FooterLinks from './FooterLinks';
import FooterServices from './FooterServices';
import FooterContact from './FooterContact';
import FooterBottom from './FooterBottom';

const Footer = () => {
  return (
    <footer className="bg-primary-900 dark:bg-gray-900 text-white dark:text-white pt-16 pb-8">

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <FooterBrand />
          <FooterLinks />
          <FooterServices />
          <FooterContact />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
