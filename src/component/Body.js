import React, { useEffect, useState, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import { targetUrl } from "../utils/constants.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  const {loggedInUser, setUserName} = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try { 
      const data = await fetch(targetUrl, {
        method: 'GET',
        headers: {
          "x-requested-with": "XMLHttpRequest",
          'Content-Type': 'application/json',
          'Origin': 'https://namaste-react-red.vercel.app'

        },
      });
  
      const json = await data.json();
      if (json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
        setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
      setListOfRestaurant([]); // Still render shimmer in case of an error
    }
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
      <div className="filter flex">
        <div className="search m-4 p-4 flex items-center">
          <input
            type="text"
            className="border border-solid border-green-400 outline-green-300 rounded-lg p-2"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={FilterRestaurants} className="px-4 py-2 m-4 bg-green-100 rounded-lg">Search</button>
        </div>
        <div className="search m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 bg-gray-100 rounded-lg"
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
        <div className="search m-4 p-4 flex items-center">
          <label>Name :</label>
          <input className="border border-black p-2" onChange={(e)=>setUserName(e.target.value)} value={loggedInUser}>
          </input>
        </div>
      </div>
      <div className="res-container flex flex-wrap justify-around">
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
