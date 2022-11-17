import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AlbumDetail from "./components/AlbumDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/album" element={<AlbumDetail />} />
    </Routes>
  );
}

export default App;
