"use client";
import React from "react";
import Slider from "react-slick";
import Slide from "./_components/NewHome/Slide";
import BannerOne from "../../public/assets/banner-1.webp";
import BannerTwo from "../../public/assets/banner-2.webp";
import BannerThree from "../../public/assets/banner-3.webp";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderData = [
    {
      id: 1,
      img: BannerOne,
      price: "130$",
      title: "Sale offer",
      mainTitle: "New Winter Summer Sale",
    },
    {
      id: 2,
      img: BannerTwo,
      price: "1340$",
      title: "Sale offer",
      mainTitle: "New Fashion Summer Sale",
    },
    {
      id: 3,
      img: BannerThree,
      price: "140$",
      title: "Sale offer",
      mainTitle: "Sun glasses Summer Sale",
    },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider autoplay {...settings}>
          {sliderData?.map((s, idx) => {
            return (
              <Slide
                key={idx}
                imageURL={s?.img?.src}
                title={s?.title}
                mainTitle={s?.mainTitle}
                price={s?.price}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
