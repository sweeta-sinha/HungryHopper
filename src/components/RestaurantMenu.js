import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "./Shimmer";
import useRestaurant from './../utils/useRestaurant';
import { getRatingTextColor } from "../utils/helper";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantInfo = useRestaurant(resId);
  console.log("restaurantinfo",restaurantInfo)

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
    <div className="flex flex-col items-center m-auto px-96">
      {restaurantInfo?.restaurant ? (
        <div className="flex justify-between w-full py-4">
          <div className="flex flex-col">
            <span className="text-lg font-bold" >{restaurantInfo?.restaurant?.name}</span>
            <span className='mt-2 break-words text-xs text-slate-600'>{restaurantInfo?.restaurant?.cuisines.join(", ")}</span>
            <span className='text-xs text-slate-600'>{restaurantInfo?.restaurant?.areaName}</span>
          </div>
          <div className="flex flex-col items-center border border-slate-300 rounded-md p-2">
            <span className={`font-extrabold border-b border-slate-300 pb-2 w-full text-center ${getRatingTextColor(restaurantInfo?.restaurant?.avgRating)}`}>&#9733; {restaurantInfo?.restaurant?.avgRating}</span>
            <span className='text-[10px] font-bold text-slate-500 pt-2 w-full text-center'>{restaurantInfo?.restaurant?.totalRatingsString}</span>
          </div>

          {/* <h2>{restaurantInfo?.restaurant?.area}</h2>
          <h2>{restaurantInfo?.restaurant?.city}</h2>
          <h2>{restaurantInfo?.restaurant?.costForTwoMessage}</h2>
          <h2>{restaurantInfo?.restaurant?.avgRating}</h2> */}
        </div>
      ) : (
        <ShimmerUI />
      )}
      <div className="w-full pt-6">
        {restaurantInfo?.restaurantMenuCategories?.length ? (
          <>{restaurantInfo?.restaurantMenuCategories.map((category) => 
            <RestaurantCategory category={category?.card?.card} />
            )}</>
        ) : (
          <h2>No dishes found for this restaurant!</h2>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
