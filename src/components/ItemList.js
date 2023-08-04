import React from 'react'
import { CDN_URL_FIT, NON_VEG_LOGO, VEG_LOGO } from './../utils/constants';

const ItemList = ({items}) => {
  return (
    <div>
        {items?.map((item) => 
            <div key={item?.card?.info?.id} className='w-full my-6 border-b border-slate-300 pb-8'>
                <div className='w-full flex justify-between items-center'>
                    <div className='flex flex-col w-10/12'>
                        <div className='flex items-center'>
                            {item?.card?.info?.isVeg ? <img className='w-6 h-6' src={VEG_LOGO} alt='Veg' /> : <img className='w-6 h-6' src={NON_VEG_LOGO} alt="Non-Veg" />}
                            {item?.card?.info?.ribbon?.text && <span className='text-yellow-500 text-xs font-semibold'>&#9733;{item?.card?.info?.ribbon?.text}</span>}
                        </div>
                        <span className='text-slate-700 font-semibold text-base'>{item?.card?.info?.name}</span>
                        <span className='text-slate-700 text-sm'>{`₹${(item?.card?.info?.price ? item?.card?.info?.price : item?.card?.info?.defaultPrice)/100}`}</span>
                        <span className='text-slate-400 text-[13px] mt-4'>{item?.card?.info?.description}</span>
                    </div>
                    <div>
                        <div className='relative'>
                            <img className="rounded-lg object-contain w-28" src={`${CDN_URL_FIT}/${item?.card?.info?.imageId}`} alt="res-logo" />
                            <button className='bg-white rounded-md py-[8px] px-8 absolute bottom-[-5] border border-slate-400 left-2 text-xs text-green-800 hover:shadow-lg'>ADD</button>
                            <span className='text-green-800 absolute bottom-3 right-4'>+</span>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default ItemList