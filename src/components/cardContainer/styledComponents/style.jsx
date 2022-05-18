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

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;

  @media (max-width: 400px) {
    width: 80%;
    height: 80%;
  }
`

export const LoadingText = styled.h1`
  font-size: 20px;
  color: white;
`

export const LoadingImg = styled.img`
  width: 100%;
  height: 100%;
`
