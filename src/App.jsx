import React from "react";
import './Css/style.css';
import { Provider } from "react-redux";
import Home from "./Components/Home";
import store from "./Store/store";

export default function App() {
  const T = ['name','categorie','prix','quanity'] 
  return(
    <Provider store={store}>
      <Home T={T}/>
    </Provider>
  )
}