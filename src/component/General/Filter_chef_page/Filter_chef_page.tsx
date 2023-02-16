import React from "react";
import "./Filter_chef_page.css"
import NavButton from "../NavButton_nav/NavButton";

// const dispatch = useDispatch ()
// const restFilter = useSelector((state: any) => state.restaurants.value)
// const [activeButton, setActiveButton] = useState ("all")

// const handleAllClick = () => {
//     dispatch(restaurantPageFilter("all"));
//     setActiveButton("all")
// }
// const handleNewClick = () => {
//     dispatch(restaurantPageFilter("new"));
//     setActiveButton("new")
// }
// const handleMostPopularClick = () => {
//     dispatch(restaurantPageFilter("mostPopular"));
//     setActiveButton("mostPopular")
// }

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