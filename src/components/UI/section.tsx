import React from 'react';
import styles from './style.module.scss';
import { useInView } from 'react-intersection-observer';

interface Props {
  variant?: string;
}

const Section: React.FC<React.PropsWithChildren<Props>> = ({ children, variant }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const newChildrenWithProps = React.Children.map(children, (child) => {
    const item = child as React.ReactElement;

    if (item.props.children) {
      return React.cloneElement(item, { ref, inView });
    }

    return React.cloneElement(item, { inView });
  });

  return (
    <div
      className={styles.section}
      style={{ background: variant === 'silver' ? 'rgb(228, 228, 228)' : '' }}>
      {newChildrenWithProps}
    </div>
  );
};

export default Section;
