import FooterLink from './FooterLink';

const FooterServices = () => (
  <div>
    <h3 className="text-lg font-bold mb-4 text-white">Servicios</h3>
    <ul className="space-y-2">
      <FooterLink to="/servicios" label="Diseño Arquitectónico" />
      <FooterLink to="/servicios" label="Ingeniería Estructural" />
      <FooterLink to="/servicios" label="Supervisión de Obra" />
      <FooterLink to="/servicios" label="Estudios de Impacto Ambiental" />
      <FooterLink to="/servicios" label="Proyectos Hidráulicos" />
      <FooterLink to="/servicios" label="Ingeniería Eléctrica" />
    </ul>
  </div>
);

export default FooterServices;