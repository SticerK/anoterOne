import React from 'react';
import styles from './style.module.scss';

interface Props {
  inView?: boolean;
  children?: React.ReactNode;
}

const Title = React.forwardRef<HTMLDivElement, Props>(({ inView, children }, ref) => {
  return (
    <div className={`${styles.title} ${inView ? styles.active : ''}`} ref={ref}>
      {inView && children}
    </div>
  );
});

export default Title;
