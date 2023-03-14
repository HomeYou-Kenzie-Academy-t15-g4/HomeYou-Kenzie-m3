import { useContext } from 'react';
import { HousesContext } from '../../../providers/HousesContext';
import { ModalsContext } from '../../../providers/ModalsContext';
import { StyledButton } from '../../../styles/button';
import HouseForm from '../../Forms/HouseForm';

const ManageHouseModal = () => {
  const { closeModal } = useContext(ModalsContext);
  const { editHouse, deleteHouse } = useContext(HousesContext);

  const deleteIt = () => {
    deleteHouse()
    closeModal()
  }  

  return (
      <HouseForm
        submitFunction={editHouse}
        children={
          <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
            <StyledButton style={{width: '45%'}} type='submit' $buttonSize='medium' $buttonStyle='primary'>Salvar</StyledButton>
            <StyledButton style={{width: '45%'}} onClick={() => deleteIt()} type='button' $buttonSize='medium' $buttonStyle='default'>Excluir</StyledButton>
            
            
          </div>
        }
      />
  );
};

export default ManageHouseModal;
