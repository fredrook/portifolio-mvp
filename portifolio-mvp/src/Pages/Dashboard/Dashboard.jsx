import { Container } from "./DashboardCSS";
import ImageBackground from "../Assets/Fundo.png"
import FotoFRC from "../Assets/Foto FRC.png"

const FRC = () => {

    return (
        <Container>
            <div>
            <img src={ImageBackground} alt="Fundo de tela" className="backGroundImg"/>
            <img src={FotoFRC} alt="Foto do Frederico Rook Chaves" className="backGroundFoto"/>
            </div>
        </Container>
    )
}

export default FRC;