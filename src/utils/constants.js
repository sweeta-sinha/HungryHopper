export const CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill";

export const CDN_URL_FIT = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit";

export const LOGO_URL =
  "https://static.vecteezy.com/system/resources/previews/007/500/121/original/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg";

export const RESTAURANT_MENU_URL = (restaurantId) => {
  return `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=${restaurantId}&submitAction=ENTER`;
};

export const NON_VEG_LOGO =
  "https://img.icons8.com/?size=512&id=61082&format=png";

export const VEG_LOGO = "https://img.icons8.com/?size=512&id=61083&format=png";
