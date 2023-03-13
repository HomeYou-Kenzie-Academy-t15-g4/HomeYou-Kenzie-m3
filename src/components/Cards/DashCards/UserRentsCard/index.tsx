import { useContext, useState, useEffect } from 'react';
import { HousesContext } from '../../../../providers/HousesContext';
import { ModalsContext } from '../../../../providers/ModalsContext';
import { UserContext } from '../../../../providers/UserContext';
import { StyledButton } from '../../../../styles/button';
import {
  StyledCaption,
  StyledParagraph,
  StyledTitle,
} from '../../../../styles/typograthy';
import { UserRentsSection } from './style';

const UserRentsCards = () => {
  const { housesRent } = useContext(HousesContext);
  const { user } = useContext(UserContext);
  const { callManageReserve } = useContext(ModalsContext);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleReSize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleReSize);
    return () => window.removeEventListener('resize', handleReSize);
  }, []);

  const showSection = screenWidth > 900;

  const rentsUserHouses = housesRent.filter(
    (house) => house.userId === user?.id
  );


  return (
    <UserRentsSection>
      <div className='title-box'>
        <StyledTitle
          tag='h3'
          $fontSize='three'
          $fontColor='greyBold'
          $textAlign='left'
        >
          Gerenciar reservas
        </StyledTitle>

        {showSection && (
          <StyledButton
            $buttonSize='short'
            $buttonStyle='primary'
            type='button'
            onClick={() => callManageReserve()}
          >
            Agendar viagem
          </StyledButton>
        )}
      </div>

      <ul className='houses-list'>
        {rentsUserHouses.map((house) => (
          <li className='houses-box' key={house.id}>
            <div className='button-box'>
              <StyledTitle tag='h2' $fontSize='three' $fontColor='grey'>
                {house.house.name}
              </StyledTitle>

              <StyledButton
                $buttonSize='short'
                $buttonStyle='none'
                onClick={() => console.log('clic')}
              >
                <StyledCaption>pen</StyledCaption>
              </StyledButton>
            </div>

            <div className='image-box'>
              <img src={house.house.photos[0]} alt={house.house.name} />
            </div>

            {house.rentedDays.length > 0 ? (
              <div className='reserve-box'>
                <div className='checkin-box'>
                  <StyledTitle $fontSize='three' $fontColor='grey' tag='h3'>
                    Checkin
                  </StyledTitle>
                  <StyledParagraph $fontColor='grey' $fontWeight='three'>
                    {house.rentedDays[0]}
                  </StyledParagraph>
                </div>

                <div className='checkout-box'>
                  <StyledTitle $fontSize='three' $fontColor='grey' tag='h3'>
                    Checkout
                  </StyledTitle>
                  <StyledParagraph $fontColor='grey' $fontWeight='three'>
                    {house.rentedDays[1]}
                  </StyledParagraph>
                </div>
              </div>
            ) : (
              <div className='no-reserve-box'>
                <StyledTitle
                  tag='h2'
                  $fontSize='three'
                  $fontColor='greyBold'
                  $textAlign='center'
                >
                  Sem reserva
                </StyledTitle>
              </div>
            )}
          </li>
        ))}
      </ul>

      {!showSection && (
        <div className='button-mobile'>
          <StyledButton
            $buttonSize='short'
            $buttonStyle='primary'
            type='button'
            onClick={() => callManageReserve()}
          >
            Agendar viagem
          </StyledButton>
        </div>
      )}
    </UserRentsSection>
  );
};

export default UserRentsCards;
