import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import HomePage from './component/HomePage/HomePage';
import RestaurantsPage from './component/RestaurantsPage/RestaurantsPage';
import ChefsPage from './component/ChefsPage/ChefsPage';

const App: React.FC = ()=> {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/RestaurantsPage" element={<RestaurantsPage />} />
      <Route path="/ChefsPage" element={<ChefsPage />} />
    </Routes>
  </BrowserRouter>


  );
}

export default App;
