import { Route, Routes, Navigate } from "react-router-dom";

import Todo from "./pages/Todo";
import Grocery from "./pages/Grocery";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
