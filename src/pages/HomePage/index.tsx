import React, { useContext, useState, useEffect } from 'react';
import HouseCard from '../../components/Cards/HouseCard';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import { ModalsContext } from '../../providers/ModalsContext';
import { StyledButton } from '../../styles/button';
import { Container } from '../../styles/global';
import { StyledParagraph, StyledTitle } from '../../styles/typograthy';
import StyledSectionHomePage from './style';
import homeBg from '../../assets/home-bg.svg';

const HomePage = () => {
  // const { isOpen, setIsOpen } = useContext(ModalsContext);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleReSize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleReSize);
    return () => window.removeEventListener('resize', handleReSize);
  }, []);

  const showSection = screenWidth > 900;

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
      {/* {isOpen ? (
        <Modal>
          <div></div>
        </Modal>
      ) : null}
      <button type='button' onClick={() => setIsOpen(true)}>
        Abrir
      </button> */}

      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
