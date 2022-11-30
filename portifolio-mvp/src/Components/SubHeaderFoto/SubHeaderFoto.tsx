import { HeaderFoto } from "./SubHeaderFotoCSS";

const SubHeaderFoto = () => {
  const Foto: string = require("../../Assets/FRC Tratada.png");

  return (
    <HeaderFoto>
      <a href="#">
        <img src={Foto} alt="Foto do Frederico Rook Chaves" />
      </a>
    </HeaderFoto>
  );
};

export default SubHeaderFoto;
