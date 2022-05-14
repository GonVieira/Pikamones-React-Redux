import React from "react";
import Dropdown from "../../components/dropdown/index.jsx";
import CardContainer from "../../components/cardContainer/index";
import {
  MainPagePage,
  MainPageHeader,
  MainPageBody,
  MainPageFooter,
} from "../mainPage/styledComponents/style";

const MainPage = () => {
  return (
    <MainPagePage>
      <MainPageHeader>
        <Dropdown />
      </MainPageHeader>
      <MainPageBody>
        <CardContainer />
      </MainPageBody>
    </MainPagePage>
  );
};

export default MainPage;
