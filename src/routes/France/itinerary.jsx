import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PiArrowSquareLeft } from "react-icons/pi";
import { PiArrowSquareRight } from "react-icons/pi";

export default function Itinerary() {

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <PiArrowSquareLeft class="arrows" style={{ color: "white" }} />
      </div>
    );
  };

   const SampleNextArrow = (props) => {
     const { className, style, onClick } = props;
     return (
       <div onClick={onClick} className={`arrow ${className}`}>
         <PiArrowSquareRight class="arrows" style={{ color: "white" }} />
       </div>
     );
   };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
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
      <div className="w-full max-w-[800px] mx-auto">
        <Slider {...settings}>
          <div className="relative min-h-[500px] w-full">
            <img
              className="w-full h-full object-cover object-center"
              src="https://i.imgur.com/KiDzz21.jpg"
              alt="Saint_Léger_Sur_Dheune"
            />
            <div className="bg-pink bg-opacity-30 backdrop-blur-md flex flex-col justify-center items-center pb-4 pt-2">
              <p className="text-center text-gray-600 mb-2">
                Sunday, October 29, 2023
              </p>
              <p className="text-sm text-gray-600 text-center">
                The Adrienne's guide will meet you at the hotel and escort the
                transfer from Paris via motorcoach, to Saint Léger-sur-Dheune
                where the ADRIENNE is moored. Champagne Reception and Welcome
                Dinner on board.
              </p>
            </div>
          </div>
          <div className="relative min-h-[500px] w-full">
            <img
              className="w-full h-[500px] object-cover object-center"
              src="https://i.imgur.com/0B9HXi5.jpg"
              alt="Château de Rully"
            />
            <div className="bg-pink bg-opacity-30 backdrop-blur-md flex flex-col justify-center items-center pb-4 pt-2">
              <p className="text-center text-gray-600 mb-2">
                Monday, October 30, 2023
              </p>
              <p className="text-sm text-gray-600 text-center">
                Morning cruise to Chagny. Early afternoon visit of the Château
                de Rully. Family-owned and occupied since its beginning in the
                12th century, the current owner is your host for a remarkable
                stroll through his family's history. Dinner ashore at the
                three-star Michelin restaurant, Lameloise.
              </p>
            </div>
          </div>
          <div className="relative min-h-[500px] w-full">
            <img
              className="w-full h-[500px] object-cover object-center"
              src="https://i.imgur.com/UwfFNZx.jpg"
              alt="Saône River"
            />
            <div className="bg-pink bg-opacity-30 backdrop-blur-md flex flex-col justify-center items-center pb-4 pt-2">
              <p className="text-center text-gray-600 mb-2">
                Tuesday, October 31, 2023
              </p>
              <p className="text-sm text-gray-600 text-center">
                Morning cruise along the picturesque Canal du Centre and Saône
                River to the city of Chalon-sur-Saône. afternoon, drive to the
                well-known wine town of Chassagne Montrachet for a private
                cellar tour and wine tasting at a prominent local vintner.
              </p>
            </div>
          </div>
          <div className="relative min-h-[500px] w-full">
            <img
              className="w-full h-[500px] object-cover object-center"
              src="https://i.imgur.com/gouXWe0.jpg"
              alt="Chalon-sur-Saône"
            />
            <div className="bg-pink bg-opacity-30 backdrop-blur-md flex flex-col justify-center items-center pb-4 pt-2">
              <p className="text-center text-gray-600 mb-2">
                Wednesday, November 1, 2023
              </p>
              <p className="text-sm text-gray-600 text-center">
                Morning walking tour of Chalon-sur-Saône. Re turn to ADRIENNE
                for lunch on board. Beaune, the medieval wine capital of 15th
                century Hospice and the historic to explore on your own. After
                lunch, drive to Burgundy. Visit the quarter, with free time to
                explore on your own.
              </p>
            </div>
          </div>
          <div className="relative min-h-[500px] w-full">
            <img
              className="w-full h-[500px] object-cover object-center"
              src="https://i.imgur.com/mYs8kHQ.jpg"
              alt="chateau_de_chalon"
            />
            <div className="bg-pink bg-opacity-30 backdrop-blur-md flex flex-col justify-center items-center pb-4 pt-2">
              <p className="text-center text-gray-600 mb-2">
                Thursday, November 2, 2023
              </p>
              <p className="text-sm text-gray-600 text-center">
                Morning cruise to Seurre. Afternoon visit of the remarkable
                12th-century museum château, the Clos de Vougeot, headquarters
                of the Chevaliers du Tastevin, whose special label is awarded
                annually to the finest Côte-d'Or wines.
              </p>
            </div>
          </div>
          <div className="relative min-h-[500px] w-full">
            <img
              className="w-full h-[500px] object-cover object-center"
              src="https://i.imgur.com/ovDvvaq.jpg"
              alt="Saint-Jean de-Losne"
            />
            <div className="bg-pink bg-opacity-30 backdrop-blur-md flex flex-col justify-center items-center pb-4 pt-2">
              <p className="text-center text-gray-600 mb-2">
                Friday, November 3, 2023
              </p>
              <p className="text-sm text-gray-600 text-center">
                Morning cruise to the final mooring in Saint-Jean de-Losne.
                After lunch, enjoy a walking tour of Dijon, starting in front of
                the Ducal Palace, with time to browse in the fine specialty
                shops. Aperitifs and the Captain's Farewell Dinner on board.
              </p>
            </div>
          </div>
          <div className="relative min-h-[500px] w-full">
            <img
              className="w-full h-[500px] object-cover object-center"
              src="https://i.imgur.com/31W7dVQ.jpg"
              alt="Air Balloons - Paris"
            />
            <div className="bg-pink bg-opacity-30 backdrop-blur-md flex flex-col justify-center items-center pb-4 pt-2">
              <p className="text-center text-gray-600 mb-2">
                Saturday, November 4, 2023
              </p>
              <p className="text-sm text-gray-600 text-center">
                After breakfast, depart the barge for the escorted transfer to
                Paris, arriving at the hotel at approximately 12:45 PM. Note:
                The Captain will schedule Hot Air Ballooning during the cruise
                upon request. Balloon flights are dependent on favorable wind
                conditions and a minimum of four passengers.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
