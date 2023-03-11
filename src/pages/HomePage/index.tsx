<<<<<<< HEAD
import { useContext, useState } from 'react';
=======
import React, { useContext, useState, useEffect } from 'react';
import HouseCard from '../../components/Cards/HouseCard';
>>>>>>> bd9d7ac188bd78f9ba816c8fe6304c07153797bf
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import Ratinng from '../../components/Rating';
import { ModalsContext } from '../../providers/ModalsContext';
<<<<<<< HEAD
import {
  StyledButton,
  StyledSectionHomePage,
  StyledRatingFavorite,
} from './style';
import { FcLikePlaceholder, FcLike } from 'react-icons/fc';

const HomePage = () => {
  const { isOpen, setIsOpen } = useContext(ModalsContext);
  const [isLike, setIsLike] = useState(false);
=======
import { StyledButton } from '../../styles/button';
import { Container } from '../../styles/global';
import { StyledParagraph, StyledTitle } from '../../styles/typograthy';
import StyledSectionHomePage from './style';
import homeBg from '../../assets/home-bg.svg';
import imgLanding from '../../assets/hom-landing.svg';

const HomePage = () => {
  // const { isOpen, setIsOpen } = useContext(ModalsContext);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleReSize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleReSize);
    return () => window.removeEventListener('resize', handleReSize);
  }, []);

  const showSection = screenWidth > 900;
>>>>>>> bd9d7ac188bd78f9ba816c8fe6304c07153797bf

  return (
    <>
      <StyledSectionHomePage>
        <Header />
        <section className='home-section'>
          <div className='bg-box'>
            <Container>
              <div className='separe-itens'>
                <div className='text-box'>
                  {showSection ? (
                    <StyledTitle tag='h1' $fontSize='one' $fontColor='grey'>
                      Ajudar você a encontrar <br />o melhor conforto, <br />é
                      nossa prioridade
                    </StyledTitle>
                  ) : (
                    <StyledTitle tag='h1' $fontSize='two' $fontColor='grey'>
                      Ajudar você a encontrar <br />o melhor conforto, <br />é
                      nossa prioridade
                    </StyledTitle>
                  )}

                  <StyledParagraph $fontColor='grey' $textAlign='left'>
                    Encontre uma variedade de propriedades que combinam com
                    você. Esqueça todas as dificuldades em encontrar uma
                    residência
                  </StyledParagraph>

                  <StyledButton $buttonSize='short' $buttonStyle='primary'>
                    Ver casas
                  </StyledButton>
                </div>
                {showSection && (
                  <div className='image-box'>
                    <img src={homeBg} alt='' />
                  </div>
                )}
              </div>
            </Container>
          </div>
        </section>

        <section>
          <Container>
            <StyledTitle
              $textAlign='center'
              $fontSize='two'
              $fontColor='greyBold'
              tag='h3'
            >
              Galeria
            </StyledTitle>
            <HouseCard />
          </Container>
        </section>
      </StyledSectionHomePage>

      <button type='button' onClick={() => setIsOpen(true)}>
        Abrir
      </button> 
      <Footer /> 
    </>
  );
};

export default HomePage;
