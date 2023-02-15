import React from "react";
import "./Filter_chef_page.css"
import NavButton from "../NavButton_nav/NavButton";

const FilterChefPage: React.FC = () => {
    return (
        <div className="all-buttons">
            <NavButton name={"All"} class="button-all-chefs"/>
            <NavButton name={"New"} class="button-new-chef"/>
            <NavButton name={"Most Viewed"} class="button-most-viewed"/>
        </div>
    )
}

export default FilterChefPage