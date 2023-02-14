import React from "react";
import "./RestaurantsPage.css"
import Navbar from "../navbar/all_navbar/navbar";
import RestFilterLink from "../General/Rest_filter_link/Rest_filter_link";
import Footer from "../General/Footer/Footer";
import FilterRestOptions from "../General/Filter_rest_options/Filter_rest_options";
import AllRestaurants from "../All_restaurants/All_restaurants";

const RestaurantsPage: React.FC = () => {
    return (
        <div id="Restaurants-page">
            <div>                
                <Navbar />
            </div>
            <div><RestFilterLink /></div>
            <div><FilterRestOptions /></div>
            <AllRestaurants />
            <Footer />
        </div>
    );
};

export default RestaurantsPage 