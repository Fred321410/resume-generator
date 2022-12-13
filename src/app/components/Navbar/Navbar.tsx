import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const links = [
    {
      to: '/',
      label: 'Users',
    },
    {
      to: '/resumes',
      label: 'Resumes',
    },
  ];

  const Links = links.map((link) => {
    return (
      <div className="navbar__link" key={link.to}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'navbar__link__label' + ' ' + 'navbar__link__label--active'
              : 'navbar__link__label'
          }
          to={link.to}
        >
          {link.label}
        </NavLink>
      </div>
    );
  });

  return <div className="navbar">{Links}</div>;
};

export default Navbar;
