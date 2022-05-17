import initialState from "./initialState";

const pikamoneReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case "GET_FILTERED_PIKAMONES":
      return action.payload;

    case "GET_ALL_PIKAMONES":
      return initialState;

    default:
      return state;
  }
};

export default pikamoneReducer;
