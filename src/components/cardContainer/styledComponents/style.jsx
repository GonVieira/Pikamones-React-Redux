import styled from "styled-components";

export const CardContainerBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
  width: 90%;
  height: 100%;
  width: 100%;
  margin: 10px;

  @media (max-width: 400px) {
    margin: 0px;
    width: 50%;
    padding: 0px;
  }
`;

export const CardContainerFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`
