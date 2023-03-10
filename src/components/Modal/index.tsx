import React from 'react';
import StyledModal from './style';

import { MdClose } from 'react-icons/md';
import { useContext } from 'react';
import { ModalsContext } from '../../providers/ModalsContext';

interface IModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: IModalProps) => {
  const { isOpen, closeModal } = useContext(ModalsContext);

  if (isOpen) {
    return (
      <StyledModal className='inside' role={'dialog'}>
        <div className='inside'>
          <header>
            <MdClose onClick={() => closeModal()} />
          </header>
          {children}
        </div>
      </StyledModal>
    );
  }

  return null;
};

export default Modal;
