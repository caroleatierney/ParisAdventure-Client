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
    <header className="flex smallMobile:flex-col desktop:flex-row items-center justify-evenly px-4 py-2 ">
      <Navbar className="bg-transparent">
        <div>
          <p className="font-bold text-gray-500 text-center bg-transparent text-4xl !font-[Margarine,cursive] ">
            Roseann & Carole's Excellent Adventure!
          </p>
          <div className="flex flex-row justify-between items-center w-full">
            <div className="">
              {" "}
              <img
                className="topImage"
                src="https://i.imgur.com/RowNPSQ.png"
                alt="Carole"
              />
              <div>
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  className="topIcon"
                  onClick={() =>
                    window.open("https://www.facebook.com/caroleatierney")
                  }
                />
                <FontAwesomeIcon
                  icon={faTwitterSquare}
                  className="topIcon"
                  onClick={() =>
                    window.open("https://www.twitter.com/CaroleATierney")
                  }
                />
                <FontAwesomeIcon
                  icon={faInstagramSquare}
                  className="topIcon"
                  onClick={() =>
                    window.open("https://www.instagram.com/caroleatierney/")
                  }
                />
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="topIcon"
                  onClick={() => window.open("https://wa.me/16177750725")}
                />
              </div>
            </div>
            <div>
              <ul className="flex flex-col tablet:flex-row items-center justify-around space-y-2 tablet:space-y-0 tablet:space-x-10 pt-4 w-full text-md desktop:text-xl">
                <li className="w-full desktop:w-auto flex justify-center">
                  <NavLink to="/">
                    <Button
                      size={`xs sm:sm md:md lg:lg xl:xl`}
                      style={{ minWidth: "100px" }}
                      className="bg-red-500 text-white p-1 roundedhover:bg-red-400 w-full"
                    >
                      Home
                    </Button>
                  </NavLink>
                </li>
                <li className="w-full desktop:w-auto flex justify-center">
                  <NavLink to="/stLuciaPics" className="w-62">
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
            </div>
            <div>
                <img
                    className="topImage"
                    src="https://i.imgur.com/rbf3H3S.png"
                    alt="Roseann"
                />
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
                  className="topIcon"
                  onClick={() => window.open("https://wa.me/16175383672")}
                />
            </div>
          </div>
        </div>
      </Navbar>
    </header>
  );
}

export default Header;
