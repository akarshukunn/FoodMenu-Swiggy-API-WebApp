import { useEffect, useState } from "react";
import { API_ID } from "../Utils/constants";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menuData = await fetch(API_ID + resId);
    const json = await menuData.json();

    setResMenu(json.data);
    console.log(json.data);
  };

  return resMenu;
};

export default useRestaurantMenu;
