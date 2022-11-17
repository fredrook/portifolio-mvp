import { ContainerMain } from "./TextApresentationCSS";

const TextApresentation = () => {

  const TextApresentation: string = require("../../Assets/Texto Apresentação.png")
  return (
    <ContainerMain>
      <img src={TextApresentation} alt="Texto de boas vindas" />
    </ContainerMain>
  );
};

export default TextApresentation;
