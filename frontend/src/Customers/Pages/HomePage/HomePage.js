import React from "react";
import MainCarousel from "../../Components/HomeCarousel/MainCarousel";
import HomeSectionCarsousal from "./HomeSectionCard/HomeSectionCarsousal";
import HomeSectionCarsousal1 from "./HomeSectionCard/HomeSectionCarsousal1";
import { data } from "./data.js";
import HomeSectionCardMen from "./HomeSectionCard/HomeSectionCardMen.jsx";

function HomePage() {
  // console.log(data[0].category.$oid);
  return (
    <div>
      <div>
        <MainCarousel />
      </div>

      <div className="space-y-10 py-20 mt-5 bg-gray-50">
        <h3 className="italic text-center p-5 bg-gray-200 shadow-md font-bold text-5xl text-blue-900">
          FEATURED PRODUCTS
        </h3>
        <h3 className="italic text-blue-900 font-bold">Women Shirts</h3>
        <div className="flex justify-center space-x-5 bg-gray-200 p-4 shadow-xl">
          {data
            .filter((item) => item.category.$oid === "672173df839b69f713d02d8d")
            .slice(0, 5)
            .map((item) => (
              <HomeSectionCardMen key={item.id} item={item} />
            ))}
        </div>
        <h3 className="italic text-blue-900 font-bold ">Women Dresses</h3>
        <div className="flex justify-center space-x-5 bg-gray-200 p-4 shadow-xl">
          {data
            .filter((item) => item.category.$oid === "67217443839b69f713d02d8e")
            .slice(0, 5)
            .map((item) => (
              <HomeSectionCardMen key={item.id} item={item} />
            ))}
        </div>

        <h3 className="italic text-blue-900 font-bold">Men Jeans</h3>
        <div className="flex justify-center space-x-5 bg-gray-200 p-4 shadow-xl">
          {data
            .filter((item) => item.category.$oid === "6721772b839b69f713d02d8f")
            .slice(0, 5)
            .map((item) => (
              <HomeSectionCardMen key={item.id} item={item} />
            ))}
        </div>

        <h3 className="italic text-blue-900">Women Saree</h3>
        <div className="flex justify-center space-x-5 bg-gray-200 p-4 shadow-xl">
          {data
            .filter((item) => item.category.$oid === "6721793f839b69f713d02d90")
            .slice(0, 5)
            .map((item) => (
              <HomeSectionCardMen key={item.id} item={item} />
            ))}
        </div>

        {/* <HomeSectionCarsousal />
        <h3 className="italic">Men Fashion</h3>
        <HomeSectionCarsousal1 /> */}
      </div>
    </div>
  );
}

export default HomePage;
