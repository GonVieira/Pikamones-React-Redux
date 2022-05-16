import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  CardBody,
  CardImgContainer,
  CardImg,
  CardTypeContainer,
  CardType,
  TypeText,
  CardStatsBox,
  CardNameContainer,
  CardNameText,
  CardStatsContainer,
  CardStatsAttributes,
  CardStatsAttributesText,
  CardStatsValues,
  CardStatsValuesText,
  SpecialAbilitiesContainer,
  AbilityDiv,
  AbilityText,
  AbilityVal,
  HiddenAbDiv,
  HiddenAbText,
  HiddenAbVal,
} from "../card/styledComponents/index";

const Card = ({ poke }) => {
  const [statsNames, setStatsNames] = useState([]);
  const [statsValues, setStatsValues] = useState([]);

  useEffect(() => {
    async function getStatsNames() {
      let res = await axios.get(`https://pokeapi.co/api/v2/stat?limit=6`);
      setStatsNames(res.data.results);
    }
    getStatsNames();
  }, []);

  useEffect(() => {
    const getStatsValues = () => {
      let valuesArr = [];
      poke.stats.map((values) => {
        valuesArr.push(values.base_stat);
      });
      setStatsValues(valuesArr);
    };
    getStatsValues();
  }, []);

  return (
    <CardBody type={poke.types[0].type.name}>
      <CardImgContainer>
        <CardImg
          src={
            poke.sprites.versions["generation-v"]["black-white"].animated[
              "front_default"
            ]
          }
          alt="Pokemon image"
        />
      </CardImgContainer>
      <CardTypeContainer>
        <CardType>
          <TypeText>{poke.types[0].type.name}</TypeText>
        </CardType>
      </CardTypeContainer>
      <CardStatsBox>
        <CardNameContainer>
          <CardNameText>{poke.name}</CardNameText>
        </CardNameContainer>

        <CardStatsContainer>
          <CardStatsAttributes>
            {statsNames.map((values) => {
              return (
                <CardStatsAttributesText>
                  {values.name}:
                </CardStatsAttributesText>
              );
            })}
            <CardStatsAttributesText>Height:</CardStatsAttributesText>
            <CardStatsAttributesText>Weigth:</CardStatsAttributesText>
          </CardStatsAttributes>
          <CardStatsValues>
            {statsValues.map((value, index) => {
              if (index === 5) {
                return <CardStatsValuesText>{value} m/s</CardStatsValuesText>;
              }
              return <CardStatsValuesText>{value}</CardStatsValuesText>;
            })}
            <CardStatsValuesText>{poke.height} m</CardStatsValuesText>
            <CardStatsValuesText>{poke.weight} Kg</CardStatsValuesText>
          </CardStatsValues>
        </CardStatsContainer>
        <SpecialAbilitiesContainer>
          <AbilityDiv>
            <AbilityText>
              Ability: <AbilityVal>{poke.abilities[0].ability.name}</AbilityVal>
            </AbilityText>
          </AbilityDiv>
          <HiddenAbDiv>
            <HiddenAbText>
              Hidden Ability:{" "}
              <HiddenAbVal>
                {poke.abilities.length === 1
                  ? "-"
                  : poke.abilities[1].ability.name}
              </HiddenAbVal>
            </HiddenAbText>
          </HiddenAbDiv>
        </SpecialAbilitiesContainer>
      </CardStatsBox>
    </CardBody>
  );
};

export default Card;
