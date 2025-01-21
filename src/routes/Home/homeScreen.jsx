import React from "react";
import Adrienne1 from "../../assets/adrienne1.jpg";

function HomeScreen() {
    return (
        <div className="flex w-full mx-auto min-h-screen">
        <img className="w-3/4 border-8 border-red-500 laptop:w-1/2 mx-auto h-full mt-5" src={Adrienne1} alt={"Adrienne"} />
        </div>
    );
    }

export default HomeScreen;