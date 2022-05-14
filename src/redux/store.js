import pikamoneReducer from "./reducer/index";
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({ reducer: pikamoneReducer})

export default store;
