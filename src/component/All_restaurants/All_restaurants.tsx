import React from "react";
import { useSelector } from "react-redux";
import CardRestaurant from "../Card_restaurant/Card_restaurant";
import "./All_restaurants.css";

const AllRestaurants: React.FC = () => {
const restaurants = useSelector(
        (state:any) => state.restaurants.value
    );

const rests = restaurants.map((rest:any) => {
        return <CardRestaurant 
        class= {rest.name}
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