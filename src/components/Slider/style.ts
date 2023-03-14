import styled from 'styled-components';
import { Swiper } from 'swiper/react';

const StyledSlider = styled(Swiper)`
  @media only screen and (max-width: 800px) {
    .swiper-button-prev {
      display: none;
    }

    .swiper-button-next {
      display: none;
    }

    .swiper {
      padding-bottom: 32px;
      padding-top: 32px;
    }
  }

  @media only screen and (min-width: 800px) {
    .swiper {
      padding: 32px;
    }
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    height: auto;
  }

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.grey200};
  }

  .swiper-button-disabled {
    color: ${({ theme }) => theme.colors.grey100} !important;
  }

  .swiper-button {
    color: ${({ theme }) => theme.colors.grey200} !important;
  }

  .swiper-button-prev {
    color: #718096;
  }

  .swiper-button-next {
    color: #718096;
  }
`;

export default StyledSlider;
