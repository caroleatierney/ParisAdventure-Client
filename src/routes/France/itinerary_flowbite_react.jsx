import { React} from "react";
import { Carousel, Flowbite } from "flowbite-react";

import Page1  from "../../assets/adrienne.jpg";
import Page2  from "../../assets/adrienne.jpg";
import Page3  from "../../assets/chateau_de_rully.jpg";

export default function Itinerary() {
  return (
    <div className="h-[400px]">
<Flowbite>
      <Carousel>
        <img
          className="max-w-full max-h-full object-contain"
          src={Page1}
          alt="Saint_Léger_Sur_Dheune"
        />
        <img
          className="max-w-full max-h-full object-contain"
          src={Page2}
          alt="Château de Rully"
        />
        <img
          className="max-w-full max-h-full object-contain"
          src={Page3}
          alt="Saône River"
        />
        {/* <img
          className="max-w-full max-h-full object-contain"
          src="https://i.imgur.com/gouXWe0.jpg"
          alt="Chalon-sur-Saône"
        />
        <img
          className="max-w-full max-h-full object-contain"
          src="https://i.imgur.com/mYs8kHQ.jpg"
          alt="chateau_de_chalon"
        />
        <img
          className="max-w-full max-h-full object-contain"
          src="https://i.imgur.com/ovDvvaq.jpg"
          alt="Saint-Jean de-Losne"
        />
        <img
          className="max-w-full max-h-full object-contain"
          src="https://i.imgur.com/31W7dVQ.jpg"
          alt="Air Balloons - Paris"
        /> */}
      </Carousel>
      </Flowbite>
    </div>
  );
}

// import React from "react";
// import { Carousel } from "flowbite-react";

// export default function Itinerary() {
//   return (

//   );
// }

{
  /* <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="">
    <img src="https://placeimg.com/800/300/rabbit" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="...">
    <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
</div> */
}

//    <div className="d-flex flex-column justify-content-center align-items-center">
//       <p className="vibes montserratMdLg blur">About Our Trip</p>
//       <div>
//         <p className="montserratMd  my-5">
//           We are going on a Luxury Canal Cruise booked through French Country
//           Waterways, Ltd.
//         </p>
//         <p className="montserratMd">
//           We will be travelling from Saint-Leger-Sur-Dheune to
//           Saint-Jean-De-Losne
//         </p>
//         <p className="montserratMd ">
//           Adrienne is the name of the barge we will be travelling on. We will be
//           exploring the Burgandy Region of France.
//         </p>
//         <p className="montserratMd my-5">
//           The Vineyards of Burgandy produce some of the world's most prized
//           wines. More about this will be revealed on the actual trip in our
//           dinner blog
//         </p>
//       </div>
