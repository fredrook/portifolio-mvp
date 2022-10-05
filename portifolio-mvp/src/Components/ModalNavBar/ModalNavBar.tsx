import { useContext } from "react";
import { UserContext } from "../../Context/AuthContext";
import { Container, Nav } from "./CSSModalNavBar";

const NavBarModal = () => {
  const { modal } = useContext(UserContext);

  return (
    <>
      {modal && (
        <Container>
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
        </Container>
      )}
    </>
  );
};

export default NavBarModal;
