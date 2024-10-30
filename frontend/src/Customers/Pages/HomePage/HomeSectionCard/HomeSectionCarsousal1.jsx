import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCardMen1 from "./HomeSectionCardMen1.jsx";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Button } from "react-bootstrap";
import { HomeCarouselImages } from "./HomeCarouselImages.js";
import {
  findProductByCategory,
  findProducts,
} from "../../../../State/Product/Action.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomeSectionCarsousal1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();
  const { customersProduct } = useSelector((store) => store);
  const [isLoaderOpen, setIsLoaderOpen] = useState(false);
  const navigate = useNavigate();

  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    768: { items: 2 },
    880: { items: 3 },
    1024: { items: 3 },
    1150: { items: 4 },
    1280: { items: 4 },
    1380: { items: 5 },
    1536: { items: 5 },
  };

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const allitems = [];

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  useEffect(() => {
    dispatch(findProductByCategory("672173df839b69f713d02d8d"));
  }, []);
  

  const items = customersProduct?.products?.map((item, index) => (
    <HomeSectionCardMen1 item={item} key={index} />
  ));

  return (
    <div className="border bg-gray-100">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {/* {activeIndex !== items.length - 5 && (
          <Button
            variant="contained"
            className="z-50 shadow-xl bg-white hover:bg-gray-300"
            onClick={slideNext}
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              right: ".8rem",
              borderLeft: "2px gray solid",
            }}
            aria-label="next"
          >
            <KeyboardArrowRightIcon />
          </Button>
        )}
        {activeIndex !== 0 && (
          <Button
            variant="contained"
            className="z-50 shadow-xl bg-white hover:bg-gray-300"
            onClick={slidePrev}
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%) ",
              left: ".12rem",
              borderRight: "2px rgba(0,0,0,0.5) solid",
            }}
            aria-label="prev"
          >
            <KeyboardArrowLeftIcon />
          </Button>
        )} */}
      </div>
    </div>
  );
};

export default HomeSectionCarsousal1;
