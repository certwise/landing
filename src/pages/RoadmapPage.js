import React from "react";

import Header from "../partials/Header";
import Roadmap from "../partials/Roadmap";
// import Cta from "../partials/Cta";
import Footer from "../partials/Footer";

function RoadmapPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <main className="flex-grow">
              {/*  Page sections */}
              <Roadmap />
            </main>
          </div>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default RoadmapPage;
