import { keyframes } from 'styled-components';

const Animation = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  } to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export default Animation;
