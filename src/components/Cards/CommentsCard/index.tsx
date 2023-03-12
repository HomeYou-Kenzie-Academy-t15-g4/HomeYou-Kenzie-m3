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
                      <strong>{comentarios.name}</strong>
                    </StyledPNameComment>
                    <StyledPDataComment>{comentarios.date}</StyledPDataComment>
                  </div>
                </StyledInfoUserComment>
                <StyledPDescriptionComment>
                  {comentarios.description}
                </StyledPDescriptionComment>
              </div>
            </li>
          ))}
        </StyledContainerCardComment>
      </div>
    </div>
  );
};

export default CommentsCard;
