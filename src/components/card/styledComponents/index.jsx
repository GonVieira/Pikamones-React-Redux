import styled from "styled-components";

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
  background-color: #c88670;
`;

//CARD IMG
export const CardImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 80%;
  height: 43%;
`;
export const CardImg = styled.img`
  justify-self: center;
  width: 100%;
  height: 100%;
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
