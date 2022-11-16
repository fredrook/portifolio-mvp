import { HeaderFoto } from "./SubHeaderFotoCSS";

const SubHeaderFoto = () => {

    const Foto: string = require("../../Assets/FRC Tratada.png")

    return (
        <HeaderFoto>
            <img src={Foto} alt="Foto do Frederico Rook Chaves" />
        </HeaderFoto>
    )
}

export default SubHeaderFoto;
