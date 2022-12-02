import { useContext } from "react";
import { UserContext } from "../../Context/AuthContext";
import { Container, Nav } from "./ModalNavBarCSS";
import { motion } from "framer-motion";

const NavBarModal = () => {
  const { visible } = useContext(UserContext);

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
        <Container onClick={(event) => event.stopPropagation()} >
          <Nav>
            <a href="*">
              <span>History</span>
            </a>
            <a href="#IDFE">
              <span>Front-End</span>
            </a>
            <a href="#IDBE">
              <span>Back-End</span>
            </a>
            <a href="#IDPROJ">
              <span>Projects</span>
            </a>
          </Nav>
        </Container>
      )}
    </>
  );
};

export default NavBarModal;
