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
        <Slider
          {...settings}
          nextArrow={<div className="slick-arrow slick-next custom-arrow" />}
          prevArrow={<div className="slick-arrow slick-prev custom-arrow" />}
        >
          <div className="flex justify-center items-center h-[500px]">
            <img
              className="w-full h-[500px] object-cover object-center"
              src="https://i.imgur.com/KiDzz21.jpg"
              alt="Saint_Léger_Sur_Dheune"
            />
            <p className="text-center">Sunday, October 29, 2023</p>
            <p className="text-sm">
              The Adrienne's guide will meet you at the hotel and escort the
              transfer from Paris via motorcoach, to Saint Léger-sur-Dheune
              where the ADRIENNE is moored. Champagne Reception and Welcome
              Dinner on board.
            </p>
          </div>
          <div className="flex justify-center items-center h-[500px]">
            <img
              className="w-full h-[500px] object-cover object-center"
              src="https://i.imgur.com/0B9HXi5.jpg"
              alt="Château de Rully"
            />
            <p className="text-center">Monday, October 30, 2023</p>
            <p className="text-sm">
              Morning cruise to Chagny. Early afternoon visit of the Château de
              Rully. Family-owned and occupied since its beginning in the 12th
              century, the current owner is your host for a remarkable stroll
              through his family's history. Dinner ashore at the three-star
              Michelin restaurant, Lameloise.
            </p>
          </div>
          <div className="flex justify-center items-center h-[500px]">
            <img
              className="w-full h-[500px] object-cover object-center"
              src="https://i.imgur.com/UwfFNZx.jpg"
              alt="Saône River"
            />
            <p className="text-center">Tuesday, October 31, 2023</p>
            <p className="text-sm">
              Morning cruise along the picturesque Canal du Centre and Saône
              River to the city of Chalon-sur-Saône. afternoon, drive to the
              well-known wine town of Chassagne Montrachet for a private cellar
              tour and wine tasting at a prominent local vintner.
            </p>
          </div>
          <div className="flex justify-center items-center h-[500px]">
            <img
              className="w-full h-[500px] object-cover object-center"
              src="https://i.imgur.com/gouXWe0.jpg"
              alt="Chalon-sur-Saône"
            />
            <p className="text-center">Wednesday, November 1, 2023</p>
            <p className="text-sm">
              Morning walking tour of Chalon-sur-Saône. Re turn to ADRIENNE for
              lunch on board. Beaune, the medieval wine capital of 15th century
              Hospice and the historic to explore on your own. After lunch,
              drive to Burgundy. Visit the quarter, with free time to explore on
              your own.
            </p>
          </div>
          <div className="flex justify-center items-center h-[500px]">
            <img
              className="w-full h-[500px] object-cover object-center"
              src="https://i.imgur.com/mYs8kHQ.jpg"
              alt="chateau_de_chalon"
            />
            <p className="text-center">Thursday, November 2, 2023</p>
            <p className="text-sm">
              Morning cruise to Seurre. Afternoon visit of the remarkable
              12th-century museum château, the Clos de Vougeot, headquarters of
              the Chevaliers du Tastevin, whose special label is awarded
              annually to the finest Côte-d'Or wines.
            </p>
          </div>
          <div className="flex justify-center items-center h-[500px]">
            <img
              className="w-full h-[500px] object-cover object-center"
              src="https://i.imgur.com/ovDvvaq.jpg"
              alt="Saint-Jean de-Losne"
            />
            <p className="text-center">Friday, November 3, 2023</p>
            <p className="text-sm">
              Morning cruise to the final mooring in Saint-Jean de-Losne. After
              lunch, enjoy a walking tour of Dijon, starting in front of the
              Ducal Palace, with time to browse in the fine specialty shops.
              Aperitifs and the Captain's Farewell Dinner on board.
            </p>
          </div>
          <div className="flex justify-center items-center h-[500px]">
            <img
              className="w-full h-[500px] object-cover object-center"
              src="https://i.imgur.com/31W7dVQ.jpg"
              alt="Air Balloons - Paris"
            />
            <p className="text-center">Saturday, November 4, 2023</p>
            <p className="text-sm">
              After breakfast, depart the barge for the escorted transfer to
              Paris, arriving at the hotel at approximately 12:45 PM. Note: The
              Captain will schedule Hot Air Ballooning during the cruise upon
              request. Balloon flights are dependent on favorable wind
              conditions and a minimum of four passengers.
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
}
