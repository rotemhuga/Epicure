import React from "react";
import data from "../../epicure.json"
import CardRestaurant from "../Card_restaurant/Card_restaurant";
import "./All_restaurants.css";

const AllRestaurants: React.FC = () => {
const rests = data.restaurants.map((rest:any, index: number) => {
        return <CardRestaurant 
        class= {rest.name}
        // id= {rest.id}
        src= {require(`../../assets/images/Restaurants/${rest.img}.png`)}
        RestaurantName = {rest.name}
        chef = {rest.chef}
        rating = {require(`../../assets/icons/star${rest.rating}.svg`)} 
        />  
})
    return (
        
        <div className="rest-page" >
            <div className="all-rest-page-container">
                {rests}
            </div>
        </div>
    ) 
}    


export default AllRestaurants