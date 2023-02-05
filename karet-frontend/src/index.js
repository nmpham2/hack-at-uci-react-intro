import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ChakraProvider } from "@chakra-ui/react";
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from "./components/Header/Header.jsx";
import Recipe from "./components/Recipe/Recipe.jsx";
import GenerateButton from './components/GenerateButton/GenerateButton';
import MainPage from './pages/Main/Main';
import Ingredients from './pages/Ingredients/Ingredients';
import AboutToExpire from './pages/AboutToExpire/AboutToExpire';

function Test() {
  return (
    <ChakraProvider>
    <NavBar />
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/ingredients" element={<Ingredients />} />
    <Route path="/abouttoexpire" element={<AboutToExpire />}/>
  </Routes>

    </ChakraProvider>
);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Test />
  </BrowserRouter>
);
