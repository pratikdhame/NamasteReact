import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

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

    const handleSetShowIndex = (index) => {
      setShowIndex(showIndex === index ? null : index);
    };
  
  if (!resInfo) return <Shimmer />;

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white mt-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{name}</h1>
      <p className="text-lg text-gray-600 mb-6">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false} 
          setShowIndex={()=>handleSetShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
