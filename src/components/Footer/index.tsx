import React from 'react';

import { DevLink, Devs, Icon, StyledFooter } from './style';
import icon from '../../assets/icon.svg';
import { StyledCaption, StyledTitle } from '../../styles/typograthy';

const Footer = () => {
  return (
    <StyledFooter>
      <Icon src={icon} alt='HomeYou' />
      <div>
        <StyledTitle
          $textAlign='center'
          $fontSize='three'
          tag='h3'
          $fontColor='greyBold'
        >
          Desenvolvido por
        </StyledTitle>
        <Devs>
          <DevLink
            href='https://www.linkedin.com/in/diego-in%C3%A1cio-a155b022b/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <StyledCaption>Diego Henrique</StyledCaption>
          </DevLink>

          <DevLink
            href='https://www.linkedin.com/in/gabriel-timpone/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <StyledCaption>Gabriel Augusto</StyledCaption>
          </DevLink>

          <DevLink
            href='https://www.linkedin.com/in/gabriel-maciel-5600a6246/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <StyledCaption>Gabriel Maciel</StyledCaption>
          </DevLink>

          <DevLink
            href='https://www.linkedin.com/in/gabriel-sales-bezerra/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <StyledCaption>Gabriel Sales</StyledCaption>
          </DevLink>

          <DevLink
            href='http://linkedin.com/in/gustavo-carraro-192554161'
            target='_blank'
            rel='noopener noreferrer'
          >
            <StyledCaption>Gustavo Carraro</StyledCaption>
          </DevLink>
        </Devs>
      </div>
    </StyledFooter>
  );
};
export default Footer;
