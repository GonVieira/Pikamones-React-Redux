import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import {
  DropdownAndTextContainer,
  TextContainer,
  Text,
  DropdownContainer,
  StyledDropdown,
  DropdownText,
  DropdownArrowContainer,
  DropdownContentContainer,
  DropdownContentOption,
} from "./StyledComponents/styled";

const Dropdown = ({ optionSelected, setOptionSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [types, setTypes] = useState([]);
  const wrapperRef = useRef(null);

  const dropDownToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    async function getTypes() {
      let typesArray = ["All"];
      let res = await axios.get(`https://pokeapi.co/api/v2/type?limit=18`);
      for (let i = 0; i < 18; i++) {
        typesArray.push(res.data.results[i].name);
      }
      setTypes(typesArray);
    }

    getTypes();
  }, [isOpen]);

  //DETECT MOUSE CLICKS OUTSIDE
  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      //CLICKED OUTSIDE OF ELEMENT
      const handler = (event) => {
        if (isOpen && ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false);
        }
      };

      //BINDE EVENT LISTENER
      document.addEventListener("mousedown", handler);
      return () => {
        // UNBIND EVENT LISTENER ON CLEANUP
        document.removeEventListener("mousedown", handler);
      };
    }, [ref, isOpen]);
  };

  useOutsideAlerter(wrapperRef);

  return (
    <DropdownAndTextContainer>
      <TextContainer>
        <Text>pokemon types list</Text>
      </TextContainer>
      <DropdownContainer ref={wrapperRef} openVal={isOpen}>
        <StyledDropdown onClick={() => dropDownToggle()}>
          <DropdownText>{optionSelected}</DropdownText>
          <DropdownArrowContainer>
            {isOpen ? (
              <MdKeyboardArrowUp style={{ verticalAlign: "middle" }} />
            ) : (
              <MdKeyboardArrowDown style={{ verticalAlign: "middle" }} />
            )}
          </DropdownArrowContainer>
        </StyledDropdown>
        {isOpen && (
          <DropdownContentContainer>
            {types.map((type, index) => (
              <DropdownContentOption
                key={type + index}
                onClick={() => {
                  dropDownToggle();
                  setOptionSelected(type);
                }}
                active={type === optionSelected}
              >
                {type}
              </DropdownContentOption>
            ))}
          </DropdownContentContainer>
        )}
      </DropdownContainer>
    </DropdownAndTextContainer>
  );
};

export default Dropdown;
