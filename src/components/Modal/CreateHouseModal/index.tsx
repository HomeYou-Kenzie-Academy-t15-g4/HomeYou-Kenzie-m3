import { useContext } from 'react';
import { HousesContext } from '../../../providers/HousesContext';
import HouseForm from '../../Forms/HouseForm';

const CreateHouseModal = () => {
  const { createHouse } = useContext(HousesContext);

  return (
    <article className='inside'>
      <HouseForm
        submitFunction={createHouse}
        children={<button type='submit'>Cadastrar</button>}
      />
    </article>
  );
};

export default CreateHouseModal;
