import React from "react";

import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Insert from "./components/Insert/Insert";
import AboutUs from "./components/AboutUs/AboutUs";
import OurService from "./components/OurService/OurService";
import ChooseUs from "./components/ChooseUs/ChooseUs";
import GetStarted from "./components/GetStarted/GetStarted";
import OurPricing from "./components/OurPricing/OurPricing";
import OurPartners from "./components/OurPartners/OurPartners";
import OurArticles from "./components/OurArticles/OurArticles";

function App() {


  return (
    <div className="App clear">
      <Nav />
      <Header />
      <Insert />
      <AboutUs />
      <OurService />
      <ChooseUs />
      <GetStarted />
      <div className="d-flex justify-center mt-50">
        <img src='/img/testimonial.svg' alt="testimonial" />
      </div>
      <OurPricing/>
      <OurPartners/>
      <OurArticles/>
    </div>
  );
}

export default App;
