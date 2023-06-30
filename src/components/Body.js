import React, { useEffect, useState } from "react";
import { restaurantData } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./Shimmer";
import { Link } from "react-router-dom";
import { filterSearchedRestaurants } from "../utils/helper";
import useIsOnline from './../utils/useIsOnline';

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

  let online = useIsOnline();
  if(!online) return <h1>🔴 Offline, Please check your internet connection!!</h1>;

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
          <button onClick={() => setFilteredListOfRestaurant(filterSearchedRestaurants(searchText , listOfRestaurant))} className="search-btn">
            Search
          </button>
        </div>
        <button onClick={filterTopRatedRestaurants} className="filter-btn">
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredListOfRestaurant?.length > 0 ? filteredListOfRestaurant.map((resItem) => (
          <Link key={resItem.data.id} to={`/restaurant/${resItem.data.id}`}><RestaurantCard resData={resItem} /></Link>
        )) : <h1>No Restaurant match your filter !!</h1>}
      </div>
    </div>
  ) : (
    <div className="shimmer-container">
    {Array(18).fill("").map((item , index) => <ShimmerUI key={index} />)}
    </div>
  );
  
};

export default Body;
