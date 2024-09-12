import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// const MainCarousel = () => {
//   const items = HomeCarouselImages.images.map((image) => (
//     <img src={image.path} alt={`Carousel Image ${image.id}`} />
//   ));

//   return (
//     <AliceCarousel
//       className="z-0"
//       mouseTracking
//       items={items}
//       controlsStrategy="alternate"
//       autoPlay
//       autoPlayInterval={1000}
//       infinite
//       disableButtonsControls
//     />
//   );
// };
// export default MainCarousel;

import Carousel from "react-bootstrap/Carousel";
import HomeCarouselImages from "./HomeCarouselImages";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MainCarousel.css";

function MainCarousel() {
  return (
    <Carousel interval={1000} controls={true} pause={false}>
      {HomeCarouselImages.images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            src={image.path} // Use require to dynamically import the image
            alt={`Carousel Image ${image.id}`}
            className="d-block w-100" // Bootstrap class to ensure image is responsive
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MainCarousel;
