import React from 'react';
import styles from './modal.module.scss';
import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../redux/modalSlice';
import { RootState } from '../store/store';
import { CardTypes } from '../../types/type';

const Modal = () => {
  const modalRef = React.useRef<HTMLDivElement>(null);
  const dispath = useDispatch();
  const { open, card } = useSelector((state: RootState) => state.modalSlice);

  const closeModal = ({ target }: React.MouseEvent<HTMLDivElement>) => {
    if (!(target instanceof HTMLDivElement)) {
      return;
    }

    if (target.dataset.modal) dispath(toggleModal({} as CardTypes));
  };

  return (
    <CSSTransition unmountOnExit nodeRef={modalRef} in={open} timeout={300} v classNames={'AModal'}>
      <div className={styles.modal} data-modal onClick={closeModal} ref={modalRef}>
        {open && (
          <div className={styles.container}>
            <div className={styles.image}>
              <img src={card.image} />
            </div>
            <div className={styles.descr}>
              <div className={styles.text}>{card.descr}</div>
              <div>
                {card.books.length ? <p>Библиотеки использовались:</p> : ''}
                <ul>
                  {card.books.map((item: string[]) => (
                    <li className={styles.list}>{item}</li>
                  ))}
                </ul>
              </div>
              <a href={card.link} className={styles.link} target='_blank'>
                Исходники GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </CSSTransition>
  );
};

export default Modal;
