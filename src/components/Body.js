import React, { useEffect, useState } from "react";
import { restaurantData } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([...restaurantData]);

  const filterTopRatedRestaurants = () => {
    const topRatedRestaurants = listOfRestaurant.filter(
      (restaurant) => restaurant?.data?.avgRating > 4
    );
    setListOfRestaurant(topRatedRestaurants);
  };

  return (
    <div className="body">
      <div className="filter">
        <button onClick={filterTopRatedRestaurants} className="filter-btn">
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((resItem) => (
          <RestaurantCard key={resItem.data.id} resData={resItem} />
        ))}
      </div>
    </div>
  );
};

export default Body;
