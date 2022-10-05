import styled from "styled-components";

export const HeaderFoto = styled.div`
position: relative;

z-index: 99999;

   img{
    position: absolute;
    top: -59px;
    left: 39.5vw;

    border-radius: 50%;
   
    width: 20vw;
    height: 20vw;

    object-fit: cover;
   }
`;