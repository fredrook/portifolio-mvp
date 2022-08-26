import styled from 'styled-components'
import GlobalStyle from '../../Styles/Global Styles CSS'

export const Header = styled.header`
    margin: 0px;
    padding: 0px;
    border: 0px;

    position: sticky 50px;
`
    
export const Div = styled.div`
    position: fixed;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 60px;

    padding: 0px 5%;

    background-color: var(--color-grey-1);

    box-shadow: rgb(0 0 0 / 25%) 0px 2px 4px 2px;
    border-bottom: 5px solid var(black);

    img{
        width: 50px;
        height: 50px;
        color: white;
    }
   
   button{
    display: flex;
    justify-content: center;
     align-items: center;

    background: transparent;
    
    border: 1px solid white;

    .navIcon{
       font-size: 35px;

       color: white;
    }
   }
`