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

  .inside {
    animation: ${Animation} 0.5s;
    background-color: #ffff;
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-radius: 10px;

    box-shadow: 5px 5px 1px 1px black;
  }

  header {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
  }
`;

export default StyledModal;
