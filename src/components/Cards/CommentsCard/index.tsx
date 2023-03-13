import React from 'react';
import DataComments from '../../Comments';
import _ from 'lodash';
import {
  StyledContainerCardComment,
  StyledInfoUserComment,
  StyledPNameComment,
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
    <div>
      <div>
        <StyledContainerCardComment>
          <Container className='container'>
            {commentLimit.map((comentarios) => (
              <li key={comentarios.idC}>
                <div>
                  <StyledInfoUserComment>
                    <img src={comentarios.img} alt='Imagem usuario' />
                    <div className='contentBox'>
                      <StyledTitle $fontSize='two' tag='h3'>
                        <StyledPNameComment>
                          {comentarios.name}
                        </StyledPNameComment>
                      </StyledTitle>
                      <StyledCaption>{comentarios.date}</StyledCaption>
                    </div>
                  </StyledInfoUserComment>
                  <StyledParagraph
                    style={{ maxWidth: '100%', marginTop: '13px' }}
                    $textAlign='left'
                  >
                    {comentarios.description}
                  </StyledParagraph>
                </div>
              </li>
            ))}
          </Container>
        </StyledContainerCardComment>
      </div>
    </div>
  );
};

export default CommentsCard;
