import React from "react";
import "./RestaurantsPage.css"
import Navbar from "../navbar/all_navbar/navbar";
import RestFilterLink from "../General/Rest_filter_link/Rest_filter_link"
import Footer from "../General/Footer/Footer";


const RestaurantsPage: React.FC = () => {
    return (
        <div id="Restaurants-page">
            <div>                
                <Navbar />
            </div>
            <div><RestFilterLink /></div>
            {/* <div><Signature_dish /></div>
            <div><Icon_meaning /></div>
            <div><Week_chef /></div>
            <div>  <About_us /></div> */}
            <div><Footer /></div>
        </div>
    );
};

export default RestaurantsPage 