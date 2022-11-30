import React from 'react';
import { TagContainer } from "./FrontEndPageCSS";
import ReactIcon from "../../Assets/FrontEnd/RReact.svg";

const FrontEndPage = () => {
  const JS: string = require("../../Assets/FrontEnd/JavaScript.png");
  const HTML: string = require("../../Assets/FrontEnd/HTML.png");
  const CSS: string = require("../../Assets/FrontEnd/CSS.png");
  const TS: string = require("../../Assets/FrontEnd/TypeScript.png");
  const Node: string = require("../../Assets/FrontEnd/NodeJS.png");
  const MUi: string = require("../../Assets/FrontEnd/MUi.png");
  const BST: string = require("../../Assets/FrontEnd/Bootstrap.png");
  const Chakra: string = require("../../Assets/FrontEnd/Chakra.png");

  return (
    <TagContainer id='IDFE'>
      <div className="DivIcons">
        <img src={JS} alt="Java Script" />
        <img src={HTML} alt="HTML" />
        <img src={CSS} alt="CSS" />
        <img src={TS} alt="Type Script" className="TS"/>
        <img src={ReactIcon} alt="React" className="ReactIcon" /> 
        <img src={Node} alt="NodeJS" className="Node"/>
        <img src={MUi} alt="MUi" className="MUi"/>
        <img src={BST} alt="Bootstrap" className="BST"/>
        <img src={Chakra} alt="Chakra" className='Chk'/>
      </div>
      <span>Front End</span>
      <div className="TextFrontEnd">
        <h2>
          Trained as a Front-End Programmer at Kenzie Academy, I specialized in
          certain languages and technologies, focused on the precepts of
          "Responsiveness", "Reactivity", "Clean Code" and "Agile
          Methodologies", having knowledge to create, modify or refactor codes
          using React, TypeScrypt, JavaScript, HTML, CSS languages. Added to the
          allied technologies that I use, such as Jira, Trello, Git Hub, Figma,
          Vercel, Notion, NodeExpress, in addition to libraries such as
          Bootstrap, FramerMotion, Chakra, Material UI “MUI”, among others.
        </h2>
      </div>
    </TagContainer>
  );
};

export default FrontEndPage;
