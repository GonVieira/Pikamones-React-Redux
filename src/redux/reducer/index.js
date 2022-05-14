import initialState from "./initialState";

const pikamoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PIKAMONES":
      return (state = action.payload);

    default:
      return state;
  }
};


export default pikamoneReducer;