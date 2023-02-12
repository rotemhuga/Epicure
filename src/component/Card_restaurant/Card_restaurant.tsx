import React from "react";
import "./Card_restaurant.css"

interface Iprops {
    class?: string,
    src?: string,
    alt?:string,
    RestaurantName?: string,
    chef?:string,
    rating?:string
}

const CardRestaurant: React.FC<Iprops> = (props:Iprops)=> {
    return (
        <button className={`card ${props.class}`} >
            <img src={props.src} alt={props.alt} className="img-popular-card"/>
            <div className="name-popular-card">{props.RestaurantName} </div>
            <div className="chef-popular-card">{props.chef}</div>
            <div className="rating-popular-div">
                <img src={props.rating} alt="" className="rating-popular-card" />
            </div>
        </button>
    ) 
}

export default CardRestaurant