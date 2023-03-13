import React from 'react';
import DataComments from '../../Comments';
import _ from 'lodash';
import {
  StyledContainerCardComment,
  StyledInfoUserComment,
  StyledPDataComment,
  StyledPDescriptionComment,
  StyledPNameComment,
} from './style';
import {
  StyledCaption,
  StyledParagraph,
  StyledTitle,
} from '../../../styles/typograthy';

const CommentsCard = () => {
  const commentRandom = _.shuffle(DataComments);
  const commentLimit = commentRandom.slice(0, 4);

  return (
    <div>
      <div>
        <StyledContainerCardComment>
          {commentLimit.map((comentarios) => (
            <li key={comentarios.idC}>
              <div>
                <StyledInfoUserComment>
                  <img src={comentarios.img} alt='Imagem usuario' />
                  <div className='contentBox'>
                    <StyledPNameComment>
                      <StyledTitle
                        $fontSize='two'
                        children={comentarios.name}
                        tag='h3'
                      ></StyledTitle>
                    </StyledPNameComment>
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
      </div>
    </div>
  );
};

export default CommentsCard;
