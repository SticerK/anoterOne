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
    descr: 'Описание',
    color: 'rbb(228,228,228)',
    last: true,
  },
  {
    id: 2,
    image: space,
    title: 'Интернет-магазин',
    intro: 'Space',
    descr: 'Описание',
    color: 'rgb(37, 37, 37)',
    last: true,
  },
  {
    id: 3,
    image: todo,
    title: 'To Do List',
    intro: 'TODO List',
    descr: 'Описание',
    color: 'rgb(245, 75, 75)',
    last: false,
  },
  {
    id: 4,
    image: game,
    title: 'Крестики нолики',
    intro: 'Game',
    descr: 'Описание',
    color: 'white',
    last: false,
  },
];

export default projects;
