import React, { useState, useEffect, Suspense } from "react";
import Dropdown from "../../components/dropdown/index.jsx";
const CardContainer = React.lazy(() =>
  import("../../components/cardContainer/index")
);
import gif from "../../assets/mew_gif.gif";
import {
  MainPagePage,
  MainPageHeader,
  MainPageBody,
  LoadingContainer,
  LoadingText,
  LoadingImg,
} from "../mainPage/styledComponents/style";
import { useSelector } from "react-redux";

const MainPage = () => {
  const [optionSelected, setOptionSelected] = useState("All");
  const pikamones = useSelector((state) => state.pikamones);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (pikamones.length >= 386) {
      setIsLoading(false);
    }
  }, [pikamones]);

  return (
    <MainPagePage>
      <MainPageHeader>
        <Dropdown
          optionSelected={optionSelected}
          setOptionSelected={setOptionSelected}
        />
      </MainPageHeader>
      {isLoading ? (
        <LoadingContainer>
          <LoadingText>LOADING...</LoadingText>
          <LoadingImg src={gif} alt="loading..." />
        </LoadingContainer>
      ) : (
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
      )}
    </MainPagePage>
  );
};

export default MainPage;
