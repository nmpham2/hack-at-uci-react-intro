import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import ExtraPage from "./pages/ExtraPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/extra" element={<ExtraPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
