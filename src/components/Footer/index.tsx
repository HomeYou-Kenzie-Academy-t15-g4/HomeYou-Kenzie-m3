import React from 'react';
import StyledDivFooter from './style';
import imgFooter from '../../assets/icon.svg';

const Footer = () => {
  return (
    <StyledDivFooter>
      <img src={imgFooter} alt='logo Home You' />
      <div className='footerBody'>
        <h3>Desenvolvido por</h3>
        <div className='footerBody--devs'>
          <span>Dev1</span>
          <span>Dev2</span>
          <span>Dev3</span>
          <span>Dev4</span>
          <span>Dev5</span>
        </div>
      </div>
    </StyledDivFooter>
  );
};

export default Footer;
