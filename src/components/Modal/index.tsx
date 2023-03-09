import React from 'react';
import StyledModal from './style';

import { MdClose } from 'react-icons/md';
import { useContext } from 'react';
import { UserContext } from '../../providers/UserContext';
import { ModalsContext } from '../../providers/ModalsContext';

interface IModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: IModalProps) => {
  const { isOpen, setIsOpen } = useContext(ModalsContext);

  if (isOpen) {
    return (
      <StyledModal role={'dialog'}>
        <div>
          <header>
            <MdClose onClick={() => setIsOpen(false)} />
          </header>
          {children}
        </div>
      </StyledModal>
    );
  }

  return null;
};

export default Modal;
