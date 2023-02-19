import React from "react";
import "./Rest_filter_link.css"
import { useState } from "react";
import NavButton from "../NavButton_nav/NavButton";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../interfaces";
import {
    restaurantPageFilter
  } from "../../../store/slices/restaurantsSlice"

const RestFilterLink: React.FC = () => {
    const dispatch = useDispatch ()
    const restFilter = useSelector((state: IRootState) => state.restaurants.value)
    const [activeButton, setActiveButton] = useState ("all")
    
    const handleAllClick = () => {
        dispatch(restaurantPageFilter("all"));
        setActiveButton("all")
    }
    const handleNewClick = () => {
        dispatch(restaurantPageFilter("new"));
        setActiveButton("new")
    }
    const handleMostPopularClick = () => {
        dispatch(restaurantPageFilter("mostPopular"));
        setActiveButton("mostPopular")
    }
    const handleOpenNowClick = () => {
        dispatch(restaurantPageFilter("openNow"));
        setActiveButton("openNow")
    }
    const handleMapViewClick = () => {
        dispatch(restaurantPageFilter("mapView"));
        setActiveButton("mapView")
    }

    return (
        <div className="all-buttons">
            <NavButton name={"All"} class="button-all-rest"  onClick={handleAllClick} />
            <NavButton name={"New"} class="button-new" onClick={handleNewClick}/>
            <NavButton name={"Most Popular"} class="button-most-popular" onClick={handleMostPopularClick}/>
            <NavButton name={"Open Now"} class="button-open-now" onClick={handleOpenNowClick}/>
            <NavButton name={"Map View"} class="button-map-view" onClick={handleMapViewClick}/>
        </div>
    )
}

export default RestFilterLink