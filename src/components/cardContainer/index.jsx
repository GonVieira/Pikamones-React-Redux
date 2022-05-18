import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../card/index";
import Pagination from "../pagination/index";
import {
  CardContainerBody,
  CardContainerFooter,
  LoadingContainer,
  LoadingText,
  LoadingImg,
} from "../cardContainer/styledComponents/style";
import { useDispatch, useSelector } from "react-redux";
import gif from "../../assets/mew_gif.gif";

const CardContainer = (optionSelected) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const pikamones = useSelector((state) => state);
  const dispatch = useDispatch();
  const [numberOfPikamones] = useState(386);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setCurrentPage(1);

    const getAllFilteredPikamones = async () => {
      setDone(false);
      let pikamonesList = [];
      for (let i = 1; i <= numberOfPikamones; i++) {
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        pikamonesList.push(res.data);
      }
      let filteredPikamons = [];
      for (let i = 0; i < pikamonesList.length; i++) {
        if (
          pikamonesList[i].types[0].type.name === optionSelected.optionSelected
        ) {
          filteredPikamons.push(pikamonesList[i]);
        }
        if (pikamonesList[i].types[1] !== undefined) {
          if (
            pikamonesList[i].types[1].type.name ===
            optionSelected.optionSelected
          ) {
            filteredPikamons.push(pikamonesList[i]);
          }
        }
      }
      dispatch({ type: "GET_FILTERED_PIKAMONES", payload: filteredPikamons });
      setDone(true);
    };

    if (
      optionSelected.optionSelected === "All" ||
      optionSelected.optionSelected === undefined
    ) {
      setDone(false);
      dispatch({ type: "GET_ALL_PIKAMONES", payload: pikamones });
      setTimeout(() => setDone(true), 4000);
    } else {
      getAllFilteredPikamones();
    }
  }, [optionSelected]);

  //GET CURRENT POSTS
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = pikamones.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      {done ? (
        <>
          <CardContainerBody>
            {currentPosts.map((values) => {
              return <Card poke={values} />;
            })}
          </CardContainerBody>
          <CardContainerFooter>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              postsPerPage={postsPerPage}
              totalPosts={pikamones.length}
            />
          </CardContainerFooter>
        </>
      ) : (
        <LoadingContainer>
          <LoadingText>LOADING...</LoadingText>
          <LoadingImg src={gif} alt="loading..." />
        </LoadingContainer>
      )}
    </>
  );
};

export default CardContainer;
