import React from "react";
import "./HomePage.css"
import Navbar from "../navbar/all_navbar/navbar";
import Hero from "../General/Hero/Hero";
import Icon_meaning from "../General/Icon_meaning/Icon_meaning";
import Week_chef from "../General/Week_chef/Week_chef";

const HomePage: React.FC = () => {
    return (
        <div id="Home-page">
            <div>                
                <Navbar />
            </div>
            <div><Hero /></div>
            <div>Most popular Resutaurant</div>
            <div>Signature Dish of</div>
            <div><Icon_meaning /></div>
            <div><Week_chef /></div>
            <div>Chefs Restaurant</div>
            <div>About us</div>
            <div>Footer</div>


        </div>
    );
};

export default HomePage 