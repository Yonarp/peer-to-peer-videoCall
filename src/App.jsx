import React from "react";
import {BrowserRouter, Route,Routes, Switch} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import VideoCallPage from "./pages/VideoCallPage";

import "./App.css";

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<LandingPage/>} />
     <Route path="/video" element={<VideoCallPage />} />
   </Routes>
   </BrowserRouter>
  );
};

export default App;
