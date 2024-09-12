import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  //fetchData
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const targetUrl = MENU_API + resId;
      const data = await fetch(targetUrl, {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      });
      const json = await data.json();
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching restaurant menu: ", error);
      setResInfo(null); // Handle errors by setting resInfo to null
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
