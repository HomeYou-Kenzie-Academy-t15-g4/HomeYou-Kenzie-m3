import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  height: 80px;
  width: 100%;
  padding: 0 100px;
  background-color: #fff;
  box-shadow: 0px 2.90909px 5.81818px rgba(0, 0, 0, 0.25);

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      margin-left: 20px;
    }
  }

  .nav-btn {
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    opacity: 0;
    display: none;
  }
  .hamburguer {
    display: none;
  }

  @media (max-width: 800px) {
    padding: 0 30px;

    .hamburguer {
      display: block;
    }

    .nav-btn {
      display: block;
      opacity: 1.5;
    }

    nav {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      background-color: #fff;
      transition: 1s ease;
      transform: translateY(-100vh);
    }

    .responsive_nav {
      transform: none;
    }

    nav .nav-close-btn {
      position: absolute;
      top: 2rem;
      right: 2rem;
    }

    nav a {
      font-size: 1.5rem;
    }
  }
`;

export default StyledHeader;
