import React from 'react';
import styles from './profile.module.scss';
import { animateGraf } from '../utils/animateField';

interface RecProps {
  index: number;
  title: string;
  inView: boolean;
}

const Rectangle: React.FC<RecProps> = ({ index, title, inView }) => {
  return (
    <div className={styles.rectan} style={inView ? animateGraf(index) : animateGraf(index, index)}>
      <div className={styles.text}>{title}</div>
    </div>
  );
};

export default Rectangle;
