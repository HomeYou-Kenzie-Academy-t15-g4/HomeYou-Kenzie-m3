import { useContext } from 'react';

import { ModalsContext } from '../../../providers/ModalsContext';
import { UserContext } from '../../../providers/UserContext';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typograthy';
import { UserSection } from './style';

const UsserInfoard = () => {
  const { user } = useContext(UserContext);
  const { callEditUser } = useContext(ModalsContext);

  return (
    <UserSection>
      <div className='user-info'>
        <div className='bg-user'>
          <div className='box-img'>
            <img src={user?.img} alt={user?.name} />
          </div>
        </div>

        <div className='user-info-box'>
          <StyledTitle
            tag='h3'
            $fontSize='three'
            $fontColor='greyBold'
            $textAlign='center'
          >
            {user?.name}
          </StyledTitle>
          <StyledParagraph
            $fontWeight='three'
            $fontColor='grey'
            $textAlign='center'
          >
            {user?.age} anos
          </StyledParagraph>
          <div className='detail'></div>

          <StyledButton
            $buttonSize='short'
            $buttonStyle='none'
            onClick={() => callEditUser()}
          >
            Editar perfil
          </StyledButton>
        </div>
      </div>
    </UserSection>
  );
};

export default UsserInfoard;
