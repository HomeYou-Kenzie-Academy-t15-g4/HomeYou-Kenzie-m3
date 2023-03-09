import { useContext, useEffect } from 'react';
import { HousesContext } from '../../../providers/HousesContext';
import HouseForm from '../../Forms/HouseForm';

interface IManageHouseProps {
  id: number;
}

const ManageHouseModal = ({ id }: IManageHouseProps) => {
  const { editHouse, deleteHouse, loadOneHouse, selectedHouse } =
    useContext(HousesContext);

  useEffect(() => {
    loadOneHouse(id)      
    
  }, []);

  return (
    <article>
      <h3>Cadastrar Casa</h3>

      <HouseForm 
        submitFunction={editHouse}
        children={
          <div>
            <button type='submit'>Salvar</button>{' '}
            <button type='button' onClick={() => deleteHouse()}>
              Excluir
            </button>
          </div>
        }
      />
    </article>
  );
};

export default ManageHouseModal;










  
  // useEffect(() => {
  // if (selectedHouse) {
  //   const stateUF = statesDatabase.find(
  //     (e) => e.sigla === selectedHouse?.state
  //   );
  //   const values = {
  //     houseName: selectedHouse?.name,
  //     photos: selectedHouse?.photos.map((photo) => ({
  //       value: photo,
  //       label: photo,
  //     })),
  //     state: stateUF ? stateUF.id : null,
  //     city: { value: selectedHouse?.city, label: selectedHouse?.city },
  //     dailyPrice: selectedHouse?.daylyPrice,
  //     singleBed: selectedHouse?.accommodation.beds,
  //     doubleBed: selectedHouse?.accommodation.doubleBeds,
  //     services: selectedHouse?.services.map((service) => ({
  //       value: service,
  //       label: service,
  //     })),
  //   };
  //   setLoadValues(values)    
  // }    
  
  // }, [selectedHouse]);