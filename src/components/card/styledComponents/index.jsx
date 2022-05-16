import styled from "styled-components";

const typesColors = {
  electric: "linear-gradient(to left top, #F7D02C, #f7ce2ca1);",
  fire: "linear-gradient( to left top, #EE8130, #ee823078);",
  water: "linear-gradient( to left top, #6390F0, #6390f08c);",
  ghost: "linear-gradient( to left top, #735797, #73579756);",
  psychic: "linear-gradient( to left top, #F95587, #f955868e);",
  grass: "linear-gradient( to left top, #7AC74C, #79c74c8b);",
  normal: "linear-gradient( to left top, #A8A77A, #a8a77a9c);",
  fighting: "linear-gradient( to left top, #C22E28, #c22d288d);",
  flying: "linear-gradient( to left top, #A98FF3, #aa8ff3a9);",
  poison: "linear-gradient( to left top, #A33EA1, #a33ea190);",
  ground: "linear-gradient( to left top, #E2BF65, #e2bf6590);",
  rock: "linear-gradient( to left top, #B6A136, #b6a136a4);",
  bug: "linear-gradient( to left top, #A6B91A, #a6b91a68);",
  steel: "linear-gradient( to left top, #B7B7CE, #b7b7ce6b);",
  ice: "linear-gradient( to left top, #96D9D6, #96d9d68a);",
  dragon: "linear-gradient( to left top, #6F35FC, #6d35fc90);",
  dark: "linear-gradient( to left top, #705746, #70574688);",
  fairy: "linear-gradient( to left top, #D685AD, #d685ad8f);",
}

export const CardBody = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  margin: 8px;
  width: 360px;
  height: 550px;
  border-radius: 5px;
  background: ${({type}) => {return typesColors[type]}};
`;

//CARD IMG
export const CardImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-width: 300px;
  min-height: 235px;
`;
export const CardImg = styled.img`
  justify-self: center;
  width: 80%;
  height: 90%;
`;

//POKEMON CARD NAME
export const CardNameText = styled.p`
  text-transform: capitalize;
  font-size: 28px;
  font-weight: 900;
  padding: 5px;
`;

//CARD TYPE
export const CardTypeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 15%;
  width: 100%;
  position: relative;
`;
export const CardType = styled.div`
  display: flex;
  padding: 5px;
  background-color: black;
  border-radius: 5px;
  margin-right: 35px;
  position: absolute;
  padding: 5px;
`;
export const TypeText = styled.p`
  color: #f4f4f4;
  font-size: 18px;
  text-transform: uppercase;
`;

//CARD STATS
export const CardStatsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  padding: 12px;
  width: 90%;
  height: 75%;
  margin-bottom: 20px;
`;
export const CardStatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  line-height: 15px;
  margin-right: 50px;
`;

//CARD ATRIBUTES
export const CardStatsAttributes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const CardStatsAttributesText = styled.p`
  margin-right: 8px;
  text-transform: uppercase;
  font-size: 13px;
`;

//CARD STATS VALUES
export const CardStatsValues = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const CardStatsValuesText = styled.p`
  font-weight: 900;
  font-size: 13px;
`;

//CARD POKE NAME
export const CardNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

//SPECIAL HABILITIES
export const SpecialAbilitiesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 5px;
  line-height: 20px;
  padding: 10px 30px;
`;
//ABILITIES
export const AbilityDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const AbilityText = styled.p`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
`;
export const AbilityVal = styled.span`
  align-self: center;
  text-transform: capitalize;
  font-weight: 900;
`;
//HIDDEN ABILITY
export const HiddenAbDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;
export const HiddenAbText = styled.p`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-size: 13px;
`;
export const HiddenAbVal = styled.span`
  align-self: center;
  text-transform: capitalize;
  font-weight: 900;
  font-size: 13px;
`;
