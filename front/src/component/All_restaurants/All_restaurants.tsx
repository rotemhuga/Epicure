import React from "react";
import { useSelector } from "react-redux";
import react, { useEffect, useState } from "react";
import CardRestaurant from "../Card_restaurant/Card_restaurant";
import "./All_restaurants.css";
import { IrestaurantsValue, IRootState } from "../../interfaces"
import { useNavigate } from "react-router-dom";



const AllRestaurants: React.FC = () => {
const navigate = useNavigate();
const [restaurants1, setRestaurants1] = useState()

useEffect(() => {
    fetch("http://localhost:8000/epicure")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setRestaurants1(data);
      });
  }, []);

const restaurants = useSelector(
        (state:IRootState) => state.restaurants.value
    );
const rests = restaurants.map((rest:IrestaurantsValue) => {
        return <CardRestaurant 
        class= {rest.name}
        id = {rest.id}
        src= {require(`../../assets/images/Restaurants/${rest.img}.png`)}
        restaurantName = {rest.name}
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


