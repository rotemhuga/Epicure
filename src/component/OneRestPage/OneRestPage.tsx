import React from "react";
import { useSelector } from "react-redux";
import { IRootState, IdishesValue, IOneRest } from "../../interfaces";
import CardDish from "../Card_dish/Card_dish"
import "../OneRestPage/OneRestPage.css"
import Navbar from "../navbar/all_navbar/navbar";

const OneRestPage: React.FC = () => {
const dishes = useSelector(
        (state:IRootState) => state.dishes.value
    );

    // const items = dishes.map((item:IdishesValue) => {
        return (
        <div>
            <div><Navbar /></div>
            <div>IOneRest</div>
            <div>
                <button>Breakfast</button>
                <button>Lanch</button>
                <button>Dinner</button>
            </div>
            <div> Restaurant Dishes</div>
        </div>
       ) 
        // (
        // <CardDish 
        // class= {item.name}
        // name = {item.name}
        // src= {require(`../../assets/images/Dishes/${item.img}.png`)}
        // ingredients = {item.ingredients}
        // price = {item.price} 
        // key = {item.id}  
        // )
    }
// )}
export default OneRestPage
