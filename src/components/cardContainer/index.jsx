import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../card/index";
import Pagination from "../pagination/index";
import {
  CardContainerBody,
  CardContainerFooter,
} from "../cardContainer/styledComponents/style";

const CardContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    setCurrentPage(1);

    async function getPokemons() {
      let pokemonArr = [];
      for (let i = 1; i <= 55; i++) {
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        pokemonArr.push(res.data);
      }
      setPokemonList(pokemonArr);
    }
    getPokemons();
  }, []);

  //GET CURRENT POSTS
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = pokemonList.slice(indexOfFirstPost, indexOfLastPost);

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
          totalPosts={pokemonList.length}
        />
      </CardContainerFooter>
    </>
  );
};

export default CardContainer;
