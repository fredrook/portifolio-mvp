import { ContainerMain, TagDiv } from "./TextApresentationCSS";
/* import Foto from "../../Assets/Technologias/Web Semantica.jgp" */

const Main = () => {
  const ImagemX: string = require('../../Assets/Technologias/Web Semantica.jpg');

  return (
    <ContainerMain>
      <TagDiv>
        <ol>
          <li>
            <h2>TEXTO A SER POSTO</h2>
            <img src={ImagemX} alt="" />
            <p>
              TEXTO SOBRE MINHA HISTORIA, Bla Bla Bla Bla Bla Bla Bla Bla Bla
              Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla
              Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla
              Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla
            </p>
          </li>
        </ol>
      </TagDiv>
    </ContainerMain>
  );
};

export default Main;
