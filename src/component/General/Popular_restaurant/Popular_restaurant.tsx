import React from "react";
import "./Popular_restaurant.css"
import CardRestaurant from "../../Card_restaurant/Card_restaurant"
import data from "../../../epicure.json"
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import vector from "../../../assets/icons/vector.svg"
import All_restaurants from "../../All_restaurants/All_restaurants"
import RestaurantsPage from "../../RestaurantsPage/RestaurantsPage";

const Popular_restaurant: React.FC = ()=> {
const navigate = useNavigate();
    const navigateRestPage = () => {
        navigate('/RestaurantsPage');
    };


const items = data.restaurants.map((item:any) => {
    if (item.isPopular === true) {
        return <CardRestaurant 
        class= {item.name}
        src= {require(`../../../assets/images/Restaurants/${item.img}.png`)}
        RestaurantName = {item.name}
        chef = {item.chef}
        rating = {require(`../../../assets/icons/star${item.rating}.svg`)} 
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
                All Restaurants <img src={vector} alt="vector" className="vector-rest" />
            </button>
                <Routes>
                    <Route path="/RestaurantsPage" element={<RestaurantsPage />} />
                </Routes>
        </div>
    ) 
}

export default Popular_restaurant

