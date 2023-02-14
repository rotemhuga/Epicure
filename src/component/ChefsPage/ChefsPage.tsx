import React from "react";
import "./ChefsPage.css"
import Navbar from "../navbar/all_navbar/navbar";
import Footer from "../General/Footer/Footer";
import FilterChefPage from "../General/Filter_chef_page/Filter_chef_page"
import All_chefs from "../All_chefs/All_chefs"

const ChefsPage: React.FC = () => {
    return (
        <div id="Chefs-page">
            <Navbar />
            <FilterChefPage />
            <All_chefs />
            <Footer />
        </div>
    );
};

export default ChefsPage 