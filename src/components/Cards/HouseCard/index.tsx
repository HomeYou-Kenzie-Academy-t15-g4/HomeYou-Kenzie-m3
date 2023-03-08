import React, { useContext } from 'react';
import { HousesContext } from '../../../providers/HousesContext';
import { IHouse } from '../../../providers/HousesContext/types';

const HouseCard = () => {
  const { housesList } = useContext(HousesContext);

  return (
    <div>
      <ul>
        <div>
          {housesList.map((house: IHouse) => (
            <li key={house.id} onClick={() => console.log(house.id)}>
              <img src={house.photos[0]} alt='Image House' />
              <div>
                <p>
                  <strong>
                    {house.city}, {house.state}
                  </strong>
                </p>
                <p>Alugar</p>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default HouseCard;
