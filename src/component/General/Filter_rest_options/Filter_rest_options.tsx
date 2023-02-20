import React from "react";
import "../Rest_filter_link/Rest_filter_link.css"
import "../Filter_rest_options/Filter_rest_options.css"
import NavButton from "../NavButton_nav/NavButton";
import vectorDown from "../../../assets/icons/Vector-filter-down.svg"

const FilterRestOptions: React.FC = () => {
    return (
        <div className="all-buttons filter-options">
            <div className="button-filter left">
                <NavButton name={"Price Range"} class="button-all-rest"/>
                <img src={vectorDown} alt="vector" className="vectorDown" />
            </div>
            <div className="button-filter middle">
                <NavButton name={"Distance"} class="button-all-rest"/>
                <img src={vectorDown} alt="vector" />
            </div>
            <div className="button-filter right">
                <NavButton name={"Rating"} class="button-all-rest"/>
                <img src={vectorDown} alt="vector" />
            </div>
        </div>
    )
}

export default FilterRestOptions