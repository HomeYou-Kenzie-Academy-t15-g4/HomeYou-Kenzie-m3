import React, { useContext, useEffect, useState } from 'react';

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
import { StyledHousePage, StyledRatingBox } from './style';
import Ratinng from '../../components/Rating';
import { FcLikePlaceholder, FcLike } from 'react-icons/fc';
import Footer from '../../components/Footer';

const HousePage = (id: number) => {
  const { isOpen, setIsOpen } = useContext(ModalsContext);
  const { selectedHouse, loadOneHouse } = useContext(HousesContext);
  const [isLike, setIsLike] = useState(false);

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

        <section>
          <Container>
            <StyledRatingBox>
              <div className='mainTitle'>
                <StyledTitle $fontSize='two' $fontColor='greyBold' tag='h2'>
                  {selectedHouse?.name}
                </StyledTitle>
                <StyledCaption className='guests'>
                  {capacity} hospedes - {beds} camas
                </StyledCaption>
              </div>
              <div className='btnRating'>
                <Ratinng />
                <button onClick={() => setIsLike(!isLike)}>
                  {isLike ? <FcLikePlaceholder /> : <FcLike />}
                </button>
              </div>
            </StyledRatingBox>
          </Container>

          <section className='galerySection'>
            <Container>
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
            </Container>
          </section>
          <Container>
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
                <div className='servicesBox'>
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
                </div>
              </article>
              <SectionSpacer />
              <article>
                <StyledTitle $fontSize='two' $fontColor='grey' tag='h2'>
                  Detalhes do local
                </StyledTitle>
                <div className='detailsTextBox'>
                  <StyledCaption>{selectedHouse?.houseDesc}</StyledCaption>
                  <Ratinng />
                </div>
              </article>
            </section>
          </Container>
        </section>

        <CommentsCard />

        <Footer />
      </StyledHousePage>
    </>
  );
};

export default HousePage;
