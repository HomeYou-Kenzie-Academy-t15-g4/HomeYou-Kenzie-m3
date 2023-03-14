import { useContext } from 'react';
import { Slider, Slide, SliderProps } from '../';
import { HousesContext } from '../../../providers/HousesContext';

export function CardSlider({}) {
  const { selectedHouse, loadOneHouse } = useContext(HousesContext);
  const settings: SliderProps = {
    spaceBetween: 50,
    navigation: true,
    pagination: {
      clickable: true,
    },
    draggable: true,
    breakpoints: {
      300: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
      },
      800: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
    },
  };

  return (
    <Slider settings={settings}>
      {selectedHouse &&
        Array.isArray(selectedHouse.photos) &&
        selectedHouse.photos.map((photo, index) => {
          return (
            <Slide key={index}>
              <img src={photo} alt='slide_image' />
            </Slide>
          );
        })}
    </Slider>
  );
}
