import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../card/index";
import Pagination from "../pagination/index";
import {
  CardContainerBody,
  CardContainerFooter,
} from "../cardContainer/styledComponents/style";
import { useDispatch, useSelector } from "react-redux";

const CardContainer = (optionSelected) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const pikamones = useSelector((state) => state);
  const dispatch = useDispatch();
  const [numberOfPikamones] = useState(151);
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setCurrentPage(1);

    const getAllPikamones = async () => {
      let pikamonesList = [];
      for (let i = 1; i <= numberOfPikamones; i++) {
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        pikamonesList.push(res.data);
      }
      dispatch({ type: "GET_PIKAMONES", payload: pikamonesList });
    };

    const getAllFilteredPikamones = async () => {
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
      dispatch({ type: "GET_PIKAMONES", payload: filteredPikamons });
    };

    if (
      optionSelected.optionSelected === "All" ||
      optionSelected.optionSelected === undefined
    ) {
      getAllPikamones();
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
  );
};

export default CardContainer;
