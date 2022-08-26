import { Div, Header } from '../Header/HeaderCSS'
import { VscListTree } from "react-icons/vsc"
import { useContext } from 'react';
/* import { IProviderProps } from '../../Context/AuthContext'; */
import { UserContext } from '../../Context/AuthContext';

const Head = ( ) => {

  const { modal, setModal } = useContext(UserContext)
  console.log("LOG DO SETMODAL ",setModal)
  console.log("LOG DO MODAL ",modal)

  const myName: string = require('../../Assets/FRC.png')
  /* const BackgroungWall: string = require('../../Assets/FundoWall.png') */

  return (
    <Header>
      <Div>
        <img src={myName} alt="Frederico Rook Chaves" />

        <button type="button" onClick={() => setModal(true)}>
          <VscListTree className='navIcon'/>
        </button>
      </Div>
    </Header>
  );
};


export default Head;
