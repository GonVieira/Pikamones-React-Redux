import React from "react";
import "./App.css";
import MainPage from "./pages/mainPage";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  console.log("Rendering APP.");

  return (
    
    <div className="app">
      <MainPage />
    </div>
  );
}

export default App;
