import React, { useState, Suspense } from "react";
import Dropdown from "../../components/dropdown/index.jsx";
const CardContainer = React.lazy(() =>
  import("../../components/cardContainer/index")
);
import gif from "../../assets/mew_gif.gif";
import {
  MainPagePage,
  MainPageHeader,
  MainPageBody,
  MainPageFooter,
  LoadingContainer,
  LoadingText,
  LoadingImg,
} from "../mainPage/styledComponents/style";

const MainPage = () => {
  const [optionSelected, setOptionSelected] = useState("All");

  return (
    <MainPagePage>
      <MainPageHeader>
        <Dropdown
          optionSelected={optionSelected}
          setOptionSelected={setOptionSelected}
        />
      </MainPageHeader>
      <MainPageBody>
        <Suspense
          fallback={
            <LoadingContainer>
              <LoadingText>LOADING...</LoadingText>
              <LoadingImg src={gif} alt="loading..." />
            </LoadingContainer>
          }
        >
          <CardContainer optionSelected={optionSelected} />
        </Suspense>
      </MainPageBody>
    </MainPagePage>
  );
};

export default MainPage;
