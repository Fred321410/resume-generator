import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Header.scss';
import logo from '../../logo.svg';


function Header(): JSX.Element {
  return (
    <>
      <header className='header'>
        <div className='header__title'>
          <img src={logo} className='header__title__logo' alt="logo" />
          <p>Resume Generator</p>
        </div>
        <Navbar />
      </header>
      <Outlet />
    </>
  );
}

export default Header;
