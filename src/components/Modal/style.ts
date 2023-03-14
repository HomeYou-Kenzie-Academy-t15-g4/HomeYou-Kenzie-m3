import styled from 'styled-components';
import Animation from '../../styles/animations';

const StyledModal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100vh;
  background: rgba(51, 51, 51, 0.5);
  z-index: 1020;
  overflow-y: auto;
  padding-top: 100px;
  padding-bottom: 50px;
  padding: 50px 2vw;

  .box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .inside {
    min-width: 300px;
    max-width: 700px;
    animation: ${Animation} 0.5s;
    background-color: #ffff;
    border-radius: 10px;
    box-shadow: 3px 3px 3px 1px #2e2e2e37;
    height: max-content;
    padding: 30px;
    @media (max-width: 400px) {
      padding: 10px;
    }
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    margin-bottom: 40px;
  }

  .createReserv {
    display: flex;
    align-items: center;
    span{
      margin-left: 3px;
    }
  }

  header svg {
    height: 20px;
    width: 20px;
    color: #373a3e;
    cursor: pointer;
  }
`;

export default StyledModal;
