import React from 'react';
import StyledModal from './style';

import { MdClose } from 'react-icons/md';
import { useContext } from 'react';
import { UserContext } from '../../providers/UserContext';

interface IModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: IModalProps) => {
  const { isOpen, setIsOpen } = useContext(UserContext);

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
