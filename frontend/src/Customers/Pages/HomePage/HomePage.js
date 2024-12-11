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
      <h1>Trend Treasures</h1>
      <p>
        **Trend Treasures: Discover the Latest Fashion Trends** At Trend
        Treasures, we bring you the most stylish and fashionable pieces to
        elevate your wardrobe. Whether you're looking for casual, professional,
        or evening wear, we offer a wide range of clothing and accessories to
        match every occasion and style preference. Our curated collections
        reflect the latest trends from the world of fashion, ensuring you stay
        ahead of the curve and always look your best. Our men's collection
        features sleek, modern styles with an emphasis on comfort and
        versatility. From tailored suits and shirts to relaxed denim and
        outerwear, each piece is crafted to provide a perfect blend of style and
        function. Whether you're dressing for a formal event or a casual weekend
        getaway, you'll find the right attire to suit your personality and
        lifestyle. For women, Trend Treasures offers a diverse range of chic and
        elegant pieces that cater to every taste. Explore our stunning dresses,
        trendy tops, and versatile bottoms, all designed with the latest
        patterns and colors. From sophisticated office wear to effortlessly
        stylish casual outfits, our women's collection will leave you feeling
        confident and on top of your fashion game. We believe fashion is about
        more than just clothing – it’s about expressing yourself. That's why we
        offer unique accessories, shoes, and bags to complement your look. With
        Trend Treasures, you can easily update your wardrobe with the latest
        pieces without sacrificing quality or comfort. Stay stylish, stay
        confident, and always be on trend with Trend Treasures!
      </p>

      <div className="space-y-10 py-20 mt-5 bg-gray-50">
        <h3 className="italic text-center p-5 bg-gray-200 shadow-md font-bold text-5xl text-blue-900">
          FEATURED PRODUCTS
        </h3>
        <h3 className="italic text-blue-900 font-bold ">Women Dresses</h3>
        <div className="flex justify-center space-x-5 bg-gray-200 p-4 shadow-xl">
          {data
            .filter((item) => item.category.$oid === "67217443839b69f713d02d8e")
            .slice(0, 5)
            .map((item) => (
              <HomeSectionCardMen key={item.id} item={item} />
            ))}
        </div>
        <h3 className="italic text-blue-900 font-bold">Men Shirts</h3>
        <div className="flex justify-center space-x-5 bg-gray-200 p-4 shadow-xl">
          {data
            .filter((item) => item.category.$oid === "672173df839b69f713d02d8d")
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
