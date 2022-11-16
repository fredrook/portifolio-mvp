import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;


  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Nav = styled.nav`
position: relative;

display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

margin: 13% 0%  0% 59%;

width: 130px;
height: 150px;

background: var(--color-grey-2);

border: 1px solid white;

border-radius: 5px;

z-index: 100;

a{
    display: flex;
    justify-content: center;
    
    width: 98%;
    height: 15%;

    border: 1px solid white;
    
    border-radius: 5px;
    
    cursor: pointer;

    span{
        display: flex;
        align-items: center;
        font-size: 19px;
       
        color: white;       
        
    }
}
`