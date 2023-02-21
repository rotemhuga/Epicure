import React from "react";
import "./Card_restaurant.css"
import { useNavigate } from "react-router-dom";

interface Iprops {
    class?: string,
    id?:string
    src?: string,
    alt?:string,
    restaurantName?: string,
    chef?:string,
    rating?:string,
    onClick?: any,
    isOpen?: string,
}

const CardRestaurant: React.FC<Iprops> = (props:Iprops)=> {
const navigate = useNavigate()
    return (
        <button className={`card popular-rest all-rest`} id={`rest-card ${props.id}`} onClick={() => {navigate(`/RestaurantsPage/${props.id}`);window.scrollTo(0, 0);}} >
            <img src={props.src} alt={props.alt} className="img-card R-popular R-all"/>
            <div className="name-popular-card">{props.restaurantName} </div>
            <div className="chef-popular-card">{props.chef}</div>
            <div className="rating-popular-div">
                <img src={props.rating} alt="" className="rating-popular-card" />
            </div>
        </button>
    ) 
}

export default CardRestaurant