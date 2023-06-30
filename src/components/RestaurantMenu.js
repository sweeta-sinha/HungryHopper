import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import ShimmerUI from "./Shimmer";
import useRestaurant from './../utils/useRestaurant';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantInfo = useRestaurant(resId);

  const handleRestaurantMenuRender = (menuItems) => {
    if (menuItems?.card?.card?.categories?.length) {
      return (
        <div key={menuItems?.card?.card?.id}>
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
        <div key={menuItems?.card?.card?.id}>
          <h3>{menuItems?.card?.card?.title}</h3>
          {menuItems.card.card.itemCards.map((item) => (
            <p key={item?.id}>{item?.card?.info?.name}</p>
          ))}
        </div>
      );
    } else {
      return <p>No item !</p>;
    }
  };

  return (
    <div className="restaurant-menu-container">
      {restaurantInfo?.restaurant ? (
        <div>
          <h1>Restaurant id : {resId}</h1>
          <h2>{restaurantInfo?.restaurant?.name}</h2>
          <img
            src={`${CDN_URL}/${restaurantInfo?.restaurant?.cloudinaryImageId}`}
            alt="res-img"
          />
          <h2>{restaurantInfo?.restaurant?.area}</h2>
          <h2>{restaurantInfo?.restaurant?.city}</h2>
          <h2>{restaurantInfo?.restaurant?.costForTwoMessage}</h2>
          <h2>{restaurantInfo?.restaurant?.avgRating}</h2>
        </div>
      ) : (
        <ShimmerUI />
      )}
      <div className="restaurant-menu">
        <div>
          <h1>Menu</h1>
        </div>
        {restaurantInfo?.restaurantMenu?.length ? (
          <>{restaurantInfo?.restaurantMenu.map((menu) => handleRestaurantMenuRender(menu))}</>
        ) : (
          <h2>No dishes found for this restaurant!</h2>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
