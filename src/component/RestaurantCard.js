import React from "react";
import { CDN_URL } from "../utils/constants.js";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  const { deliveryTime } = sla;
  return (
    // <div className="m-4 p-4 w-52 bg-gray-100 hover:bg-gray-200 h-[450px]">
    //   <img
    //     className="res-logo rounded-lg"
    //     src={CDN_URL + cloudinaryImageId}
    //     alt="Res Logo"
    //   />
    //   <h3 className="font-bold py-4 text-lg">{name}</h3>
    //   <h4>{cuisines.join(", ")}</h4>
    //   <h5>{avgRating}</h5>
    //   <h5>{costForTwo}</h5>
    //   <h5>{deliveryTime} Minutes</h5>
    // </div>

    // <div class="max-w-64 bg-white border border-gray-200 rounded-lg shadow flex flex-col justify-stretch">
    //   <img
    //     className="res-logo rounded-lg"
    //     src={CDN_URL + cloudinaryImageId}
    //     alt="Res Logo"
    //   />
    //   <div class="p-5">
    //     <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
    //       {name}
    //     </h5>
    //     <p class="mb-3 font-normal text-gray-700">{cuisines.join(", ")}</p>
    //     <p class="mb-3 font-normal text-gray-700">{avgRating}</p>
    //     <p class="mb-3 font-normal text-gray-700">{costForTwo}</p>
    //     <p class="mb-3 font-normal text-gray-700">{deliveryTime} Minutes</p>
    //   </div>
    // </div>

<div className="w-64 bg-white border border-gray-200 rounded-lg shadow flex flex-col m-4">
  <img
    className="res-logo w-full h-48 object-cover rounded-t-lg"
    src={CDN_URL + cloudinaryImageId}
    alt="Res Logo"
  />
  <div className="p-5 flex-grow">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 truncate">
      {name}
    </h5>
    <p className="mb-3 font-normal text-gray-700 truncate">
      {cuisines.join(", ")}
    </p>
    <p className="mb-3 font-normal text-gray-700">{avgRating}</p>
    <p className="mb-3 font-normal text-gray-700">{costForTwo}</p>
    <p className="mb-3 font-normal text-gray-700">{deliveryTime} Minutes</p>
  </div>
</div>

  );
};

export default RestaurantCard;
