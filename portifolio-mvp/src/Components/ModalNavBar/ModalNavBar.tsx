import { useContext } from "react";
import { UserContext } from "../../Context/AuthContext";
import { Container, Nav } from "./CSSModalNavBar";
import { motion } from "framer-motion";

const NavBarModal = () => {
  const { visible, setIsVisible } = useContext(UserContext);

  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <>
      <motion.div
        animate={visible ? "open" : "closed"}
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      ></motion.div>
      
      {visible && (
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
