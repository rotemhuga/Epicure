import React from "react";
import { useSelector } from "react-redux";
import CardRestaurant from "../Card_restaurant/Card_restaurant";
import "./All_restaurants.css";
import { IrestaurantsValue, IRootState } from "../../interfaces"

const AllRestaurants: React.FC = () => {
const restaurants = useSelector(
        (state:IRootState) => state.restaurants.value
    );
const rests = restaurants.map((rest:IrestaurantsValue) => {
        return <CardRestaurant 
        class= {rest.name}
        src= {require(`../../assets/images/Restaurants/${rest.img}.png`)}
        RestaurantName = {rest.name}
        chef = {rest.chef}
        rating = {require(`../../assets/icons/star${rest.rating}.svg`)} 
        key = {rest.id}
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