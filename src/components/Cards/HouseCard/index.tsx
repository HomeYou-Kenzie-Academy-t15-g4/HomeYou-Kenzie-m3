import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { HousesContext } from '../../../providers/HousesContext';
import { IHouse } from '../../../providers/HousesContext/types';
import { StyledParagraph } from '../../../styles/typograthy';
import { StyledList } from './style';

const HouseCard = () => {
  const { housesList, loadOneHouse } = useContext(HousesContext);
  const navigate = useNavigate();

  const callHouse = (id: number) => {
    loadOneHouse(id);
    navigate('/house');
  };

  return (
    <div>
      <StyledList>
        {housesList.map((house: IHouse) => (
          <li className='link-house' key={house.id}>
            <div
              className='image-box'
              onClick={() => callHouse(Number(house.id))}
            >
              <img src={house.photos[0]} alt='Image House' />
            </div>

            <div className='text-box'>
              <StyledParagraph $fontWeight='two' $fontColor='greyBold'>
                <span className='city-name'>{house.city.toLowerCase()}</span>,
                {house.state}
              </StyledParagraph>
              <StyledParagraph $fontColor='grey' $fontWeight='three'>
                Alugar
              </StyledParagraph>
            </div>
          </li>
        ))}
      </StyledList>
    </div>
  );
};

export default HouseCard;
