import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HousesContext } from '../../../providers/HousesContext';
import { IHouse } from '../../../providers/HousesContext/types';
import { StyledButtonLink } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typograthy';
import { StyledList } from './style';

const HouseCard = () => {
  const { housesList } = useContext(HousesContext);

  return (
    <div>
      <StyledList>
        {housesList.map((house: IHouse) => (
          <Link className='house-link' to={'/house'}>
            {/* fiz uma 'gambiarra' com esse link enquanto o bug não resolve */}
            <li key={house.id} onClick={() => console.log(house.id)}>
              <div className='image-box'>
                <img src={house.photos[0]} alt='Image House' />
              </div>

              <div className='text-box'>
                <StyledParagraph $fontWeight='two' $fontColor='greyBold'>
                  {house.city}, {house.state}
                </StyledParagraph>
                <StyledParagraph $fontColor='grey' $fontWeight='three'>
                  Alugar
                </StyledParagraph>
              </div>
              {/* esse link esta bugado, não sei nem consegui entender o motivo, se alguém conseguir consertar */}
              {/* <Link to={'/house'} className='link-house'>
              ↗
            </Link> */}
            </li>
          </Link>
        ))}
      </StyledList>
    </div>
  );
};

export default HouseCard;
