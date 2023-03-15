import React from 'react';
import DataComments from '../../Comments';
import _ from 'lodash';
import {
  CommentsSection,
  StyledContainerCardComment,
  StyledInfoUserComment,
} from './style';
import {
  StyledCaption,
  StyledParagraph,
  StyledTitle,
} from '../../../styles/typograthy';
import { Container } from '../../../styles/global';

const CommentsCard = () => {
  const commentRandom = _.shuffle(DataComments);
  const commentLimit = commentRandom.slice(0, 4);

  return (
    <CommentsSection>
      <Container>
        <StyledContainerCardComment>
          {commentLimit.map((comentarios) => (
            <li className='comments-box' key={comentarios.idC}>
              <div>
                <StyledInfoUserComment>
                  <img src={comentarios.img} alt='Imagem usuario' />
                  <div className='contentBox'>
                    <StyledTitle
                      $fontSize='two'
                      children={comentarios.name}
                      tag='h3'
                    ></StyledTitle>
                    <StyledCaption>{comentarios.date}</StyledCaption>
                  </div>
                </StyledInfoUserComment>
                <StyledParagraph $textAlign='left'>
                  {comentarios.description}
                </StyledParagraph>
              </div>
            </li>
          ))}
        </StyledContainerCardComment>
      </Container>
    </CommentsSection>
  );
};

export default CommentsCard;
