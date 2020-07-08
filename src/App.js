import React from 'react';
import './App.css';
import { Header } from "./components/header/header";
import {Characters} from "./components/characters/characters";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Characters />
    </div>
  );
}

export default App;
