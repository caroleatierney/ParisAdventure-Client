import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Button } from "flowbite-react";

function Header() {
  return (
    <header className="flex smallMobile:flex-col desktop:flex-row items-center justify-evenly px-4 py-2 ">
      <Navbar className="bg-transparent">
        <div>
          <p className="font-bold text-center bg-transparent text-3xl !font-[Margarine,cursive] ">
            Our Paris Adventure
          </p>

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
      </Navbar>
    </header>
  );
}

export default Header;
