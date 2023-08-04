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

export const getRatingBgColor = (rating) => {
  if(rating >= 4) return "py-1 px-1 w-14 text-stone-50 bg-green-600";
  if(rating <4 && rating >=3) return "py-1 px-1 text-stone-50 w-14 bg-yellow-600";
  return "py-1 px-1 w-14 text-stone-50 bg-red-600";
}

export const getRatingTextColor = (rating) => {
  if(rating >= 4) return "text-green-600";
  if(rating <4 && rating >=3) return "text-yellow-600";
  return "text-red-600";
}