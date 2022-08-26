import GlobalStyle from "../../Styles/Global Styles CSS";
import styled from "styled-components";

export const Container = styled.div`
--bg: linear-gradient( to right, var(--grey0) 0%, var(--grey1) 33%, var(--grey1) 66%, var(--grey0) 100% );
    --text: var(--grey10);
    --title: var(--primary);
    --button-bg: linear-gradient( to right, var(--primary) 0%, var(--primary) 50%, var(--primary-l), 50%, var(--primary-l) );
    --button-text: var(--white);
    --bg-bottom: transparent;
    --bg-top: url(\/assets\/hexagon_wallpaper_blue\.c194300b\.png);
    --scale: calc(1px + (1.3 - 1) * ((100vw - 320px) / (1600 - 320)));
    --scale-fast: calc(1px + (1.2 - 1) * ((100vw - 320px) / (420 - 320)));
    --scale-slow: calc(1px + (1.5 - 1) * ((100vw - 420px) / (1600 - 420)));
    background: var(--bg);
    color: var(--text);
    display: flex;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: flex-end;
    min-height: min(100%, 1200px);
    padding-top: 60px;

div{
    background-image: var(--bg-top);
    background-position: center bottom;
    background-size: cover;
    flex: 1 1 0%;
    padding-top: 150px;

    .backGroundImg{
        width: calc(200 * var(--scale));
    height: calc(100 * var(--scale));
    }
    
    .backGroundFoto{
        height: 120px;
        width: 100%;
    display: block;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    transform: translateY(-50%);
    background: var(--grey1);
    box-shadow: rgb(0 0 0 / 20%) 0px 1px 4px 1px;
    }
}

`