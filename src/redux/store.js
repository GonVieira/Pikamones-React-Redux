import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const initalState = {
  pikamones: [],
  currentPikamones: [],
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "SET_FILTERED_PIKAMONES":
      return { ...state, currentPikamones: action.payload };

    case "POPULATE_INITIAL_STATE":
      return { ...state, pikamones: action.payload };
    default:
      return state;
  }
};

const store = configureStore({ reducer: reducer });

export default store;
