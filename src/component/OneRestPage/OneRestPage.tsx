import React from "react";
import { useSelector } from "react-redux";
import { IRootState, IdishesValue } from "../../interfaces";
import CardDish from "../Card_dish/Card_dish"
import "../OneRestPage/OneRestPage.css"
import Navbar from "../navbar/all_navbar/navbar";
import Footer from "../General/Footer/Footer";
import OneRestDetails from "../General/One_rest_details/One_rest_details";

const OneRestPage: React.FC = () => {
const dishes = useSelector(
        (state:IRootState) => state.dishes.value
    );

const allDishes = dishes.map((dish:IdishesValue) => (
        <CardDish 
        class= {dish.name}
        name = {dish.name}
        src= {require(`../../assets/images/Dishes/${dish.img}.png`)}
        ingredients = {dish.ingredients}
        price = {dish.price} 
        key = {dish.id}  
        />
))
        return (
        <div>
            <div><Navbar /></div>
            <div>
                <div>
                <OneRestDetails />               
                </div>
            </div>
            <div className="all-buttons-one-rest">
                <button className="breakfast button-all">Breakfast</button>
                <button className="lanch button-all">Lanch</button>
                <button className="dinner button-all">Dinner</button>
            </div>
            <div className="all-one-rest-dishes">{allDishes}</div>
            <div><Footer /></div>
        </div>
       ) 

    }
// )}
export default OneRestPage
