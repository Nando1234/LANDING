import FooterLink from './FooterLink';

const FooterLinks = () => (
  <div>
    <h3 className="text-lg font-bold mb-4 text-white">Navegación</h3>
    <ul className="space-y-2">
      <FooterLink to="/" label="Inicio" />
      <FooterLink to="/nosotros" label="Nosotros" />
      <FooterLink to="/servicios" label="Servicios" />
      <FooterLink to="/proyectos" label="Proyectos" />
      <FooterLink to="/clientes" label="Clientes" />
      <FooterLink to="/blog" label="Blog" />
      <FooterLink to="/contacto" label="Contacto" />
    </ul>
  </div>
);

export default FooterLinks;