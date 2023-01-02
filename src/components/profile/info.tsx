import React from 'react';
import styles from './profile.module.scss';
import Rectangle from './rectangle';
import { useInView } from 'react-intersection-observer';

const Info: React.FC = () => {
  const tex = ['Html/Css', 'JavaScript', 'React', 'Git', 'ReduxToolkit', 'TypeScript'];

  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  return (
    <div className={styles.info}>
      <div style={{ width: '80%' }}>
        <div className={styles.graf} ref={ref}>
          {tex.map((item, index) => (
            <Rectangle title={item} index={index + 1} inView={inView} />
          ))}
        </div>
        <div className={styles.subInfo}>Технологии</div>
      </div>
    </div>
  );
};

export default Info;
