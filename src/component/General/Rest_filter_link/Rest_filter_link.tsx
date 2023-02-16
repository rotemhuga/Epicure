import React from "react";
import "./Rest_filter_link.css"
import { useState } from "react";
import NavButton from "../NavButton_nav/NavButton";
import { useDispatch, useSelector } from "react-redux";
import {
    reduceName
  } from "../../../store/slices/restaurantsSlice"

const RestFilterLink: React.FC = () => {
    const dispatch = useDispatch ()
    const restFilter = useSelector((state: any) => state.restaurants.value)
    const [activeButton, setActiveButton] = useState ("all")
    
    const handleNewClick = () => {
        dispatch(reduceName("new"));
        setActiveButton("new")
    }

    return (
        <div className="all-buttons">
            <NavButton name={"All"} class="button-all-rest" />
            <NavButton name={"New"} class="button-new" onClick={handleNewClick}/>
            <NavButton name={"Most Popular"} class="button-most-popular"/>
            <NavButton name={"Open Now"} class="button-open-now"/>
            <NavButton name={"Map View"} class="button-map-view"/>
        </div>
    )
}

export default RestFilterLink