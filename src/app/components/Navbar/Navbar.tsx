import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss'

function Navbar(): JSX.Element {

  const links = [
    {
      to: '/',
      label: 'Home'
    },
    {
      to: '/foo',
      label: 'Foo'
    },
    {
      to: '/bar',
      label: 'Bar'
    }
  ];

  const Links = links.map(link => {
    return (
      <div
        className='navbar__link'
        key={link.to}
      >
        <NavLink 
          className={({ isActive }) =>
            isActive ? 'navbar__link__label' + ' ' + 'navbar__link__label--active' : 'navbar__link__label'
          }
          to={link.to}
        >
          {link.label}
        </NavLink>
      </div>
    );
  });

  return (
    <div className='navbar'>
      {Links}
    </div>
  );
}

export default Navbar;
