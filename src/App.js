import React from 'react';
import './App.css';
import Home from './Component/Home/Home';
import Shipment from './Component/Shipment/Shipment';
import Header from './Component/Header/Header';
import { useState } from 'react';
import { createContext } from 'react';
 export const categoryContext = createContext()
function App() {
   const [count,setCount] =  useState(['laptop']);
   return (
    <div className="App">
      <categoryContext.Provider value={[count,setCount]}>
      <h1>App count : {count}</h1>
      <Header></Header>
      <Home></Home>
      </categoryContext.Provider>
    </div>
  );
}

export default App;
