import React, { useEffect, useState } from "react";
import { restaurantData } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const filterTopRatedRestaurants = () => {
    const topRatedRestaurants = filteredListOfRestaurant.filter(
      (restaurant) => restaurant?.data?.avgRating > 4
    );
    setFilteredListOfRestaurant(topRatedRestaurants);
  };

  const filterSearchedRestaurants = () => {
    const searchedRestaurants = searchText?.trim()
      ? listOfRestaurant.filter((restaurant) =>
          restaurant?.data?.name
            ?.toLowerCase()
            ?.includes(searchText.toLowerCase())
        )
      : listOfRestaurant;
    setFilteredListOfRestaurant(searchedRestaurants);
  };

  useEffect(() => {
    getRestaurantList();
  }, []);

  console.log("render");

  async function getRestaurantList() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //optional chaining
    setListOfRestaurant(json?.data?.cards?.[2]?.data?.data?.cards);
    setFilteredListOfRestaurant(json?.data?.cards?.[2]?.data?.data?.cards);
    console.log("get restaurant list called");
  }

  if (!listOfRestaurant) return null;

  return listOfRestaurant.length > 0 ? (
    <div className="body">
      <div className="filter">
        <div>
          <input
            className="search-input"
            type="text"
            placeholder="Search Restaurant"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={filterSearchedRestaurants} className="search-btn">
            Search
          </button>
        </div>
        <button onClick={filterTopRatedRestaurants} className="filter-btn">
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredListOfRestaurant?.length > 0 ? filteredListOfRestaurant.map((resItem) => (
          <RestaurantCard key={resItem.data.id} resData={resItem} />
        )) : <h1>No Restaurant match your filter !!</h1>}
      </div>
    </div>
  ) : (
    <div className="shimmer-container">
    {[1, 2, 3, 4 , 5, 6,7,8].map((item) => <ShimmerUI key={item} />)}
    </div>
  );
  
};

export default Body;
