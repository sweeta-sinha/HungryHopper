import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import ShimmerUI from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);


  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=${resId}&submitAction=ENTER`
    );
    const json = await data.json();
    setRestaurant(json?.data?.cards?.[0]?.card?.card?.info);
    const menuData =
      json?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    setRestaurantMenu(menuData?.slice(1, menuData.length));
  }

  const handleRestaurantMenuRender = (menuItems) => {
    if (menuItems?.card?.card?.categories?.length) {
      return (
        <div>
          <h3>{menuItems?.card?.card?.title}</h3>
          {menuItems.card.card.categories.map((category) => (
            <>
              <h4>{category?.title}</h4>
              {category?.itemCards?.length ? (
                category.itemCards.map((item) => (
                  <div>
                    <p>{item?.card?.info?.name}</p>
                  </div>
                ))
              ) : (
                <p>No item !</p>
              )}
            </>
          ))}
        </div>
      );
    } else if (menuItems?.card?.card?.itemCards?.length) {
      return (
        <div>
          <h3>{menuItems?.card?.card?.title}</h3>
          {menuItems.card.card.itemCards.map((item) => (
            <p>{item?.card?.info?.name}</p>
          ))}
        </div>
      );
    } else {
      return <p>No item !</p>;
    }
  };

  return (
    <div className="restaurant-menu-container">
      {restaurant ? (
        <div>
          <h1>Restaurant id : {resId}</h1>
          <h2>{restaurant?.name}</h2>
          <img
            src={`${CDN_URL}/${restaurant?.cloudinaryImageId}`}
            alt="res-img"
          />
          <h2>{restaurant?.area}</h2>
          <h2>{restaurant?.city}</h2>
          <h2>{restaurant?.costForTwoMessage}</h2>
          <h2>{restaurant?.avgRating}</h2>
        </div>
      ) : (
        <ShimmerUI />
      )}
      <div className="restaurant-menu">
        <div>
          <h1>Menu</h1>
        </div>
        {restaurantMenu?.length ? (
          <>{restaurantMenu.map((menu) => handleRestaurantMenuRender(menu))}</>
        ) : (
          <h2>No dishes found for this restaurant!</h2>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
