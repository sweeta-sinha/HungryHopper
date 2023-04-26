// nested html structure
import React from "react";
import ReactDOM from "react-dom/client";
import { restaurantData , restaurantImgBaseUrl } from "./restaurantData";

/**
 *Header
 * -Logo
 * Nav Item
 *Body 
 * -Search
 * -Restaurant Container
 * -Restaurant Card
 *   -image
 *   -name os rest , start rating ,     cuisine , delivery time
 *Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact info
 */

// React Elements

const Header = () => {
   return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://static.vecteezy.com/system/resources/previews/007/500/121/original/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg" alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
   )
}

const styleCard = {
  backgroundColor:"#f0f0f0"
}

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name , deliveryTime , cuisines , avgRating , cloudinaryImageId , costForTwo } = resData?.data;
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" src={`${restaurantImgBaseUrl}/${cloudinaryImageId}`} alt="res-logo" />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{`${costForTwo/100} For Two`}</h4>
      <h4>{`${deliveryTime} minutes`}</h4>
    </div>
  )
}

const Body = () => {
  return(
    <div className="body">
      <div className="search">
        Search
      </div>
      <div className="res-container">
        {
          restaurantData.map(resItem => 
            <RestaurantCard key={resItem.data.id} resData={resItem} />
            )
        }
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app" >
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);