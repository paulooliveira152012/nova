import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./frontend/pages";
import About from "./frontend/pages/about";
import Header from "./frontend/component/header";
import SideMenu from "./frontend/component/sideMenu";

const App = () => {
  return (
    <Router>
      <Header />
      <SideMenu />
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="aboutUs" element={<About/>}/>
      </Routes>
    </Router>
  )
}

export default App