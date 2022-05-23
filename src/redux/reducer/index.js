import initialState from "./initialState";

const pikamoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTERED_PIKAMONES":
      return { ...state, currentPikamones: action.payload };

    default:
      return state;
  }
};

export default pikamoneReducer;
