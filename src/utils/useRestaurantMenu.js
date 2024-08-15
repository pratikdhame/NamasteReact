import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  //fetchData
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const urlProxy = "https://cors-anywhere.herokuapp.com/";
    const targetUrl = MENU_API + resId;
    const data = await fetch(`${urlProxy}${targetUrl}`, {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    });
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
