import React from "react";
import { useEffect, useRef, useState } from "react";

import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Color from "./pages/Color";
import Typography from "./pages/Typography";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex">
      {/* sidebar */}
      <Sidebar />
      <div className="w-screen h-screen p-6 bg-background-hover overflow-auto">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/color" element={<Color />} />
          <Route path="/typography" element={<Typography />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
