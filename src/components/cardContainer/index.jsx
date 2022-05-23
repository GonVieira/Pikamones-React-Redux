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
  const pikamones = useSelector((state) => state.pikamones);
  const currentPikamones = useSelector((state) => state.currentPikamones);
  const dispatch = useDispatch();
  const [done, setDone] = useState(false);

  useEffect(() => {
    setCurrentPage(1);

    const getAllFilteredPikamones = () => {
      setDone(false);

      let filteredPikamons = [];
      for (let i = 0; i < pikamones.length; i++) {
        if (pikamones[i].types[0].type.name === optionSelected.optionSelected) {
          filteredPikamons.push(pikamones[i]);
        }
        if (pikamones[i].types[1] !== undefined) {
          if (
            pikamones[i].types[1].type.name === optionSelected.optionSelected
          ) {
            filteredPikamons.push(pikamones[i]);
          }
        }
      }
      dispatch({ type: "SET_FILTERED_PIKAMONES", payload: filteredPikamons });
      setTimeout(() => setDone(true), 4000);
    };

    if (
      optionSelected.optionSelected === "All" ||
      optionSelected.optionSelected === undefined
    ) {
      setDone(false);
      dispatch({ type: "SET_FILTERED_PIKAMONES", payload: pikamones });
      setTimeout(() => setDone(true), 4000);
    } else {
      getAllFilteredPikamones();
    }
  }, [optionSelected]);

  //GET CURRENT POSTS
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = currentPikamones.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

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
              totalPosts={currentPikamones.length}
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
