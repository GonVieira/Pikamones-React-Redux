import React, { useState } from "react";
import Dropdown from "../../components/dropdown/index.jsx";
import CardContainer from "../../components/cardContainer/index";
import {
  MainPagePage,
  MainPageHeader,
  MainPageBody,
  MainPageFooter,
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
        <CardContainer optionSelected={optionSelected}/>
      </MainPageBody>
    </MainPagePage>
  );
};

export default MainPage;
