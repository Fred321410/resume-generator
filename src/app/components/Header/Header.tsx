import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Header.scss';
import logo from '../../logo.svg';


const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='header__container'>
          <div className='header__container__title'>
            <img src={logo} className='header__container__title__logo' alt="logo" />
            <p>Resume Generator</p>
          </div>
          <Navbar />
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
