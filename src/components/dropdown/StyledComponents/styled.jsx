import styled from "styled-components";

export const DropdownAndTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 150px;
  padding: 2px;
  margin-top: 20px;
  margin-bottom: 2px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: white;
  font-weight: bold;
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  justify-content: center;
  align-items: center;
  position: relative;
  display: inline-block;
  width: 160px;
`;

export const StyledDropdown = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  padding: 8px;
  width: 100%;
  font-size: 15px;
  border: 2px solid gray;
  cursor: pointer;

  &:hover {
    background-color: #e9e9ed;
    border: 2px solid black;
  }

  &:focus {
    border: 2px solid black;
    border-bottom: none;
  }
`;

export const DropdownText = styled.p`
  font-size: 15px;
  font-family: monospace;
  color: #000000;
`;
export const DropdownArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

export const DropdownContentContainer = styled.div`
  position: absolute;
  min-width: 160px;
  border-left: 2px solid black;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  width: 100%;
  overflow: auto;
  z-index: 2;
  transition: all 0.3s ease-out;
  animation: 300ms ease-in-out forwards;
  transform-origin: top center;
  padding: 5px 15px;
  background-color: #e9e9ed;
  cursor: pointer;
`;

export const DropdownContentOption = styled.button`
  width: 100%;
  height: 30px;
  border: 0px 2px 2px 2px solid black;
  border-style: none;
  font-weight: 500;
  text-transform: capitalize;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) => props.active ? "black" : "#e9e9ed"};
  color: ${(props) => props.active ? "white" : "black"};

  &:hover {
    background-color:${(props) => props.active ? "black" : "#cdcdcd"};
  }
`;
