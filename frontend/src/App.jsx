import React from "react";
import { Homepage, BlogContentPage } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog/:id" element={<BlogContentPage />} />
      </Routes>
    </div>
  );
}

export default App;
