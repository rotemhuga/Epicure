import React from "react";
import CardDish from "../../Card_dish/Card_dish";
import "./One_rest_details.css"
import { IRootState, IrestaurantsValue, IdishesValue } from "../../../interfaces"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import clockLogo from "../../../assets/icons/clock-icon.svg"
import restImg from "../../../assets/images/hero-rest-img.png"

const OneRestDetails: React.FC = ()=> {
    const allRestaurants = useSelector(
            (state:IRootState) => state.restaurants.value
        );
    const allDishes = useSelector(
            (state:IRootState) => state.dishes.value
        );
    const detailsrest = useParams()

    const restobj = allRestaurants.find((rest:IrestaurantsValue) => detailsrest.id == rest.id)
    const newArrDishes = restobj?.dishes?.map((dishId:any) => {
        const singleDish = allDishes.find((dishObj:IdishesValue) => dishObj.id == dishId)
        return singleDish
    })
    console.log(newArrDishes)
    const dishCard = newArrDishes?.map((dish:any) => (
            <CardDish 
                class= {"single-rest-card-dish"}
                name = {dish.name}
                src= {require(`../../../assets/images/Dishes/${dish.img}.png`)}
                ingredients = {dish.ingredients}
                price = {dish.price} 
                key = {dish.id}  
            />
    ))
    
return (
    <div className={"one-rest-details-all"}>
        <div className={`one-rest-details-container`} id={`rest-card ${restobj?.id}`} >
            {/* <img src={require(`../../../assets/images/Restaurants/${restobj?.img}.png`)} alt={restobj?.alt} className="img-one-rest"/> */}
            <img src={restImg} alt={restobj?.alt} className="img-one-rest"/>
            <div className="name-rest-details-card">{restobj?.name} </div>
            <div className="chef-rest-details-card">{restobj?.chef}</div> 
            <div className="open-rest-details-card">
                <img src={clockLogo} alt="clock-icon" />
                <span>{restobj?.isOpen? "open now":"close"}</span>
            </div> 
        </div>
        <div className="all-buttons-one-rest">
                <button className="breakfast button-all">Breakfast</button>
                <button className="lanch button-all">Lanch</button>
                <button className="dinner button-all">Dinner</button>
        </div>
            <div className="all-dish-cards">
                {dishCard}
            </div>
    </div>
)
}   
export default OneRestDetails

