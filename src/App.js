import React from "react";

import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Insert from "./components/Insert/Insert";
import AboutUs from "./components/AboutUs/AboutUs";
import OurService from "./components/OurService/OurService";
import ChooseUs from "./components/ChooseUs/ChooseUs";
import GetStarted from "./components/GetStarted/GetStarted";

function App() {
  

  return (
    <div className="App clear">
      <Nav/>
      <Header/>
      <Insert/>
      <AboutUs/>
      <OurService/>
      <ChooseUs/>
      <GetStarted/>
    </div>
  );
}

export default App;
