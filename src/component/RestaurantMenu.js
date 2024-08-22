// import React from "react";
// import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";
// import useRestaurantMenu from "../utils/useRestaurantMenu";

// const RestaurantMenu = () => {
//   const { resId } = useParams();
//   const resInfo = useRestaurantMenu(resId);

//   const { name, cuisines, costForTwoMessage } =
//     resInfo?.cards[2]?.card?.card?.info || {};
//   const { itemCards } =
//     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
//       ?.card || {};
//   console.log(itemCards);
//   return resInfo === null ? (
//     <Shimmer />
//   ) : (
//     <div className="menu">
//       <h1>{name}</h1>
//       <p>
//         {cuisines.join(", ")} - {costForTwoMessage}
//       </p>

//       <ul>
//         {itemCards.map((item) => (
//           <li key={item.card.info.id}>
//             {item.card.info.name} - {"Rs."}
//             {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;

import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  if (!resInfo) return <Shimmer />;

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white mt-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{name}</h1>
      <p className="text-lg text-gray-600 mb-6">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>

      {/* <ul className="space-y-4 text-left text-gray-700">
        {itemCards?.map((item) => (
          <li key={item.card.info.id} className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-4 h-4 text-green-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span className="flex-grow">
              {item.card.info.name} -{" "}
              <span className="font-semibold">
                Rs.{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
              </span>
            </span>
          </li>
        ))}
      </ul> */}
      {categories.map((category) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
