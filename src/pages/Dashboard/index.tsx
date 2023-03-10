import React, {
  useContext,
  useEffect,
  useRef,
  RefObject,
  forwardRef,
} from 'react';
import { AiOutlineUser } from 'react-icons/ai';

import Footer from '../../components/Footer';
import EditUser from '../../components/Forms/EditUser';
import HouseDashCard from '../../components/Cards/DashCards/HouseDashCard';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import { UserContext } from '../../providers/UserContext';
import { StyledSectionProfile, StyledContainerPage } from './style';

// const DashboardPage = forwardRef<string,>((props, ref)) => {
//   const { isOpen, setIsOpen, user } = useContext(UserContext);

//   interface HandleNameChangeInterface {
//     target: React.ReactNode;
//   }

//   let menuRef: RefObject<HTMLDivElement> = useRef(null);
//   console.log(menuRef);
//   useEffect(() => {
//     let handle = (event: any) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mouseover', handle);
//     return () => {
//       document.removeEventListener('mouseleave', handle);
//     };
//   }, [isOpen]);

//   return (
//     <StyledContainerPage>
//       <div>
//         {isOpen ? (
//           <Modal ref={menuRef}>
//             <EditUser />
//           </Modal>
//         ) : null}
//         <Header />

//         <StyledSectionProfile>
//           <div className='contentSection'>
//             <div className='contentImage'>
//               <img src={user?.img} alt='photo image' />
//               <div>
//                 <h3>{user?.name}</h3>
//                 <span>{user?.age} anos</span>
//                 <hr />
//                 <div>
//                   <AiOutlineUser />
//                   <button type='button' onClick={() => setIsOpen(true)}>
//                     Editar Perfil
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </StyledSectionProfile>
//         <HouseDashCard />
//         <section></section>
//         <Footer />
//       </div>
//     </StyledContainerPage>
//   );
// };

interface DashboardPageProps {
  ref: any;
}

const DashboardPage = forwardRef<HTMLDivElement, DashboardPageProps>(
  (props, ref) => {
    const { isOpen, setIsOpen, user } = useContext(UserContext);

    const menuRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      const handleClickOutsideModal = (event: MouseEvent) => {
        if (
          menuRef.current &&
          !menuRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener('click', handleClickOutsideModal);
      return () => {
        document.removeEventListener('click', handleClickOutsideModal);
      };
    }, [isOpen]);

    return (
      <StyledContainerPage>
        <div>
          {isOpen && (
            <Modal ref={menuRef}>
              <EditUser />
            </Modal>
          )}
          <Header />
          <StyledSectionProfile>
            <div className='contentSection'>
              <div className='contentImage'>
                <img src={user?.img} alt='photo image' />
                <div>
                  <h3>{user?.name}</h3>
                  <span>{user?.age} anos</span>
                  <hr />
                  <div>
                    <AiOutlineUser />
                    <button type='button' onClick={() => setIsOpen(true)}>
                      Editar Perfil
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </StyledSectionProfile>
          <HouseDashCard />
          <section></section>
          <Footer />
        </div>
      </StyledContainerPage>
    );
  }
);

export default DashboardPage;
