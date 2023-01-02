import React from 'react';
import styles from './modal.module.scss';
import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../redux/modalSlice';
import { RootState } from '../store/store';

const Modal = () => {
  const modalRef = React.useRef<HTMLDivElement>(null);
  const dispath = useDispatch();
  const modal = useSelector((state: RootState) => state.modalSlice.open);

  const closeModal = ({ target }: React.MouseEvent<HTMLDivElement>) => {
    if (!(target instanceof HTMLDivElement)) {
      return;
    }

    if (target.dataset.modal) dispath(toggleModal());
  };

  return (
    <CSSTransition
      unmountOnExit
      nodeRef={modalRef}
      in={modal}
      timeout={300}
      v
      classNames={'AModal'}>
      <div className={styles.modal} data-modal onClick={closeModal} ref={modalRef}>
        <div className={styles.container}></div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
