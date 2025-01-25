import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Button } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <header className="p-6">
      <p className="font-bold text-gray-500 text-center bg-transparent text-4xl !font-[Margarine,cursive] ">
        Roseann & Carole's Excellent Adventure!
      </p>
      <div className="grid grid-cols-10 gap-1 min-h-[210px]">
        <div className="col-span-1 flex flex-row">
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

        <div className="col-span-8">
          <Navbar className="bg-transparent">
            <ul className="flex flex-col tablet:flex-row items-center justify-around space-y-2 tablet:space-y-0 tablet:space-x-10 pt-4 w-full text-md desktop:text-xl">
              <li className="w-full desktop:w-auto flex justify-center">
                <NavLink to="/">
                  <Button
                    size={`xs sm:sm md:md lg:lg xl:xl`}
                    style={{ minWidth: "100px" }}
                    className="bg-red-500 text-white p-1 rounded hover:bg-red-400 w-full"
                  >
                    Home
                  </Button>
                </NavLink>
              </li>
              <li className="w-full desktop:w-auto flex justify-center">
                <NavLink to="/xxxxxxx" className="w-62">
                  <Button
                    size={`xs sm:sm md:md lg:lg`}
                    style={{ minWidth: "120px" }}
                    className="bg-red-500 text-white p-1 rounded hover:bg-red-400 w-full"
                  >
                    Virtual Album
                  </Button>
                </NavLink>
              </li>
              <li className="w-full desktop:w-auto flex justify-center">
                <NavLink to="/itinerary">
                  <Button
                    size={`xs sm:sm md:md lg:lg xl:xl`}
                    style={{ minWidth: "100px" }}
                    className="bg-red-500 text-white p-1 rounded hover:bg-red-400 w-full"
                  >
                    Itinerary
                  </Button>
                </NavLink>
              </li>
              <li className="w-full desktop:w-auto flex justify-center">
                <NavLink to="/monaLisa">
                  <Button
                    size={`xs sm:sm md:md lg:lg xl:xl`}
                    style={{ minWidth: "100px" }}
                    className="bg-red-500 text-white p-1 rounded hover:bg-red-400 w-full"
                  >
                    Mona Lisa
                  </Button>
                </NavLink>
              </li>
              <li>
                <Button
                  size={`xs sm:sm md:md lg:lg`}
                  style={{ minWidth: "110px" }}
                  className="bg-red-500 text-white p-1 rounded hover:bg-red-400 w-full"
                  href="https://www.youtube.com/embed/ZM6NvOGpumI?start=68&fs=1"
                  target="_blank"
                >
                  Bob's Video
                </Button>
              </li>
              <li>
                <Button
                  size={`xs sm:sm md:md lg:lg`}
                  style={{ minWidth: "110px" }}
                  className="bg-red-500 text-white p-1 rounded hover:bg-red-400 w-full"
                  href="https://moneyinc.com/foodies-oenophiles-walkers-and-joggers-will-love-barge-cruising-in-france/"
                  target="_blank"
                >
                  Money Inc. Review
                </Button>
              </li>
            </ul>
          </Navbar>
        </div>

        <div className="col-span-1 flex flex-row ml-3">
          <div className="h-auto max-w-[150px] max-h-[150px] object-cover mr-5 w-3/4">
            <img src="https://i.imgur.com/rbf3H3S.png" alt="Roseann" />
          </div>
          <div className="flex flex-col justify-evenly ml-5 w-1/4">
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
    </header>
  );
}

export default Header;
