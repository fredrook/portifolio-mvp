import styled from 'styled-components'

export const TagHeader = styled.header`
    width: 100%;
    position: fixed;
    z-index: 999;
`
    
export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 98px;

    padding: 0px 5%;

    background-color: var(--color-primary);

    box-shadow: rgb(0 0 0 / 25%) 0px 2px 4px 2px;
    border-bottom: 5px solid var(black);

    img{
        width: 103px;
        height: 84px;
        color: white;
    }
   
   button{
    display: flex;
    justify-content: center;
    align-items: center;

    .navIcon{
       font-size: 35px;

       color: white;
    }
   }
`