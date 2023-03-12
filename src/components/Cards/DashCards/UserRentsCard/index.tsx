import { useContext } from 'react';
import { HousesContext } from '../../../../providers/HousesContext';
import { IRent } from '../../../../providers/HousesContext/types';
import { UserContext } from '../../../../providers/UserContext';

const UserRentsCards = () => {
  const { housesRent } = useContext(HousesContext);
  const { user } = useContext(UserContext);


   const rentsUserHouses = housesRent.filter(
      (house) => house.userId === user?.id
      );
  // exemplo, as infos já estão chegando, na hora de estilizar ai já faço com todas infos deixa tudo certinho

  return (
    <div>
      <ul>
        {rentsUserHouses.map((house) => (
          <li key={house.id}>
            <div>
              <h3>{house.house.name}</h3>
              {/* btn open modal */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserRentsCards;
