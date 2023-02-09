import React from "react";
import "./HomePage.css"
import Navbar from "../navbar/all_navbar/navbar";
import Hero from "../General/Hero/Hero";

const HomePage: React.FC = () => {
    return (
        <div id="Home-page">
            <div>                
                <Navbar />
            </div>
            <div><Hero /></div>
            <div>Most popular Resutaurant</div>
            <div>Signature Dish of</div>
            <div>The Meaning of our ICONS</div>
            <div>Chef of the week</div>
            <div>Chefs Restaurant</div>
            <div>About us</div>
            <div>Footer</div>


        </div>
    );
};

export default HomePage 