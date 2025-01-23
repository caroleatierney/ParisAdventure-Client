import React from "react";
import Adrienne from "../../assets/adrienne.jpg";

function HomeScreen() {
    return (
        <div className="flex w-1/2 mt-6 mx-auto min-h-screen">
        <img className="w-3/4 border-8 border-red-500 laptop:w-1/2 mx-auto h-full mt-5" src={Adrienne} alt={"Adrienne"} />
        </div>
    );
    }

export default HomeScreen;