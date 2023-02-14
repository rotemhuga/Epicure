import React from "react";
import "./ChefsPage.css"
import Navbar from "../navbar/all_navbar/navbar";
import Footer from "../General/Footer/Footer";
import FilterChefPage from "../General/Filter_chef_page/Filter_chef_page"
import AllChefs from "../All_chefs/All_chefs";

const ChefsPage: React.FC = () => {
    return (
        <div id="Chefs-page">
            <Navbar />
            <FilterChefPage />
            <AllChefs />
            <Footer />
        </div>
    );
};

export default ChefsPage 