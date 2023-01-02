import React from 'react';
import styles from './project.module.scss';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../redux/modalSlice';
import { useInView } from 'react-intersection-observer';
import { CardTypes } from '../../types/type';
import Label from '../UI/label';

interface CardProps {
  index: number;
  card: CardTypes;
}

const Card: React.FC<CardProps> = ({ index, card }) => {
  const dispath = useDispatch();

  const { ref, inView } = useInView({
    threshold: 0.2,
    delay: (index + 1) * 100,
    triggerOnce: true,
  });

  return (
    <div className={[styles.project, inView ? styles.cartAnimate : ''].join(' ')} ref={ref}>
      <div
        className={styles.intro}
        onClick={() => dispath(toggleModal())}
        style={{ background: card.color }}>
        {card.intro}
      </div>
      <div className={styles.descr}>
        <div className={styles.title}>{card.title}</div>
        <div className={styles.text}>Pet-project</div>
      </div>
      {card.last && <Label />}
    </div>
  );
};

export default Card;
