import React from 'react';
import DataComments from '../../Comments';
import _ from 'lodash';

const CommentsCard = () => {
  const commentRandom = _.shuffle(DataComments);
  const commentLimit = commentRandom.slice(0, 4);

  return (
    <div>
      <div>
        <ul>
          {commentLimit.map((comentarios) => (
            <li key={comentarios.idC}>
              <div>
                <div>
                  <img src={comentarios.img} alt='Imagem usuario' />
                  <div>
                    <p>
                      <strong>{comentarios.name}</strong>
                    </p>
                    <p>{comentarios.date}</p>
                  </div>
                </div>
                <p>{comentarios.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentsCard;
