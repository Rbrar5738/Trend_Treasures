import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCardMen from './HomeSectionCardMen.jsx';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button } from 'react-bootstrap';
import {HomeCarouselImages} from './HomeCarouselImages.js';

const HomeSectionCarsousal = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    768: { items: 2 },
    880: { items: 3 },
    1024: { items: 3 },
    1150: { items: 4 },
    1280: { items: 4 },
    1380:{items:5},
    1536: { items: 5 },
  };

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);

  const syncActiveIndex = ({item}) => setActiveIndex(item)
  
 const items= HomeCarouselImages.images.map((item, index) => <HomeSectionCardMen item={item} key={index} />);

  return (
    <div className="border bg-gray-100">
      <div className='relative p-5'>
        <AliceCarousel 
          items={items}
          disableButtonsControls
          responsive={responsive}        
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
{  activeIndex!==items.length-5 &&  <Button
          variant="contained"
          className='z-50 shadow-xl bg-white hover:bg-gray-300'
          onClick={slideNext}
          style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '.8rem', borderLeft: "2px gray solid" }}
          aria-label='next'
        >
           <KeyboardArrowRightIcon />
          
        </Button>}
        {  activeIndex!==0 && <Button
          variant="contained"
          className='z-50 shadow-xl bg-white hover:bg-gray-300'
          onClick={slidePrev}
         
          style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%) ', left: '.12rem', borderRight: "2px rgba(0,0,0,0.5) solid" }}
          aria-label='prev'
        >
         <KeyboardArrowLeftIcon />
        </Button>
}
      </div>
    </div>
  );
};

export default HomeSectionCarsousal;