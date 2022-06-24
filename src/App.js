import React, { useState } from "react";
import LandingPage from './Homepage/LandingPage'
import Page2 from './Page2/Page2';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
  <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/page" element={<Page2 />}></Route>
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
