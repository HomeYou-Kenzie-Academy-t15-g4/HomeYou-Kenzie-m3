import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import StyledHeader from './style';
import imgLogo from '../../assets/logo.png';

const Header = () => {
  const navRef = React.useRef<HTMLElement | null>(null);

  const showNavBar = () => {
    navRef.current?.classList.toggle('responsive_nav');
  };

  return (
    <StyledHeader>
      <img src={imgLogo} alt='logo' />
      <nav ref={navRef}>
        <a href='#/'>Início</a>
        <a href='#/'>Galeria</a>
        <a href='#/'>Entrar</a>
        <a href='#/'>Cadastro</a>
        <button className='nav-btn nav-close-btn' onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <h3>user</h3>
      <button className='nav-btn' onClick={showNavBar}>
        <FaBars />
      </button>
    </StyledHeader>
  );
};

export default Header;
