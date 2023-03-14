import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const { housesRent, selectedRent, setSelectedRent, loadOneHouse } =
    useContext(HousesContext);
  const { user } = useContext(UserContext);
  const { callManageReserve, callCreateReserve } = useContext(ModalsContext);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  useEffect(() => {
    const handleReSize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleReSize);
    return () => window.removeEventListener('resize', handleReSize);
  }, []);

  const EditReserv = (house: any) => {
    const thisRent = housesRent.find((Rent) => Rent.id == house.id) ?? null;
    setSelectedRent(thisRent);
    loadOneHouse(house.house.id);
    callManageReserve();
  };

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

        {showSection && rentsUserHouses.length > 0 && (
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
                onClick={() => EditReserv(house)}
              >
                <StyledCaption className='edit-button'>Editar</StyledCaption>
              </StyledButton>
            </div>

            <div className='image-box'>
              <img src={house.house.photos[0]} alt={house.house.name} />
            </div>

            {house.rentedDays.length > 0 ? (
              <div className='reserve-box'>
                <div className='checkin-box'>
                  <StyledTitle $textAlign='center' $fontSize='three' $fontColor='grey' tag='h3'>
                    Checkin
                  </StyledTitle>
                  <StyledParagraph $fontColor='grey' $fontWeight='three'>
                    {new Date(house.rentedDays[0]).toLocaleString('default', {
                      day: '2-digit',
                    })}
                    /
                    {new Date(house.rentedDays[0]).toLocaleString('default', {
                      month: '2-digit',
                    })}
                    /
                    {new Date(house.rentedDays[0]).toLocaleString('default', {
                      year: 'numeric',
                    })}
                  </StyledParagraph>
                </div>

                <div className='checkout-box'>
                  <StyledTitle $textAlign='center' $fontSize='three' $fontColor='grey' tag='h3'>
                    Checkout
                  </StyledTitle>
                  <StyledParagraph $fontColor='grey' $fontWeight='three'>
                    {new Date(
                      house.rentedDays[house.rentedDays.length - 1]
                    ).toLocaleString('default', {
                      day: '2-digit',
                    })}
                    /
                    {new Date(
                      house.rentedDays[house.rentedDays.length - 1]
                    ).toLocaleString('default', {
                      month: '2-digit',
                    })}
                    /
                    {new Date(
                      house.rentedDays[house.rentedDays.length - 1]
                    ).toLocaleString('default', {
                      year: 'numeric',
                    })}
                  </StyledParagraph>
                </div>
              </div>
            ) : (
              <div className='no-reserve-box'>
                <StyledTitle
                  tag='h2'
                  $fontSize='three'
                  $fontColor='grey'
                  $textAlign='center'
                >
                  Nenhuma reserva
                </StyledTitle>
              </div>
            )}
          </li>
        ))}
        {rentsUserHouses.length <= 1 && (
          <div onClick={() => navigate('/')} className='add-button-box'>
            {rentsUserHouses.length == 0 && (
              <StyledParagraph $fontColor='grey' $fontWeight='three'>
                Agende já sua viagem!
              </StyledParagraph>
            )}
            <img
              className='add-button'
              alt='Buscar nova reserva casa'
              src='../../../../../src/assets/buttonAdd.svg'
            />
          </div>
        )}
      </ul>

      {!showSection && rentsUserHouses.length > 0 && (
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
