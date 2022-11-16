import styled from "styled-components";

export const ContainerMain = styled.div`
display: flex;

width: 98%;
height: 100%;

border: 2px solid var(--color-grey-1);

margin: 0 auto ;
margin-top: 8px;
`;

export const TagDiv = styled.div`
display: flex;


   ol{
    display: flex;
    align-items: center;
    justify-content: center;

       li{
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;

        width: 90%;
        height: 400px;

           h2{
            display: flex;
            align-items: center;
            color: red;
           }

           img{
            width: 100px;
            height: 100px;
           }

           p{
            color: red;
           }
       }
   }
`;