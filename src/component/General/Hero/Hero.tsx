import React from "react";
import "./Hero.css"
import SearchNav from "../../navbar/Search_nav/SearchNav";


const Hero: React.FC = ()=> {
    return (
        <div id="hero-container">
                <div id="hero-search">
                    <p id="hero-search-text">Epicure works with the top chef restaurants in Tel Aviv</p> 
                    <div id="hero-search-input">
                        <img src ={"../../navbar/Search_nav/SearchNav"} alt="hero-search-image" />
                        <input type="text" placeholder="Search for restaurant cuisine, chef"/>

                    </div>

                </div>            
        </div>
    ) 
}

export default Hero as React.FC;


