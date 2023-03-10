import { useContext } from 'react';
import { HousesContext } from '../../../../providers/HousesContext';
import { UserContext } from '../../../../providers/UserContext';

const HouseDashCard = () => {
  const { housesList, housesRent } = useContext(HousesContext);
  const { user } = useContext(UserContext);

  const userHouses = housesList.filter((house) => house.userId === user?.id);
  const userRents = userHouses.filter((house) =>
    housesRent.some((rent) => rent.house.id === house.id)
  );

  return (
    <div>
      <ul>
        {userHouses.map((house) => (
          <li key={house.id}>
            <div>
              <h2>{house.name}</h2>
              {/* btn abrir modal */}
            </div>
            <p>{house.city}</p>
            <img src={house.photos[0]} alt={house.name} />
            <div>
              <p>Reservas ativas: {userRents.length}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HouseDashCard;
