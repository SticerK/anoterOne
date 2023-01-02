import React from 'react';
import styles from './style.module.scss';

interface Props {
  inView?: boolean;
  property?: { id: number; style: { [key: string]: any }; animateSquare: boolean };
  children?: React.ReactNode;
}

const Square: React.FC<Props> = ({ inView, property, children }) => {
  const [animate, setAnimate] = React.useState<boolean>(false);
  console.log(property?.animateSquare);

  return (
    <div
      className={`${styles.square} ${inView ? styles.squareAnimate : ''} ${
        animate ? styles.clickSquare : ''
      }`}
      style={property?.style}
      onClick={property?.animateSquare ? () => setAnimate(true) : () => null}>
      {children}
    </div>
  );
};

export default Square;
