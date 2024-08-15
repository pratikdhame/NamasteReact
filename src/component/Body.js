import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const urlProxy = "https://cors-anywhere.herokuapp.com/";
    const targetUrl =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5912716&lng=73.73890899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const data = await fetch(`${urlProxy}${targetUrl}`, {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    });

    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();;
  if (!onlineStatus) {
    return <h1>Offline</h1>;
  }
  

  const FilterRestaurants = () => {
    const filteredList = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredList);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div>
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={FilterRestaurants}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = filteredRestaurant.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
