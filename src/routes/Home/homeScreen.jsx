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
      <div className="grid grid-cols-10 gap-1 min-h-[210px]flex items-center">
        <div className="h-auto max-w-[400px] max-h-[400px] col-span-2 flex flex-row items-center">
          <div className="flex flex-col justify-evenly w-1/3">
            <div className="flex justify-center">
              <FontAwesomeIcon
                className="h-auto w-full max-w-[50px] max-h-[50px] flex justify-center"
                icon={faFacebookSquare}
                onClick={() =>
                  window.open("https://www.facebook.com/caroleatierney")
                }
              />
            </div>
            <div className="flex justify-center">
              <FontAwesomeIcon
                className="h-auto w-full max-w-[50px] max-h-[50px] flex justify-center"
                icon={faTwitterSquare}
                onClick={() =>
                  window.open("https://www.twitter.com/CaroleATierney")
                }
              />
            </div>
            <div className="flex justify-center">
              <FontAwesomeIcon
                className="h-auto w-full max-w-[50px] max-h-[50px] flex justify-center"
                icon={faInstagramSquare}
                onClick={() =>
                  window.open("https://www.instagram.com/caroleatierney/")
                }
              />
            </div>
            <div className="flex justify-center">
              <FontAwesomeIcon
                className="h-auto w-full max-w-[50px] max-h-[50px] flex justify-center"
                icon={faWhatsapp}
                onClick={() => window.open("https://wa.me/16177750725")}
              />
            </div>
          </div>
          <div className="w-2/3 flex">
            <img
              className="w-full h-auto max-w-[400px] max-h-[300px] object-cover rounded-full border-5 border-red-500"
              src="https://i.imgur.com/RowNPSQ.png"
              alt="Carole"
            />
          </div>
        </div>

        <div className="col-span-6">
          <img
            className="border-8 border-red-500 laptop:w-1/2 mx-auto h-full mt-5"
            src={Adrienne}
            alt={"Adrienne"}
          />
        </div>

        <div className="h-auto max-w-[400px] max-h-[400px] col-span-2 flex flex-row items-center">
          <div className="w-2/3 flex">
            <img
              className="w-full h-auto max-w-[400px] max-h-[300px] object-cover rounded-full border-5 border-red-500"
              src="https://i.imgur.com/rbf3H3S.png"
              alt="Roseann"
            />
          </div>
          <div className="flex flex-col justify-evenly w-1/3">
            <div className="flex justify-center">
              <FontAwesomeIcon
                className="h-auto w-full max-w-[50px] max-h-[50px] flex justify-center"
                icon={faFacebookSquare}
                onClick={() =>
                  window.open("https://www.facebook.com/roseanne.hayes")
                }
              />
            </div>
            <div className="flex justify-center">
              <FontAwesomeIcon
                className="h-auto w-full max-w-[50px] max-h-[50px] flex justify-center"
                icon={faTwitterSquare}
                onClick={() =>
                  window.open("https://www.twitter.com/CaroleATierney")
                }
              />
            </div>
            <div className="flex justify-center">
              <FontAwesomeIcon
                className="h-auto w-full max-w-[50px] max-h-[50px] flex justify-center"
                icon={faInstagramSquare}
                onClick={() =>
                  window.open("https://www.instagram.com/caroleatierney/")
                }
              />
            </div>
            <div className="flex justify-center">
              <FontAwesomeIcon
                className="h-auto w-full max-w-[50px] max-h-[50px] flex justify-center"
                icon={faWhatsapp}
                onClick={() => window.open("https://wa.me/16177750725")}
              />
            </div>
          </div>
        </div>
      </div>
    );
    }

export default homeScreen;