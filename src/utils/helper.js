export const filterSearchedRestaurants = (searchText , listOfRestaurant) => {
    const searchedRestaurants = searchText?.trim()
      ? listOfRestaurant.filter((restaurant) =>
          restaurant?.data?.name
            ?.toLowerCase()
            ?.includes(searchText.toLowerCase())
        )
      : listOfRestaurant;
    return searchedRestaurants
  };