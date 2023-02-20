import React from "react";
import { IRootState, IrestaurantsValue } from "../../../interfaces"
import { useSelector } from "react-redux";
// import CardRestaurant from "../../Card_restaurant/Card_restaurant";
import claro from "../../../assets/images/Restaurants/claro-1.png"

const OneRestDetails: React.FC = ()=> {
const restaurants = useSelector(
        (state:IRootState) => state.restaurants.value
    );

return (
    <>
    { restaurants.map((rest:IrestaurantsValue) => {
       if (rest.name === "Claro") {
           return (
               <div className={`one-rest-details-container`} id={`rest-card ${rest.id}`} >
               <img src={claro} alt={rest.alt} className="img-one-rest"/>
                <div className="name-popular-card">{rest.name} </div>
                <div className="chef-popular-card">{rest.chef}</div> 
                 <div className="chef-popular-card">{rest.isOpen? "open now":""}</div> 
                </div>
            ) 
            }
        })}
        </>
        )
    }   
export default OneRestDetails

