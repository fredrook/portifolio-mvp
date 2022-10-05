import { Div, TagHeader } from '../Header/HeaderCSS'
import { VscListTree } from "react-icons/vsc"
import { useContext } from 'react';
import { UserContext } from '../../Context/AuthContext';
import NavBarModal from '../ModalNavBar/ModalNavBar';

const Header = ( ) => {

  const { modal, setModal } = useContext(UserContext)

  const myName: string = require('../../Assets/FRC.png')

  return (
    <TagHeader>
      <Div>
        <img src={myName} alt="Frederico Rook Chaves" />

        <button type="button" onClick={() => setModal(!modal)}>
          <VscListTree className='navIcon'/>
        </button>
      </Div>
      {modal && (
              <NavBarModal />
          )}
    </TagHeader>
  );
};


export default Header;
