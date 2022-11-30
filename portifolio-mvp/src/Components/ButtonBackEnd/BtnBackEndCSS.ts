import styled from "styled-components";

export const TagA = styled.a`
  display: flex;
  justify-content: center;
  width: 191px;
  height: 52px;
  font-size: 24px;
  line-height: 26px;
  background-color: #d9d9d940;
  color: var(--color-white);
  border: 2px solid #ff6b00;
  border-radius: 12px;

  :hover {
    filter: brightness(8);
  }

  p {
    display: flex;
    align-items: center;
    font-size: 24px;
    line-height: 26px;
    color: var(--color-white);
    font-family: "Alice", serif;
  }
`;
