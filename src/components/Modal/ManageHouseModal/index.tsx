import { useContext } from 'react';
import { HousesContext } from '../../../providers/HousesContext';
import { ModalsContext } from '../../../providers/ModalsContext';
import HouseForm from '../../Forms/HouseForm';

const ManageHouseModal = () => {
  const { closeModal } = useContext(ModalsContext);
  const { editHouse, deleteHouse } = useContext(HousesContext);

  const deleteIt = () => {
    deleteHouse()
    closeModal()
  }  

  return (
    <article>
      <h3>Editar Casa</h3>

      <HouseForm
        submitFunction={editHouse}
        children={
          <div>
            <button type='submit'>Salvar</button>{' '}
            <button type='button' onClick={() => deleteIt()}>
              Excluir
            </button>
          </div>
        }
      />
    </article>
  );
};

export default ManageHouseModal;
