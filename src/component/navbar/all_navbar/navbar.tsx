import React from "react";
import LogoNav from "../Logo_nav/LogoNav";
import NavButton from "../NavButton_nav/NavButton";
import ChefsNav from "../Chefs_nav/ChefsNav";
import SearchNav from "../Search_nav/SearchNav";
import ProfileNav from "../Profile_nav/PropfileNav";
import BagNav from "../Bag_Nav/BagNav";




const Navbar: React.FC = () => {
    return (
        <div id="all-navbar">
            <div className="left-nav navbar">
                <LogoNav />
                {/* <Route path="../" element={<LogoNav />} /> */}
                <NavButton name={"Restaurants"} />
                <NavButton name={"Chefs"} />
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