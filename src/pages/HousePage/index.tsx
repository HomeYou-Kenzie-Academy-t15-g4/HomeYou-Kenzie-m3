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
import Skeleton from '@mui/material/Skeleton';
import { UserContext } from '../../providers/UserContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import LikeButton from '../../components/LikeButton';
import ReservForm from '../../components/Forms/ReservForm';

const HousePage = (id: number) => {
  const { loading } = useContext(UserContext);
  const { isOpen, callCreateReserve } = useContext(ModalsContext);
  const { selectedHouse, loadOneHouse } = useContext(HousesContext);
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    window.scroll(0, 0);
    if (selectedHouse == null) {
      toast.info('Selecione uma casa antes de acessar essa página');
      navigate('/');
    }
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
      {loading || selectedHouse?.name == '' ? (
        <Container>
          <Skeleton
            variant='rounded'
            animation='wave'
            width={'100%'}
            height={48}
            sx={{ marginTop: '80px', marginBottom: '20px' }}
          />
          <Skeleton
            variant='rounded'
            animation='wave'
            width={'100%'}
            height={400}
            sx={{ marginBottom: '10px' }}
          />
          <Skeleton
            variant='rounded'
            animation='wave'
            width={'100%'}
            height={80}
            sx={{ marginBottom: '10px' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Skeleton
              variant='rounded'
              animation='wave'
              width={'45%'}
              height={180}
            />

            <Skeleton
              variant='rounded'
              animation='wave'
              width={'45%'}
              height={180}
            />
          </div>
        </Container>
      ) : (
        <StyledHousePage>
          {isOpen ? (
            <Modal title='modal'>
              <ReservForm />
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
                  <LikeButton />
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
                {user ? (
                  <StyledButton
                    type='button'
                    $buttonSize='short'
                    $buttonStyle='primary'
                    onClick={() => callCreateReserve()}
                  >
                    Reservar
                  </StyledButton>
                ) : (
                  <Link to={'/login'}>
                    <StyledButton
                      type='button'
                      $buttonSize='short'
                      $buttonStyle='primary'
                    >
                      Reservar
                    </StyledButton>
                  </Link>
                )}
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
        </StyledHousePage>
      )}
    </>
  );
};

export default HousePage;
