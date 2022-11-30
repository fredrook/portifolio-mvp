import {
  ContainerMain,
  IconsGHLD,
  TextApresentationDiv,
} from "./TextApresentationCSS";

const TextApresentation = () => {
  const GitHub: string = require("../../Assets/Icones/GHub.png");
  const Linkedin: string = require("../../Assets/Icones/Linkedin.png");

  return (
    <ContainerMain>
      <TextApresentationDiv>
        <div className="IDContainer">
          <h2 className="ID1">H</h2>
          <h2 className="ID2">i</h2>
          <h2 className="ID3">!</h2>
          <h2 className="ID4">My name is</h2>
        </div>
        <h1>Frederico,</h1>
        <p className="P1">I'm a software developer.</p>
        <p className="P2">
          My goal is to provide my knowledge as a Programmer, in order to play
          as a team, working as the main parameter, the concepts "Clean Code",
          "Agile Methodologies", creating effective, beautiful and responsive
          projects.
        </p>
        <span>I'm available to work!</span>
      </TextApresentationDiv>
      <IconsGHLD>
        <a
          href="https://www.linkedin.com/in/fredericorook/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Linkedin} alt="Icone Portifólio Linkedin" />
        </a>
        <a href="https://github.com/fredrook" target="_blank" rel="noreferrer">
          <img src={GitHub} alt="Icone Portifólio Git Hub" />
        </a>
      </IconsGHLD>
    </ContainerMain>
  );
};

export default TextApresentation;
