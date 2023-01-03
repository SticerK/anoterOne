import React, { useRef } from 'react';
import Button from '../UI/button';
import styles from './header.module.scss';
import '../../styles/main.scss';
import { animateField } from '../utils/animateField';
import Theme from './theme';

const Header: React.FC = () => {
  const LineARef = React.useRef<HTMLDivElement>(null);
  const LineBRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    //Animate Line Header
    window.addEventListener('scroll', () => {
      const { top } = document.body.getBoundingClientRect();
      if (LineARef && LineARef.current)
        LineARef.current.style.width = `${350 + Math.abs(top) * 1.3}px`;
      if (LineBRef && LineBRef.current)
        LineBRef.current.style.width = `${70 + Math.abs(top) * 0.3}px`;
    });
  }, []);

  return (
    <div className={styles.header}>
      <Theme />
      <div className={styles.ALine} ref={LineARef}></div>
      <div className={styles.BLine} ref={LineBRef} id={'content'}></div>
      <div className={styles.content}>
        <p className={styles.title} style={{ animation: animateField('animateField', 0.3) }}>
          Привет!
        </p>
        <p className={styles.subTitle} style={{ animation: animateField('animateField', 0.6) }}>
          Рад тебя видеть на моем сайте!
          <br /> Пошли знакомиться.
        </p>
        <div style={{ animation: animateField('animateField', 0.9), opacity: 0 }}>
          <Button>Пошли</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
