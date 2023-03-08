import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80px;
  padding: 0 2rem;
  background-color: #fff;
  color: black;
  box-shadow: 0 4px 10px -4px #5767aa;

  nav a {
    margin: 0 2rem;
    color: black;
    text-decoration: none;
    font-weight: 600;
    font-family: sans-serif;

    &:hover {
      color: #04c35c;
    }
  }

  .nav-btn {
    padding: 5px;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    color: black;
    visibility: hidden;
    opacity: 0;
    font-size: 1.8rem;
  }

  @media (max-width: 1024px) {
    .nav-btn {
      visibility: visible;
      opacity: 1;
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
      background-color: var(--mainColor);
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
