import React from "react";
import NavButton from "../../General/NavButton_nav/NavButton";
import SearchNav from "../Search_nav/SearchNav";
import ProfileNav from "../Profile_nav/PropfileNav";
import BagNav from "../Bag_Nav/BagNav";
import logo from '../../../assets/NavbarAssets/logo.svg';


const Navbar: React.FC = () => {
    return (
        <div id="all-navbar">
            <div className="left-nav navbar">
                <NavButton name = "" src={logo} class="logo" />
                <NavButton name={"Restaurants"} class="Rest-button" />
                <NavButton name={"Chefs"} class="Chefs-button" />
            </div>
            <div className="right-nav navbar">
                <SearchNav />
                <ProfileNav />
                <BagNav />
            </div>
        </div>
    );
};

export default Navbar 