import React from "react";
import "./App.css";
import MainPage from "./pages/mainPage";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="app">
          <MainPage />
        </div>
      </Provider>
    </>
  );
}

export default App;
