import { Route, Routes, Navigate } from "react-router-dom";

import Todo from "./pages/Todo";
import Grocery from "./pages/Grocery";

import "./App.css";

function App() {
  /*
    This is the App component which is generated when we create a new React app. 
    This is the main component in React which acts as a container for all other components.

    Here, we are creating our App and providing different paths which render different 
    components.
  */
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/todo" element={<Todo />} />
        {/**TODO: Add route to Grocery page here*/}
        <Route path="/grocery" element={<Grocery />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
