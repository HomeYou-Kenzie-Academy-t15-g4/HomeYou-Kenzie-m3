import styled from 'styled-components';
import Animation from '../../styles/animations';

const StyledModal = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
  background: rgba(51, 51, 51, 0.5);
  z-index: 1001;

  div {
    animation: ${Animation} 0.5s;
    width: 100%;
    max-width: 900px;
    background-color: #ffff;
    border-radius: 8px;
  }
  header {
    display: flex;
    justify-content: end;
    padding: 0.5rem;
  }
`;

export default StyledModal;
