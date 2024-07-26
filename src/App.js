import React from "react";

import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Insert from "./components/Insert/Insert";
import AboutUs from "./components/AboutUs/AboutUs";
import OurService from "./components/OurService/OurService";
import ChooseUs from "./components/ChooseUs/ChooseUs";

function App() {
  

  return (
    <div className="App clear">
      <Nav/>
      <Header/>
      <Insert/>
      <AboutUs/>
      <OurService/>
      <ChooseUs/>
    </div>
  );
}

export default App;
