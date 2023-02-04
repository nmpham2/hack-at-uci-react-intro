import { Route, Routes, Navigate } from "react-router-dom";

import Todo from "./pages/Ingredients/Ingredients";
import NavBar from "./components/Header/Header";
import Recipe from "./components/Recipe/Recipe";
import FilterButton from "./components/FilterButton/FilterButton";
import GenerateButton from "./components/GenerateButton/GenerateButton";

import "./App.css";

function App() {
  return (
    <div className="App">
    <NavBar />
      <div className="tryRecipes">
        <h1>Try these recipes!</h1>
        <FilterButton/>
      </div>
  <Recipe />
    </div>
  );
}

export default App;
