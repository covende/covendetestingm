import React from 'react';

import Carousel from 'react-multi-carousel';
import './carousel.css';
// import 'react-multi-carousel/lib/styles.css';

const configs = {
  banner: {
    responsive: {
      superLargeDesktop: {
        breakpoint: { max: 3840, min: 1024 },
        items: 1,
      },
      desktop: {
        breakpoint: { max: 1024, min: 769 },
        items: 1,
      },
      tablet: {
        breakpoint: { max: 768, min: 361 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 360, min: 0 },
        items: 1,
      },
    },
    props: `additionalTransfrom={0}
          arrows
          autoPlay={true}
          autoPlaySpeed={3000}
          centerMode
          infinite
          className=''
          containerClass='container'
          dotListClass=''
          draggable
          focusOnSelect={false}
          itemClass=''
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          showDots
          sliderClass=''
          slidesToSlide={1}
          swipeable`,
  },
  items: {
    responsive: {
      superLargeDesktop: {
        breakpoint: { max: 3840, min: 1024 },
        items: 4,
      },
      desktop: {
        breakpoint: { max: 1024, min: 769 },
        items: 2,
      },
      tablet: {
        breakpoint: { max: 768, min: 361 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 360, min: 0 },
        items: 1,
      },
    },
    props: `additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable`,
  },
};

function CarouselPackage({ children, ...rest }) {
  return (
    <Carousel
      responsive={configs[rest.type].responsive}
      {...configs[rest.type].props}
      {...rest}
    >
      {children}
    </Carousel>
  );
}

export default CarouselPackage;
