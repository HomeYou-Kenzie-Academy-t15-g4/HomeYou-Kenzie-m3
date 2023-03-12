import React, { useContext, useEffect } from 'react';

import { HousesContext } from '../../providers/HousesContext';
import { ModalsContext } from '../../providers/ModalsContext';
import CommentsCard from '../../components/Cards/CommentsCard';
import Header from '../../components/Header';
import IconsMatch from '../../components/IconsMatch';
import Modal from '../../components/Modal';
import SectionSpacer from '../../components/SectionSpacer';
import { CardSlider } from '../../components/Slider/carrousels/CardCarrousel';
import { StyledButton } from '../../styles/button';
import { StyledCaption, StyledTitle } from '../../styles/typograthy';
import { Container } from '../../styles/global';
import { StyledHousePage } from './style';

const HousePage = () => {
  const { isOpen, setIsOpen } = useContext(ModalsContext);
  const { selectedHouse, loadOneHouse } = useContext(HousesContext);

  useEffect(() => {
    loadOneHouse(2);
    console.log(selectedHouse);
  }, []);

  console.log(selectedHouse?.accommodation?.beds);
  const capacity =
    Number(selectedHouse?.accommodation?.beds) +
    2 * Number(selectedHouse?.accommodation?.doubleBeds);
  const beds =
    Number(selectedHouse?.accommodation?.beds) +
    Number(selectedHouse?.accommodation?.doubleBeds);

  return (
    <>
      <Header />
      <StyledHousePage>
        {isOpen ? (
          <Modal title='modal'>
            <div></div>
          </Modal>
        ) : null}

        <button type='button' onClick={() => setIsOpen(true)}>
          Abrir
        </button>

        <button
          style={{ paddingBottom: '65px' }}
          type='button'
          onClick={() => setIsOpen(true)}
        >
          Abrir
        </button>

        <section>
          <Container>
            <div className='mainTitle'>
              <StyledTitle $fontSize='two' $fontColor='greyBold' tag='h2'>
                {selectedHouse?.name}
              </StyledTitle>
              <StyledCaption>
                {capacity} hospedes - {beds} camas{' '}
              </StyledCaption>
            </div>
          </Container>

          <section className='galerySection'>
            <StyledTitle
              $textAlign='center'
              $fontSize='two'
              $fontColor='greyBold'
              tag='h2'
            >
              Galeria
            </StyledTitle>
            <div
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
              }}
            ></div>
            <div className='sliderBox'>
              {selectedHouse?.photos ? <CardSlider></CardSlider> : null}
            </div>
          </section>
          <Container>
            <div className='reserveSection'>
              <StyledTitle
                $textAlign='center'
                $fontSize='two'
                $fontColor='greyBold'
                tag='h2'
              >
                Galeria
              </StyledTitle>
              <StyledCaption>Interessado em alugar essa casa?</StyledCaption>

              <StyledButton
                /* onClick={FunçãoModaldeReserva(selectedHouse?.id)} */ type='button'
                $buttonSize='short'
                $buttonStyle='primary'
              >
                Reservar
              </StyledButton>
            </div>
            <section className='infoSection' id='infoSection'>
              <article>
                <StyledTitle $fontSize='two' $fontColor='grey' tag='h2'>
                  Comodidades
                </StyledTitle>
                <ul>
                  {selectedHouse?.services?.map((service) => {
                    return (
                      <li key={service}>
                        <span className='iconBox'>
                          <IconsMatch iconName={service} />
                        </span>
                        <StyledCaption className='servicesName'>
                          {service}
                        </StyledCaption>
                        {/* <p className='servicesName'>{service}</p> */}
                      </li>
                    );
                  })}
                </ul>
              </article>
              <SectionSpacer />
              <article>
                <StyledTitle $fontSize='two' $fontColor='grey' tag='h2'>
                  Detalhes do local
                </StyledTitle>
                <div className='detailsTextBox'>
                  <StyledCaption>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti hic corporis dicta sapiente est asperiores omnis
                    ipsum odio. Eius facere totam eligendi ut beatae rerum? Cum
                    consequatur animi aut consequuntur!Lorem, ipsum dolor sit
                    amet consectetur adipisicing elit. Corrupti hic corporis
                    dicta sapiente est asperiores omnis ipsum odio. Eius facere
                    totam eligendi ut beatae rerum? Cum consequatur animi aut
                    consequuntur! Eius facere totam eligendi ut beatae rerum?
                    Cum consequatur animi aut consequuntur!
                  </StyledCaption>
                </div>
              </article>
            </section>
            <div className='reserveSection'>
              <StyledTitle
                $textAlign='center'
                $fontSize='two'
                $fontColor='grey'
                tag='h2'
              >
                Orçamento
              </StyledTitle>
              <StyledCaption>Interessado em alugar essa casa?</StyledCaption>

              <StyledButton
                /* onClick={FunçãoModaldeReserva(selectedHouse?.id)} */ type='button'
                $buttonSize='short'
                $buttonStyle='primary'
              >
                Reservar
              </StyledButton>
            </div>
            <section className='infoSection' id='infoSection'>
              <article>
                <StyledTitle $fontSize='two' $fontColor='grey' tag='h2'>
                  Comodidades
                </StyledTitle>
                <ul>
                  {selectedHouse?.services?.map((service) => {
                    return (
                      <li key={service}>
                        <span className='iconBox'>
                          <IconsMatch iconName={service} />
                        </span>
                        <StyledCaption className='servicesName'>
                          {service}
                        </StyledCaption>
                        {/* <p className='servicesName'>{service}</p> */}
                      </li>
                    );
                  })}
                </ul>
              </article>
              <SectionSpacer />
              <article>
                <StyledTitle $fontSize='two' $fontColor='grey' tag='h2'>
                  Detalhes do local
                </StyledTitle>
                <div className='detailsTextBox'>
                  <StyledCaption>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti hic corporis dicta sapiente est asperiores omnis
                    ipsum odio. Eius facere totam eligendi ut beatae rerum? Cum
                    consequatur animi aut consequuntur!Lorem, ipsum dolor sit
                    amet consectetur adipisicing elit. Corrupti hic corporis
                    dicta sapiente est asperiores omnis ipsum odio. Eius facere
                    totam eligendi ut beatae rerum? Cum consequatur animi aut
                    consequuntur! Eius facere totam eligendi ut beatae rerum?
                    Cum consequatur animi aut consequuntur!
                  </StyledCaption>
                </div>
              </article>
            </section>
          </Container>
        </section>

        <CommentsCard />
      </StyledHousePage>
    </>
  );
};

export default HousePage;
