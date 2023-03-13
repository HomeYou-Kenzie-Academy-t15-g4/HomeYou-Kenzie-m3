import React, { useState, useEffect } from 'react';
import RegisterForm from '../../components/Forms/RegisterForm';
import { StyledRegisterPage } from './style';
import registerImg from '../../assets/register-asside-img.svg';
import logo from '../../assets/HomeYou.svg';
import { Link } from 'react-router-dom';
import { StyledParagraph, StyledTitle } from '../../styles/typograthy';
import { StyledButton } from '../../styles/button';

const RegisterPage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleReSize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleReSize);
    return () => window.removeEventListener('resize', handleReSize);
  }, []);

  const showSection = screenWidth > 900;

  return (
    <StyledRegisterPage>
      <div className='register-box'>
        <img src={logo} alt='' />
        <section className='form-section'>
          <div className='text-container'>
            <span className='form-title'>
              <StyledTitle $fontColor='grey' tag='h3' $fontSize='two'>
                {showSection ? 'Registre uma nova conta' : 'Cadastre-se'}
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
          <RegisterForm />
        </section>
      </div>
      {showSection && (
        <section className='image-section'>
          <Link className='asside-home-link' to={'/'}>
            <StyledButton $buttonSize='short' $buttonStyle='default'>
              Ir para o site
            </StyledButton>
          </Link>
          <div>
            <img src={registerImg} alt='' />
          </div>
        </section>
      )}
    </StyledRegisterPage>
  );
};

export default RegisterPage;
