import React, { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import ShimmerUI from "./Shimmer";
import { Link } from "react-router-dom";
import { filterSearchedRestaurants } from "../utils/helper";
import useIsOnline from "./../utils/useIsOnline";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const filterTopRatedRestaurants = () => {
    const topRatedRestaurants = filteredListOfRestaurant.filter(
      (restaurant) => restaurant?.data?.avgRating > 4
    );
    setFilteredListOfRestaurant(topRatedRestaurants);
  };

  async function getRestaurantList() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //optional chaining
    setListOfRestaurant(json?.data?.cards?.[2]?.data?.data?.cards);
    setFilteredListOfRestaurant(json?.data?.cards?.[2]?.data?.data?.cards);
    console.log("get restaurant list called");
  }

  useEffect(() => {
    getRestaurantList();
  }, []);

  console.log("render");

  let online = useIsOnline();

  // if (!listOfRestaurant) return null;

  if (!online)
    return <h1>🔴 Offline, Please check your internet connection!!</h1>;

  return listOfRestaurant?.length > 0 ? (
    <div className="body">
      <div className="filter flex items-center">
        <div className="m-4 pl-12 pr-4">
          <input
            className="border border-solid border-black rounded-md p-2 mr-4"
            type="text"
            placeholder="Search Restaurant"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-green-100 p-2 rounded-md hover:bg-green-300"
            onClick={() =>
              setFilteredListOfRestaurant(
                filterSearchedRestaurants(searchText, listOfRestaurant)
              )
            }
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="bg-green-100 p-2 rounded-md hover:bg-green-300"
            onClick={filterTopRatedRestaurants}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex pl-4 sm:pl-12 pr-4 flex-wrap">
        {filteredListOfRestaurant?.length > 0 ? (
          filteredListOfRestaurant.map((resItem) => (
            <Link key={resItem.data.id} to={`/restaurant/${resItem.data.id}`}>
              {resItem.data?.promoted ? (
                <RestaurantCardPromoted resData={resItem}/>
              ) : (
                <RestaurantCard resData={resItem} />
              )}
            </Link>
          ))
        ) : (
          <h1>No Restaurant match your filter !!</h1>
        )}
      </div>
    </div>
  ) : (
    <div className="shimmer-container">
      {Array(18)
        .fill("")
        .map((item, index) => (
          <ShimmerUI key={index} />
        ))}
    </div>
  );
};

export default Body;
