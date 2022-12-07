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
          <h2 className="ID0">O</h2>
          <h2 className="ID1">l</h2>
          <h2 className="ID2">á</h2>
          <h2 className="ID3">!</h2>
          <h2 className="ID4">Meu nome é</h2>
        </div>
        <h1>Frederico.</h1>
        <p className="P1">Sou desenvolvedor Full Stack.</p>
        <p className="P2">
          Meu objetivo é fornecer meu conhecimento como Programador, de forma a
          atuar em equipe, trabalhando como principal parâmetro, os conceitos
          “Código Limpo”, “Metodologias Ágeis”, criando projetos eficazes,
          bonitos e responsivos.
        </p>
        <span>Estou disponível para trabalhar!</span>
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
