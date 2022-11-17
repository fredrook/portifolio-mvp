import { TagWallpaperDiv } from "./WallpaperCSS";

const Wallpaper = () => {

    const Iceberg: string = require("../../Assets/Icones/ICE BERG IMG.png")

    return (
        <TagWallpaperDiv>
            <img src={Iceberg} alt="Fundo de tela!" />
        </TagWallpaperDiv>
    )
}

export default Wallpaper;