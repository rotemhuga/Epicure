import React from "react";
import "../Signature_dish/Signature_dish.css"
import CardDish from "../../component/Card_dish/Card_dish"
import data from "../../epicure.json"
// import vegan from "../../assets/icons/vegan-icon.svg"

const Signature_dish: React.FC = ()=> {


const items = data.dishes.map((item:any) => {
    if (item.isPopular === true) {
        return <CardDish 
        class= {item.name}
        name = {item.name}
        src= {require(`../../assets/images/Dishes/${item.img}.png`)}
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
            <div className="all-dish-popular">
                {items}
            </div>
            <button className="all-dish-path">
                {/* All Restaurants <img src={vector} alt="vector" className="vector-rest"/> */}
            </button>
        </div>
    ) 
}

export default Signature_dish

