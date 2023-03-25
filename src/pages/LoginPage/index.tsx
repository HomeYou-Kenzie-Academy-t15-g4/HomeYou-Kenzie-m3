import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LoginForm from '../../components/Forms/LoginForm';
import loginImg from '../../assets/login-asside-img.svg';
import logo from '../../assets/HomeYou.svg';
import { StyledButton } from '../../styles/button';
import { StyledParagraph, StyledTitle } from '../../styles/typograthy';
import { StyledLoginPage } from './style';

const LoginPage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleReSize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleReSize);
    return () => window.removeEventListener('resize', handleReSize);
  }, []);

  const showSection = screenWidth > 900;

  return (
    <StyledLoginPage>
      {showSection && (
        <section className='image-section'>
          <Link className='asside-home-link' to={'/'}>
            <StyledButton $buttonSize='short' $buttonStyle='default'>
              Ir para o site
            </StyledButton>
          </Link>
          <div>
            <img src={loginImg} alt='' />
          </div>
        </section>
      )}
      <div className='login-box'>
        <img src={logo} alt='' />

        <section className='form-section'>
          <div className='text-container'>
            <StyledParagraph $fontColor='grey'>Bem vindo</StyledParagraph>
            <span className='form-title'>
              <StyledTitle $fontColor='grey' tag='h3' $fontSize='two'>
                {showSection ? ' Faça login na sua conta' : 'Faça login'}
              </StyledTitle>
              {!showSection && (
                <div>
                  <StyledParagraph $fontColor='grey'>ou</StyledParagraph>
                  <Link to={'/'}>
                    <StyledParagraph
                      className='form-home-link'
                      $fontColor='greyBold'
                    >
                      Acesse o site
                    </StyledParagraph>
                  </Link>
                </div>
              )}
            </span>
          </div>
          <div className='form-container'>
            <LoginForm />
          </div>
        </section>
      </div>
    </StyledLoginPage>
  );
};

export default LoginPage;
