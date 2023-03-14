import { useContext, useState, useEffect } from 'react';
import { HousesContext } from '../../../../providers/HousesContext';
import { UserContext } from '../../../../providers/UserContext';
import { ModalsContext } from '../../../../providers/ModalsContext';
import buttonAdd from '../../../../assets/buttonAdd.svg';

import { StyledButton } from '../../../../styles/button';
import {
  StyledCaption,
  StyledParagraph,
  StyledTitle,
} from '../../../../styles/typograthy';
import { UserHousesSection } from './style';

const HouseDashCard = () => {
  const { housesList, housesRent } = useContext(HousesContext);
  const { user } = useContext(UserContext);
  const { callManageHouse, callCreateHouse } = useContext(ModalsContext);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const userHouses = housesList.filter((house) => house.userId == user?.id);
  const userRents = userHouses.filter((house) =>
    housesRent.some((rent) => rent.house.id === house.id)
  );

  useEffect(() => {
    const handleReSize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleReSize);
    return () => window.removeEventListener('resize', handleReSize);
  }, []);

  const showSection = screenWidth > 900;

  return (
    <UserHousesSection>
      <div className='title-box'>
        <StyledTitle
          tag='h3'
          $fontSize='three'
          $fontColor='greyBold'
          $textAlign='left'
        >
          Gerenciar casas
        </StyledTitle>

        {showSection && userHouses.length > 0 && (
          <StyledButton
            $buttonSize='short'
            $buttonStyle='primary'
            type='button'
            onClick={() => callCreateHouse()}
          >
            Cadastrar Casa
          </StyledButton>
        )}
      </div>

      <ul className='houses-list'>
        {userHouses.map((house) => (
          <li className='houses-box' key={house.id}>
            <div className='button-box'>
              <StyledTitle tag='h2' $fontSize='three' $fontColor='grey'>
                {house.name}
              </StyledTitle>

              <StyledButton
                $buttonSize='short'
                $buttonStyle='none'
                onClick={() => callManageHouse(Number(house.id))}
              >
                <StyledCaption className='edit-button'>Editar</StyledCaption>
              </StyledButton>
            </div>

            <div className='image-box'>
              {Array.isArray(house.photos) && house.photos.length > 0 && (
                <img src={house.photos[0]} alt={house.name} />
              )}
            </div>

            <div className='reserve-box'>
              <StyledParagraph $fontColor='grey' $fontWeight='three'>
                Reservas ativas:
              </StyledParagraph>
              <StyledParagraph $fontColor='grey' $fontWeight='three'>
                {userRents.length}
              </StyledParagraph>
            </div>
          </li>
        ))}
        {userHouses.length <= 1 && (
          <div onClick={() => callCreateHouse()} className='add-button-box'>
            {userHouses.length == 0 && (
              <StyledParagraph $fontColor='grey' $fontWeight='three'>
                Cadastrar nova casa
              </StyledParagraph>
            )}
            <img
              className='add-button'
              alt='Botão cadastrar casa'
              src={buttonAdd}
            />
          </div>
        )}
      </ul>

      {!showSection && userHouses.length > 0 && (
        <div className='button-mobile'>
          <StyledButton
            $buttonSize='short'
            $buttonStyle='primary'
            type='button'
            onClick={() => callCreateHouse()}
          >
            Cadastrar Casa
          </StyledButton>
        </div>
      )}
    </UserHousesSection>
  );
};

export default HouseDashCard;
