import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Itinerary() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      className="slider-container"
      style={{
        height: "500px",
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <div className="h-[500px] w-full max-w-[800px] mx-auto">
        <Slider {...settings}>
          <div className="flex justify-center items-center h-[500px]">
            <img
              className="w-full h-[500px] object-cover object-center"
              src="https://i.imgur.com/KiDzz21.jpg"
              alt="Saint_Léger_Sur_Dheune"
            />
          </div>
          <div className="flex justify-center items-center h-[500px]">
            <img
              className="w-full h-[500px] object-cover object-center"
              src="https://i.imgur.com/0B9HXi5.jpg"
              alt="Château de Rully"
            />
          </div>
          <div className="flex justify-center items-center h-[500px]">
            <img
              className="w-full h-[500px] object-cover object-center"
              src="https://i.imgur.com/UwfFNZx.jpg"
              alt="Saône River"
            />
          </div>
          <div className="flex justify-center items-center h-[500px]">
            <img
              className="w-full h-[500px] object-cover object-center"
              src="https://i.imgur.com/gouXWe0.jpg"
              alt="Chalon-sur-Saône"
            />
          </div>
          <div className="flex justify-center items-center h-[500px]">
            <img
              className="w-full h-[500px] object-cover object-center"
              src="https://i.imgur.com/mYs8kHQ.jpg"
              alt="chateau_de_chalon"
            />
          </div>
          <div className="flex justify-center items-center h-[500px]">
            <img
              className="w-full h-[500px] object-cover object-center"
              src="https://i.imgur.com/ovDvvaq.jpg"
              alt="Saint-Jean de-Losne"
            />
          </div>
          <div className="flex justify-center items-center h-[500px]">
            <img
              className="w-full h-[500px] object-cover object-center"
              src="https://i.imgur.com/31W7dVQ.jpg"
              alt="Air Balloons - Paris"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}
