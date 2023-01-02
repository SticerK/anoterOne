import React from 'react';
import Square from '../UI/square';
import Content from './content';
import Info from './info';

interface Props {
  inView?: any;
}

const classes = [
  {
    id: 1,
    style: {
      position: 'absolute',
      top: '79%',
      left: '60.25%',
      cursor: 'pointer',
    },
    animateSquare: true,
  },
  {
    id: 2,
    style: {
      position: 'absolute',
      top: '65%',
      left: '60%',
      width: '50px',
      height: '50px',
      cursor: 'pointer',
    },
    animateSquare: true,
  },
  {
    id: 3,
    style: {
      position: 'absolute',
      top: '70%',
      left: '64%',
      width: '70px',
      height: '70px',
      cursor: 'pointer',
    },
    animateSquare: true,
  },
];

const Profile: React.FC<Props> = ({ inView }) => {
  return (
    <>
      <Square inView={inView} />
      <Content />
      {classes.map((item) => (
        <Square property={item}>Click</Square>
      ))}
      <Info />
    </>
  );
};

export default Profile;
