import { useState } from 'react';
import Lottie from 'react-lottie';
import { StyledLikeButton } from './style';
import animationData from './likeAnimation.json';

const LikeButton = () => {
  const [isLiked, setLike] = useState(false);
  const [animationState, setAnimationState] = useState({
    isStopped: true,
    isPaused: false,
  });

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const handleLikeButtonClick = () => {
    setAnimationState({
      ...animationState,
      isStopped: !animationState.isStopped,
    });
    setLike(!isLiked);
  };

  return (
    <StyledLikeButton onClick={handleLikeButtonClick}>
      <div className='animation'>
        <Lottie
          options={defaultOptions}
          height={200}
          width={200}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
        />
      </div>
    </StyledLikeButton>
  );
};

export default LikeButton;
