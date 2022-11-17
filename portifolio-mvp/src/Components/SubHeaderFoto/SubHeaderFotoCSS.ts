import styled from "styled-components";

export const HeaderFoto = styled.div`

z-index: 99999;

   img{
    /* position: absolute;
    top: -59px;
    left: 39.5vw; */

    display: flex;

    border-radius: 50%;
   
    width: 95px;
    height: 95px;

    object-fit: cover;

    :hover{
      border: 2px solid var(--color-orange);
    }
   }
`;