import React from "react";
import './navbar.css';
import NavButton from "../../General/NavButton_nav/NavButton";
import SearchNav from "../Search_nav/SearchNav";
import ProfileNav from "../Profile_nav/PropfileNav";
import BagNav from "../Bag_Nav/BagNav";
import logo from '../../../assets/icons/logo.svg';
import {useNavigate} from "react-router-dom";
import RestaurantsPage from "../../RestaurantsPage/RestaurantsPage";


const Navbar: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div id="all-navbar">
            <div className="left-nav navbar">
                <NavButton name = "" src={logo} class="logo" onClick={() => navigate("/")} />
                <NavButton name={"Restaurants"} class="Rest-button" onClick={() => navigate("/RestaurantsPage")} />
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

