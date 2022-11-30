import { Div, DivButtons, DivList, TagHeader } from "../Header/HeaderCSS";
import ListIcon from "@mui/icons-material/List";
import SubHeaderFoto from "../SubHeaderFoto/SubHeaderFoto";
import BtnBackEnd from "../ButtonBackEnd/BtnBackEnd";
import BtnFrontEnd from "../ButtonFrontEnd/BtnFrontEnd";
import BtnHistory from "../ButtonHistory/BtnHistory";
import BtnProjects from "../ButtonProjects/BtnProjects";
import NavBarModal from "../ModalNavBar/ModalNavBar";
import { useContext } from "react";
import { UserContext } from "../../Context/AuthContext";

const Header = () => {
  const { setIsVisible } = useContext(UserContext);

  const myName: string = require("../../Assets/FRC.png");

  return (
    <TagHeader>
      <Div>
        <img src={myName} alt="Frederico Rook Chaves" />
        <SubHeaderFoto />
        <DivButtons>
          <BtnHistory />
          <BtnFrontEnd />
          <BtnBackEnd />
          <BtnProjects />
        </DivButtons>
        <DivList>
          <button className="ListIcon" onClick={() => setIsVisible(true)}>
            <ListIcon />
          </button>
          <NavBarModal />
        </DivList>
      </Div>
    </TagHeader>
  );
};

export default Header;
