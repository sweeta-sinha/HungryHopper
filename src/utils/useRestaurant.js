import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "./constants";

const useRestaurant = (resId) => {
    const [restaurantInfo, setRestaurantInfo] = useState(
       {
         restaurant:null,
         restaurantMenu:[]
        }
    );
  
    useEffect(() => {
      getRestaurantInfo();
    }, []);
  
    async function getRestaurantInfo() {
      const data = await fetch(RESTAURANT_MENU_URL(resId));
      const json = await data.json();
      const resMenuInfo =
        json?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      let menuList = resMenuInfo?.slice(1, resMenuInfo.length);
      menuList = menuList?.filter((menuItem) => menuItem?.card?.card?.itemCards?.length)
      setRestaurantInfo({restaurant : json?.data?.cards?.[0]?.card?.card?.info , restaurantMenu : menuList});
    }

    return restaurantInfo;
};

export default useRestaurant;