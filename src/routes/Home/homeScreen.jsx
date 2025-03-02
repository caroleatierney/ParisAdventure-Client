import React from "react";
import Adrienne from "../../assets/adrienne.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function homeScreen() {
    return (
      <div className="flex flex-col p-5 laptop:p-0 laptop:grid laptop:grid-cols-10 gap-1 min-h-[210px] items-center">
        <div className="h-auto max-w-[400px] max-h-[400px] col-span-2 flex flex-row items-center">
          <div className="flex flex-col w-1/3">
            <div className="flex justify-center">
              <FontAwesomeIcon
                className="h-10 w-10 text-red-500 laptop:h-8 laptop:w-8"
                icon={faFacebookSquare}
                onClick={() =>
                  window.open("https://www.facebook.com/caroleatierney")
                }
              />
            </div>
            <div className="flex justify-center">
              <FontAwesomeIcon
                className="h-10 w-10 text-red-500 laptop:h-8 laptop:w-8"
                icon={faTwitterSquare}
                onClick={() =>
                  window.open("https://www.twitter.com/CaroleATierney")
                }
              />
            </div>
            <div className="flex justify-center">
              <FontAwesomeIcon
                className="h-10 w-10 text-red-500 laptop:h-8 laptop:w-8"
                icon={faInstagramSquare}
                onClick={() =>
                  window.open("https://www.instagram.com/caroleatierney/")
                }
              />
            </div>
            <div className="flex justify-center">
              <FontAwesomeIcon
                className="h-10 w-10 text-red-500 laptop:h-8 laptop:w-8"
                icon={faWhatsapp}
                onClick={() => window.open("https://wa.me/16177750725")}
              />
            </div>
          </div>
          <div className="w-2/3 laptop:w-full">
            <img
              className="w-64 h-64 object-cover rounded-2xl border-8 border-red-500 laptop:w-100 laptop:h-100"
              src="https://i.imgur.com/RowNPSQ.png"
              alt="Carole"
            />
          </div>
        </div>

        <div className="col-span-6">
          <img
            className="border-8 border-red-500 rounded-2xl mx-auto max-h-[600px] m-5 laptop:mt-5 laptop:w-1/2"
            src={Adrienne}
            alt={"Adrienne"}
          />
        </div>

        <div className="h-auto max-w-[400px] max-h-[400px] col-span-2 flex flex-row items-center">
          <div className="w-2/3 laptop:w-full">
            <img
              className="w-64 h-64 object-cover rounded-2xl border-8 border-red-500 laptop:w-100 laptop:h-100"
              src="https://i.imgur.com/rbf3H3S.png"
              alt="Roseann"
            />
          </div>
          <div className="flex flex-col justify-evenly w-1/3">
            <div className="flex justify-center">
              <FontAwesomeIcon
                className="h-10 w-10 text-red-500 laptop:h-8 laptop:w-8"
                icon={faFacebookSquare}
                onClick={() =>
                  window.open("https://www.facebook.com/roseanne.hayes")
                }
              />
            </div>
            <div className="flex justify-center">
              <FontAwesomeIcon
                className="h-10 w-10 text-red-500 laptop:h-8 laptop:w-8"
                icon={faTwitterSquare}
                onClick={() =>
                  window.open("https://www.twitter.com/CaroleATierney")
                }
              />
            </div>
            <div className="flex justify-center">
              <FontAwesomeIcon
                className="h-10 w-10 text-red-500 laptop:h-8 laptop:w-8"
                icon={faInstagramSquare}
                onClick={() =>
                  window.open("https://www.instagram.com/roseannmirisola/")
                }
              />
            </div>
            <div className="flex justify-center">
              <FontAwesomeIcon
                className="h-10 w-10 text-red-500 laptop:h-8 laptop:w-8"
                icon={faWhatsapp}
                onClick={() => window.open("https://wa.me/16175383672")}
              />
            </div>
          </div>
        </div>
      </div>
    );
    }

export default homeScreen;