import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Create from "./pages/Create";
import "./style/globalstyle";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
