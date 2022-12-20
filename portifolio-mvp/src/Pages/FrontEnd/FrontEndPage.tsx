import React from "react";
import { DivDesktop, TagContainer } from "./FrontEndPageDesktopCSS";
import ReactIcon from "../../Assets/FrontEnd/RReact.svg";
import { DivMobile } from "./FrontEndPageMobileCSS";

const FrontEndPage = () => {
  const JS: string = require("../../Assets/FrontEnd/JavaScript.png");
  const HTML: string = require("../../Assets/FrontEnd/HTML.png");
  const CSS: string = require("../../Assets/FrontEnd/CSS.png");
  const TS: string = require("../../Assets/FrontEnd/TypeScript.png");
  const Node: string = require("../../Assets/FrontEnd/NodeJS.png");
  const MUi: string = require("../../Assets/FrontEnd/MUi.png");
  const BST: string = require("../../Assets/FrontEnd/Bootstrap.png");
  const Chakra: string = require("../../Assets/FrontEnd/Chakra.png");
  const IconsMobile: string = require("../../Assets/FrontEnd/Group 1.png");

  return (
    <TagContainer id="IDFE">
      <DivDesktop>
        <div className="DivIcons">
          <img src={JS} alt="Java Script" className="JS"/>
          <img src={HTML} alt="HTML" className="HTML"/>
          <img src={CSS} alt="CSS" className="CSS"/>
          <img src={TS} alt="Type Script" className="TS" />
          <img src={ReactIcon} alt="React" className="ReactIcon" />
          <img src={Node} alt="NodeJS" className="Node" />
          <img src={MUi} alt="MUi" className="MUi" />
          <img src={BST} alt="Bootstrap" className="BST" />
          <img src={Chakra} alt="Chakra" className="Chk" />
        </div>
        <span>Front End</span>
        <div className="TextFrontEnd">
          <h2>
            Formado como Programador Front-End na Kenzie Academy,
            especializei-me em determinadas linguagens e tecnologias, com foco
            nos preceitos de "Responsividade", "Reatividade", "Código Limpo" e
            "Metodologias Ágeis", tendo conhecimento para criar, modificar ou
            refatorar códigos usando as linguagens React, TypeScrypt,
            JavaScript, HTML, CSS. Adicionado às tecnologias aliadas que
            utilizo, como Jira, Trello, Git Hub, Figma, Vercel, Notion,
            NodeExpress, além de bibliotecas como Bootstrap, FramerMotion,
            Chakra, Material UI “MUI”, entre outras.
          </h2>
        </div>
      </DivDesktop>
      <DivMobile>
        <div className="DivIcons">
          <img src={ReactIcon} alt="React" className="ReactIcon" />
          <img src={IconsMobile} alt="IconsMobile" className="IconsMobile" />
        </div>
        <span>Front End</span>
        <div className="TextFrontEnd">
          <h2>
            Formado como Programador Front-End na Kenzie Academy,
            especializei-me em determinadas linguagens e tecnologias, com foco
            nos preceitos de "Responsividade", "Reatividade", "Código Limpo" e
            "Metodologias Ágeis", tendo conhecimento para criar, modificar ou
            refatorar códigos usando as linguagens React, TypeScrypt,
            JavaScript, HTML, CSS. Adicionado às tecnologias aliadas que
            utilizo, como Jira, Trello, Git Hub, Figma, Vercel, Notion,
            NodeExpress, além de bibliotecas como Bootstrap, FramerMotion,
            Chakra, Material UI “MUI”, entre outras.
          </h2>
        </div>
      </DivMobile>
    </TagContainer>
  );
};

export default FrontEndPage;
