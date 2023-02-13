import React from "react";
import "./Rest_filter_link.css"
import NavButton from "../NavButton_nav/NavButton";

const RestFilterLink: React.FC = () => {
    return (
        <div className="all-buttons">
            <NavButton name={"All"} class="button-all-rest"/>
            <NavButton name={"New"} class="button-new"/>
            <NavButton name={"Most Popular"} class="button-most-popular"/>
            <NavButton name={"Open Now"} class="button-open-now"/>
            <NavButton name={"Map View"} class="button-map-view"/>
        </div>
    )
}

export default RestFilterLink