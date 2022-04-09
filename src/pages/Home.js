import React from "react";

import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import FeaturesHome from "../partials/FeaturesHome";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import FeaturesWorld from "../partials/FeaturesWorld";
import Process from "../partials/Process";
// import News from '../partials/News';
import Cta from "../partials/Cta";
import Footer from "../partials/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        {/* <FeaturesHome /> */}
        <FeaturesBlocks />
        {/* <FeaturesWorld /> */}

        {/* Process flow starts */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:pt-20"></div>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h2 mb-4">Issue with confidence.</h1>
            <p className="text-xl text-gray-600">
              Nobody should second-guess themselves. Four easy steps, magical
              UI.
              <br />
              We've made it easy, so you don't have to worry.
            </p>
          </div>
        </div>
        <Process />
        {/* Process flow ends */}

        {/* <News /> */}
        {/* <Cta /> */}
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
