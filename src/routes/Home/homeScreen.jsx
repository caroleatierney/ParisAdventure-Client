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
      <div className="grid grid-cols-10 gap-1 min-h-[210px]">
        <div className="h-auto max-w-[150px] max-h-[150px] col-span-2 flex flex-row">
          <div className="flex flex-col justify-evenly mr-3 w-1/4">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              onClick={() =>
                window.open("https://www.facebook.com/caroleatierney")
              }
            />
            <FontAwesomeIcon
              icon={faTwitterSquare}
              onClick={() =>
                window.open("https://www.twitter.com/CaroleATierney")
              }
            />
            <FontAwesomeIcon
              icon={faInstagramSquare}
              onClick={() =>
                window.open("https://www.instagram.com/caroleatierney/")
              }
            />
            <FontAwesomeIcon
              icon={faWhatsapp}
              onClick={() => window.open("https://wa.me/16177750725")}
            />
          </div>
          <div className="w-3/4 mr-5">
            <img
              className="w-full h-auto max-w-[150px] max-h-[150px] object-cover"
              src="https://i.imgur.com/RowNPSQ.png"
              alt="Carole"
            />
          </div>
        </div>

        <div className="col-span-6">
          <img
            className="w-3/4 border-8 border-red-500 laptop:w-1/2 mx-auto h-full mt-5"
            src={Adrienne}
            alt={"Adrienne"}
          />
        </div>

        <div className="h-auto max-w-[150px] max-h-[150px] col-span-2 flex flex-row">
          <div className="h-auto max-w-[150px] max-h-[150px] object-cover mr-5 w-3/4">
            <img src="https://i.imgur.com/rbf3H3S.png" alt="Roseann" />
          </div>
          <div className="flex flex-col justify-evenly W-1/4">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              onClick={() =>
                window.open("https://www.facebook.com/roseanne.hayes")
              }
            />
            <FontAwesomeIcon
              icon={faTwitterSquare}
              onClick={() =>
                window.open("https://www.twitter.com/CaroleATierney")
              }
            />
            <FontAwesomeIcon
              icon={faTwitterSquare}
              onClick={() =>
                window.open("https://www.instagram.com/roseannmirisola/")
              }
            />
            <FontAwesomeIcon
              icon={faWhatsapp}
              onClick={() => window.open("https://wa.me/16175383672")}
            />
          </div>
        </div>
      </div>
    );
    }

export default homeScreen;