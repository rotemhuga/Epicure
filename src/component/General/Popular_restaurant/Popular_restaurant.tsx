import React from "react";
import "./Popular_restaurant.css"
import CardRestaurant from "../../Card_restaurant/Card_restaurant"
import data from "../../../epicure.json"
import stars from "../../../assets/icons/star4.svg"
import vector from "../../../assets/icons/vector.svg"

const Popular_restaurant: React.FC = ()=> {


const items = data.restaurants.map((item:any) => {
    if (item.isPopular === true) {
        return <CardRestaurant 
        class= {item.name}
        src= {require(`../../../assets/images/Restaurants/${item.img}`)}
        RestaurantName = {item.name}
        chef = {item.chef}
        rating = {stars} 
        />
    
    } else {
        return null;
 }   
})
    return (
        
        <div className="all-rest-container" >
            <div className="popular-rest-title">POPULAR RESTAURANT IN EPICURE</div>
            <div className="all-rest-popular">
                {items}
            </div>
            <button className="all-rest-path">
                All Restaurants <img src={vector} alt="vector" className="vector-rest"/>
            </button>
        </div>
    ) 
}

export default Popular_restaurant

