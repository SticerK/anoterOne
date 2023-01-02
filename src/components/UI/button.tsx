import React from 'react';
import styles from './style.module.scss';

interface Props {
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ children }) => {
  return (
    <a className={styles.btn} href='#content'>
      {children}
      <div className={styles.top}></div>
      <div className={styles.left}></div>
      <div className={styles.right}></div>
      <div className={styles.bottom}></div>
    </a>
  );
};

export default Button;
