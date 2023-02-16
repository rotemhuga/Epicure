import React from "react";
import "./Filter_chef_page.css"
import NavButton from "../NavButton_nav/NavButton";
import { useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import {
    chefsPageFilter
} from "../../../store/slices/chefsSlice"

const FilterChefPage: React.FC = () => {
    const dispatch = useDispatch ()
    const restFilter = useSelector((state: any) => state.restaurants.value)
    const [activeButton, setActiveButton] = useState ("all")

    const handleAllClick = () => {
        dispatch(chefsPageFilter("all"));
        setActiveButton("all")
    }
    const handleNewClick = () => {
        dispatch(chefsPageFilter("new"));
        setActiveButton("new")
    }
    const handleMostViewedClick = () => {
        dispatch(chefsPageFilter("mostViewed"));
        setActiveButton("mostViewed")
    }

        return (
            <div className="all-buttons">
                <NavButton name={"All"} class="button-all-chefs" onClick={handleAllClick}/>
                <NavButton name={"New"} class="button-new-chef" onClick={handleNewClick} />
                <NavButton name={"Most Viewed"} class="button-most-viewed" onClick={handleMostViewedClick}/>
            </div>
        )
    }

export default FilterChefPage