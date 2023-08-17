import React, { useState, useEffect, Suspense } from "react";
import Dropdown from "../../components/dropdown/index.jsx";
const CardContainer = React.lazy(() =>
  import("../../components/cardContainer/index")
);
import gif from "../../assets/mew_gif.gif";
import axios from "axios";
import {
  MainPagePage,
  MainPageHeader,
  MainPageBody,
  LoadingContainer,
  LoadingText,
  LoadingImg,
} from "../mainPage/styledComponents/style";
import { useSelector, useDispatch } from "react-redux";

const MainPage = () => {
  const [optionSelected, setOptionSelected] = useState("All");
  const pikamones = useSelector((state) => state.pikamones);
  const [isLoading, setIsLoading] = useState(true);
  const [pikamonesArray, setPikamonesArray] = useState([]);
  const dispatch = useDispatch();
  let numberOfPikamones = 386;

  const populateInitialState = async () => {
    for (let i = 1; i <= numberOfPikamones; i++) {
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      pikamonesArray.push(res.data);
    }
    dispatch({ type: "POPULATE_INITIAL_STATE", payload: pikamonesArray });
    setIsLoading(false);
  };

  useEffect(() => {
    if (pikamones.length < numberOfPikamones) {
      populateInitialState();
    }
  }, []);

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
          <CardContainer optionSelected={optionSelected} />
        </MainPageBody>
      )}
    </MainPagePage>
  );
};

export default MainPage;
