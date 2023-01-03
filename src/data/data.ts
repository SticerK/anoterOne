import port from '../components/assets/image/port.jpg';
import space from '../components/assets/image/space.jpg';
import todo from '../components/assets/image/todo.jpg';
import game from '../components/assets/image/game.jpg';
import { CardTypes } from '../types/type';

const projects: CardTypes[] = [
  {
    id: 1,
    image: port,
    title: 'Лендинг',
    intro: 'About me',
    descr: 'Крайний проект, написанный на React, Redux Toolkit, TypeScript.',
    books: ['react-transition-group', 'react-intersection-observer'],
    link: '',
    color: 'rgb(228,228,228)',
    last: true,
  },
  {
    id: 2,
    image: space,
    title: 'Интернет-магазин',
    intro: 'Space',
    descr:
      'Давно хотел понять, как работают интернет-магазины. На данный момент это самый большой проект, который я сделал. Из-за того, что я обучался и параллельно создавал этот магазин, могут быть баги. Это мой первый опыт использования Redux Toolkit и TypeScript.',
    color: 'rgb(37, 37, 37)',
    last: true,
    books: [
      'react-transition-group',
      'react-intersection-observer',
      'react-router-dom',
      'react-icons',
    ],
    link: 'https://github.com/SticerK/diplom',
  },
  {
    id: 3,
    image: todo,
    title: 'To Do List',
    intro: 'TODO List',
    descr:
      'Мой первый проект, написанный на React. Его функционал не совем доделан, но из-за того, что это мой первый проект - мне страшно туда возвращаться.',
    color: 'rgb(245, 75, 75)',
    last: false,
    books: [],
    link: 'https://github.com/SticerK/todo',
  },
  {
    id: 4,
    image: game,
    title: 'Крестики нолики',
    intro: 'Game',
    descr:
      'По окончанию изучения ванильного JS захотелось создать какую-нибудь игру. Мой выбор пал на крестики нолики. Код был написан на ООП.',
    color: 'white',
    last: false,
    books: [],
    link: 'https://github.com/SticerK/Game',
  },
];

export default projects;
