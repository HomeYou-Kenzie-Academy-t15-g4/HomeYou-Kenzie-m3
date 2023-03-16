import { useContext } from 'react';

import { HousesContext } from '../../../providers/HousesContext';
import { StyledButton } from '../../../styles/button';
import HouseForm from '../../Forms/HouseForm';

const CreateHouseModal = () => {
  const { createHouse } = useContext(HousesContext);

  return (
    <article>
      <HouseForm
        submitFunction={createHouse}
        children={
          <StyledButton
            style={{ width: '100%', borderRadius: '20px', marginTop: '27px' }}
            type='submit'
            $buttonSize='large'
            $buttonStyle='primary'
          >
            Cadastrar casa
          </StyledButton>
        }
      />
    </article>
  );
};

export default CreateHouseModal;
