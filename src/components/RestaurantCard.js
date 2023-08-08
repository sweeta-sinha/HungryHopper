import React from 'react'
import { CDN_URL } from '../utils/constants';
import { getRatingBgColor } from '../utils/helper';

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name , cuisines , avgRating , cloudinaryImageId , costForTwo , sla , id } = resData?.info;
    const { deliveryTime } = sla;

    return (
      <div className="ml-4 mt-4 mb-8 mr-4 p-4 w-80 rounded-sm hover:shadow-lg hover:border border-solid border-slate-400">
        <img className="rounded-lg object-contain" src={`${CDN_URL}/${cloudinaryImageId}`} alt="res-logo" />
        <h3 className='py-2 font-bold text-lg'>{name}</h3>
        <div className='mb-2 h-12 text-xs break-words'>{cuisines.join(",")}</div>
        <div className='flex justify-between'>
          <h4 className={getRatingBgColor(avgRating)}>&#9733; {avgRating}</h4>
          <h4 className='py-1'>{`${deliveryTime} mins`}</h4>
          <h4 className='py-1'>{costForTwo}</h4>
        </div>
      </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className='relative'>
        <div className='absolute bg-gray-800 border-gray-800 text-slate-50 uppercase top-4 left-8 rounded-tl-lg rounded-br-lg px-2 pb-1'>
          <div className='text-ellipsis whitespace-nowrap overflow-hidden'>Promoted</div>
        </div>
        <RestaurantCard { ...props} />
      </div>
    )
  }
}

export default RestaurantCard