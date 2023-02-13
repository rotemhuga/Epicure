import React from "react";
import "./HomePage.css"
import Navbar from "../navbar/all_navbar/navbar";
import Hero from "../General/Hero/Hero";
import Icon_meaning from "../General/Icon_meaning/Icon_meaning";
import Week_chef from "../General/Week_chef/Week_chef";
import About_us from "../General/About_us/About_us";
import Footer from "../General/Footer/Footer";
import Popular_restaurant from "../General/Popular_restaurant/Popular_restaurant";
import Signature_dish from "../Signature_dish/Signature_dish";

const HomePage: React.FC = () => {
    return (
        <div id="Home-page">
            <div>                
                <Navbar />
            </div>
            <div><Hero /></div>
            <div><Popular_restaurant /></div>
            <div><Signature_dish /></div>
            <div><Icon_meaning /></div>
            <div><Week_chef /></div>
            <div>Chefs Restaurant</div>
            <div>  <About_us /></div>
            <div><Footer /></div>


        </div>
    );
};

export default HomePage 