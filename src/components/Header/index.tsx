import React, { useContext } from 'react';
import StyledHeader from './style';
import imgLogo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { UserContext } from '../../providers/UserContext';
import { StyledButton } from '../../styles/button';
import { StyledParagraph, StyledTitle } from '../../styles/typograthy';
import menuBurger from '../../assets/menu hamburguer.svg';

const Header = () => {
  const navRef = React.useRef<HTMLElement | null>(null);

  const { user, logoutUser } = useContext(UserContext);

  const showNavBar = () => {
    navRef.current?.classList.toggle('responsive_nav');
  };

  return (
    <StyledHeader>
      <div className='logo-box'>
        <img src={imgLogo} alt='logo' />
      </div>
      <nav ref={navRef}>
        <Link to={'/'}>
          <StyledParagraph $fontColor='grey'>Home</StyledParagraph>
        </Link>
        <Link to={'/house'}>
          <StyledParagraph $fontColor='grey'>Galeria</StyledParagraph>
        </Link>
        {user ? (
          <>
            <Link to={'/dashboard'}>
              <StyledParagraph $fontColor='grey'>Perfil</StyledParagraph>
            </Link>
            <StyledButton
              onClick={logoutUser}
              $buttonSize='short'
              $buttonStyle='none'
            >
              <StyledParagraph $fontColor='grey'>Sair</StyledParagraph>
            </StyledButton>
          </>
        ) : (
          <>
            <Link to={'/login'}>
              <StyledParagraph $fontColor='grey'>Entrar</StyledParagraph>
            </Link>
            <Link to={'/register'}>
              <StyledParagraph $fontColor='grey'>Cadastrar</StyledParagraph>
            </Link>
          </>
        )}

        <button
          type='button'
          className='nav-btn nav-close-btn'
          onClick={showNavBar}
        >
          <StyledParagraph $fontColor='greyBold'>X</StyledParagraph>
        </button>
      </nav>
      <button type='button' className='nav-btn hamburger' onClick={showNavBar}>
        <img src={menuBurger} alt='' />
      </button>
    </StyledHeader>
  );
};

export default Header;
