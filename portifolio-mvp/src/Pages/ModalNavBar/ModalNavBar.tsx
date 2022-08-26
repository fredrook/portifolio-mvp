import { useContext } from "react";
import { UserContext } from "../../Context/AuthContext";
import { Nav } from "./CSSModalNavBar";


const NavBarModal = () => {

  const { modal } = useContext(UserContext);

    return(
      <>
      {modal && (
        <Nav>
        <a href="*">
          <span>Home</span>
        </a>
        <a href="*">
          <span>Soft Skills</span>
        </a>
        <a href="*">
          <span>Hard Skills</span>
        </a>
        <a href="*">
          <span>Projetos</span>
        </a>
        <a href="*">
          <span>Contatos</span>
        </a>
      </Nav>
      )}
      </>
    )
}

export default NavBarModal;