import React from "react";
import "./ChefsPage.css"
import Navbar from "../navbar/all_navbar/navbar";
import Footer from "../General/Footer/Footer";
import FilterChefPage from "../General/Filter_chef_page/Filter_chef_page"

const ChefsPage: React.FC = () => {
    return (
        <div id="Chefs-page">
            <Navbar />
            <FilterChefPage />
            <Footer />
        </div>
    );
};

export default ChefsPage 