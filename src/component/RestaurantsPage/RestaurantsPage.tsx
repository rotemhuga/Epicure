import React from "react";
import "./RestaurantsPage.css"
import Navbar from "../navbar/all_navbar/navbar";
import Footer from "../General/Footer/Footer";

const RestaurantsPage: React.FC = () => {
    return (
        <div id="Restaurants-page">
            <div>                
                <Navbar />
            </div>
            {/* <div><Hero /></div>
            <div><Popular_restaurant /></div>
            <div><Signature_dish /></div>
            <div><Icon_meaning /></div>
            <div><Week_chef /></div>
            <div>  <About_us /></div> */}
            <div><Footer /></div>
        </div>
    );
};

export default RestaurantsPage 