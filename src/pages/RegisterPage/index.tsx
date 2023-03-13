import React, { useState, useEffect } from 'react';
import RegisterForm from '../../components/Forms/RegisterForm';
import { StyledRegisterPage } from './style';
import registerImg from '../../assets/register-asside-img.svg';
import logo from '../../assets/HomeYou.svg';
import { Link } from 'react-router-dom';
import { StyledTitle } from '../../styles/typograthy';

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
          <Link to={'/login'}>
            <StyledTitle $fontColor='grey' tag='h3' $fontSize='three'>
              Voltar pro Login
            </StyledTitle>
          </Link>
        </div>
        <RegisterForm />
      </section>

      </div>
      {showSection && (
        <section className='image-section'>
          <div>
            <img src={registerImg} alt='' />
          </div>
        </section>
      )}
    </StyledRegisterPage>
  );
};

export default RegisterPage;
