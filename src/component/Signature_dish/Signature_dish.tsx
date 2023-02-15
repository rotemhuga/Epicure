import React from "react";
import "../Signature_dish/Signature_dish.css"
import CardDish from "../../component/Card_dish/Card_dish"
import data from "../../epicure.json"

const Signature_dish: React.FC = ()=> {


const items = data.dishes.map((item:any) => {
    if (item.isPopular === true) {
        return <CardDish 
        class= {item.name}
        name = {item.name}
        src= {require(`../../assets/images/Dishes/${item.img}.png`)}
        // spicy = {require(`../../assets/icons/${item.isSpicy}.svg`)}
        // vegitarian = {require(`../../assets/icons/${item.isVegitarian}.svg`)}
        // vegan = {require(`../../assets/icons/${item.isVegan}.svg`)}
        ingredients = {item.ingredients}
        price = {item.price} 
        />
    
    } else {
        return null;
 }   
})
    return (
        
        <div className="all-dish-container">
            <div className="popular-dish-title">SIGNATURE DISH OF</div>
            <div className="all-dish-card">
                {items}
            </div>
            <button className="all-dish-path">
            </button>
        </div>
    ) 
}

export default Signature_dish

