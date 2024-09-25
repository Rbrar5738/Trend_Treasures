import React from "react";
import MainCarousel from "../../Components/HomeCarousel/MainCarousel";
import HomeSectionCarsousal from "./HomeSectionCard/HomeSectionCarsousal";

function HomePage() {
  return (
    <div>
      <div>
        <MainCarousel />
      </div>

      <div className="space-y-10 py-20 mt-5 bg-gray-50">
        <h3 className="italic">Men Fashion</h3>
        <HomeSectionCarsousal />
        <h3 className="italic">Men Fashion</h3>
        <HomeSectionCarsousal />
        <h3 className="italic">Men Fashion</h3>
        <HomeSectionCarsousal />
        <h3 className="italic">Men Fashion</h3>
        <HomeSectionCarsousal />
      </div>
    </div>
  );
}

export default HomePage;