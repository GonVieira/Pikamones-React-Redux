import pikamoneReducer from "./reducer/index";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const store = configureStore({ reducer: pikamoneReducer, middleware: [thunk] });

export default store;
