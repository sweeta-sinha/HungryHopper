import React from 'react'
import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name , deliveryTime , cuisines , avgRating , cloudinaryImageId , costForTwo } = resData?.data;
    return (
      <div className="res-card" style={styleCard}>
        <img className="res-logo" src={`${CDN_URL}/${cloudinaryImageId}`} alt="res-logo" />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{`${costForTwo/100} For Two`}</h4>
        <h4>{`${deliveryTime} minutes`}</h4>
      </div>
    )
}

const styleCard = {
    backgroundColor:"#f0f0f0"
}

export default RestaurantCard