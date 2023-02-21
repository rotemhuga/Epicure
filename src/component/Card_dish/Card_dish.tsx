import React from "react";
import "./Card_dish.css"
import {Iprops} from "../../interfaces"
import shekel from "../../assets/icons/shekel-icon.svg"

const CardDish: React.FC<Iprops> = (props:Iprops)=> {
    return (
        <button className={`card-dish ${props.class}`} >
            <div className="up-part-card-dish">
                <img src={props.src} alt={props.alt} className="img-card-dish"/>
                <div className="name-card-dish">{props.name} </div>
                <img src={props.spicy} className="spicy-card-dish" />
                <img src={props.vegitarian} className="vegan-card-dish" />
                <img src={props.vegan} className="vegitarian-card-dish" />
                <div className="ingredients-card-dish">
                    {props.ingredients}</div>
            </div>
            <div className="price-div">
                <img src={shekel} alt="" />
                <div className="price-card-dish">{props.price}</div>
            </div>
        </button>
    ) 
}

export default CardDish