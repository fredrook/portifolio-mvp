import styled from "styled-components";

export const TagContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  h2 {
    position: relative;
    top: 6.5%;
    left: 3%;
    width: 200px;
    height: 53px;
    font-weight: 400;
    font-size: 35px;
    line-height: 44px;
    text-decoration: underline;
    color: var(--color-orange);
  }
`;