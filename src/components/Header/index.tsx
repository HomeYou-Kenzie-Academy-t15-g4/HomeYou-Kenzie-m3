import React, { useRef, useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import StyledHeader from './style';
import imgLogo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { UserContext } from '../../providers/UserContext';

const Header = () => {
  const navRef = React.useRef<HTMLElement | null>(null);

  const { user } = useContext(UserContext);

  const showNavBar = () => {
    navRef.current?.classList.toggle('responsive_nav');
  };

  return (
    <StyledHeader>
      <img src={imgLogo} alt='logo' />
      <nav ref={navRef}>
        <Link to={'/'}>Início</Link>
        <Link to={'/house'}>Galeria</Link>
        <Link to={'/login'}>Entrar</Link>
        <Link to={'/register'}>Cadastro</Link>
        <button
          type='button'
          className='nav-btn nav-close-btn'
          onClick={showNavBar}
        >
          pra tirar o bug
          <FaTimes />
        </button>
      </nav>
      {user ? <h2>OK</h2> : <h2>Fail</h2>}
      <button type='button' className='nav-btn' onClick={showNavBar}>
        pra tirar o bug
        <FaBars />
      </button>
    </StyledHeader>
  );
};

export default Header;
