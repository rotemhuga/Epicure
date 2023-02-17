import React from "react";
import './navbar.css';
import NavButton from "../../General/NavButton_nav/NavButton";
import SearchNav from "../Search_nav/SearchNav";
import ProfileNav from "../Profile_nav/PropfileNav";
import BagNav from "../Bag_Nav/BagNav";
import logoName from '../../../assets/icons/epicure-logo-name.svg';
import logoIcon from "../../../assets/icons/epicure-logo-icon.svg"
import {useNavigate} from "react-router-dom";


const Navbar: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div id="all-navbar">
            <div className="left-nav navbar">
                <div className="left-nav-stay navbar">
                    <NavButton name = "" src={logoIcon} class="logo-icon" onClick={() => navigate("/")} />
                </div>
                <div className="left-nav navbar">
                    <NavButton name = "" src={logoName} class="logo-name" onClick={() => navigate("/")} />
                    <NavButton name={"Restaurants"} class="Rest-button" onClick={() => navigate("/RestaurantsPage")} />
                    <NavButton name={"Chefs"} class="Chefs-button" onClick={() => navigate("/ChefsPage")} />
                </div>
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

