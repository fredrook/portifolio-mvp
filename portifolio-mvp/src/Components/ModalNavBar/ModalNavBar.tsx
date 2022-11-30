import { useContext } from "react";
import { UserContext } from "../../Context/AuthContext";
import { Container, Nav } from "./ModalNavBarCSS";
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
              <span>History</span>
            </a>
            <a href="*">
              <span>Front-End</span>
            </a>
            <a href="*">
              <span>Back-End</span>
            </a>
            <a href="*">
              <span>Projects</span>
            </a>
          </Nav>
        </Container>
      )}
    </>
  );
};

export default NavBarModal;
