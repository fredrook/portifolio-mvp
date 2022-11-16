import { Div, TagHeader } from '../Header/HeaderCSS'
/* import { VscListTree } from "react-icons/vsc"
import { useContext } from 'react';
import { UserContext } from '../../Context/AuthContext';
import NavBarModal from '../ModalNavBar/ModalNavBar'; */
import SubHeaderFoto from '../SubHeaderFoto/SubHeaderFoto';
import BtnBackEnd from "../ButtonBackEnd/BtnBackEnd"
import BtnFrontEnd from '../ButtonFrontEnd/BtnFrontEnd';
import BtnHistory from '../ButtonHistory/BtnHistory';
import BtnProjects from '../ButtonProjects/BtnProjects';


const Header = ( ) => {

/*   const { visible, setIsVisible } = useContext(UserContext) */

  const myName: string = require('../../Assets/FRC.png');

  return (
    <TagHeader>
      <Div>
        <img src={myName} alt="Frederico Rook Chaves" />
        <SubHeaderFoto/>
        <BtnHistory/>
        <BtnFrontEnd/>
        <BtnBackEnd/>
        <BtnProjects/>
      </Div>
        {/* <button type="button" onClick={() => setIsVisible(visible => !visible)}>
          <VscListTree className='navIcon'/>
        </button>
      </Div>
      {visible && (
              <NavBarModal />
          )} */}
    </TagHeader>
  );
};


export default Header;
