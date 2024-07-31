import React from 'react'
import CDN_URL from '../utils/constants.js'

const RestaurantCard = (props) =>{
    const { resData } = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info;
    const { deliveryTime } = sla;
    return(
      <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
        <img className='res-logo' src={CDN_URL + cloudinaryImageId} alt="Res Logo" />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h5>{avgRating}</h5>
        <h5>{costForTwo}</h5>
        <h5>{deliveryTime} Minutes</h5>
      </div>
    )
  }

export default RestaurantCard;