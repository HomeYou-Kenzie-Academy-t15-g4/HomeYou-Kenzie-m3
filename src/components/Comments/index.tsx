import React from 'react';
import { IComments } from './type';
import face1 from '../../assets/face(1).jpeg';
import face2 from '../../assets/face(2).jpeg';
import face3 from '../../assets/face(3).jpeg';
import face4 from '../../assets/face(4).jpeg';
import face5 from '../../assets/face(5).jpeg';
import face6 from '../../assets/face(6).jpeg';
import face7 from '../../assets/face(7).jpeg';

const DataComments: Array<IComments> = [
  {
    idC: 1,
    img: face6,
    name: 'Yang',
    date: 'Novembro, 2023',
    description: 'Experiencia maravilhosa!',
  },
  {
    idC: 2,
    img: face1,
    name: 'Carlos',
    date: 'Setembro, 2023',
    description: 'Casa muito boa, além de ficar proxima dos pontos turisticos',
  },
  {
    idC: 3,
    img: face2,
    name: 'Samantah',
    date: 'Abril, 2023',
    description: 'Casa acolhedora, cidade top! Voltarei em breve...',
  },
  {
    idC: 4,
    img: face4,
    name: 'Alex',
    date: 'Agosto, 2022',
    description: 'HomeYou nunca falha! Melhores opcoes e estabelicimentos.',
  },
  {
    idC: 5,
    img: face4,
    name: 'Mayke',
    date: 'Julho, 2022',
    description: 'Sem palavras, experiencia incrivel!',
  },
  {
    idC: 6,
    img: face3,
    name: 'Janayna',
    date: 'Dezembro, 2022',
    description: 'Bem aconchegante! Recomendarei com certeza.',
  },
  {
    idC: 7,
    img: face5,
    name: 'Juliana',
    date: 'Janeiro, 2023',
    description: 'Adorei a casa! Fim de ano voltarei!',
  },
];

export default DataComments;
