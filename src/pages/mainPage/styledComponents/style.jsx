import styled from "styled-components";

export const MainPagePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px;
`;

export const MainPageBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px;

  @media (max-width: 400px) {
    margin: 0px;
    max-width: 90%;
    padding: 0px;
    padding: 0px;
  }
`;

export const MainPageHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px;
`;

export const MainPageFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40%;
  height: 40%;
  padding: 10px;
`

export const LoadingText = styled.h1`
  font-size: 20px;
  color: white;
`

export const LoadingImg = styled.img`
  width: 80%;
  height: 80%;
`
