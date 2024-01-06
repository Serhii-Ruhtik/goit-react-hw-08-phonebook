import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from '../Modal/Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        console.log('натиснули esc');
        onClose();
      }
    };
    console.log('modal componentDidMount');

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      console.log('modal componentWillUnmount');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div className={styles.Modal__backdrop} onClick={handleBackdropClick}>
      <div className={styles.Modal__content}>{children}</div>
    </div>,
    modalRoot
  );
};
export default Modal;
