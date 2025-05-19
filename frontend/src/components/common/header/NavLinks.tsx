import React from 'react';
import NavLink from './NavLink';

interface Props {
  isScrolled: boolean;
  isPublicPage: boolean;
}

const links = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/servicios", label: "Servicios" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/clientes", label: "Clientes" },
  { to: "/blog", label: "Blog" },
  { to: "/contacto", label: "Contacto" },
];

const NavLinks: React.FC<Props> = ({ isScrolled, isPublicPage }) => {
  return (
    <>
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          label={label}
          isScrolled={isScrolled}
          isPublicPage={isPublicPage}
        />
      ))}
    </>
  );
};

export default NavLinks;
