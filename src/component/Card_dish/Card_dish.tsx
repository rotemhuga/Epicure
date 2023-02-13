import React from "react";
import "./Card_dish.css"

interface Iprops {
    class?: string,
    src?: string,
    alt?:string,
    name?:string,
    spicy?: string,
    vegitarian?: string,
    vegan?: string,
    ingredients?:string,
    price?:string
}

const CardDish: React.FC<Iprops> = (props:Iprops)=> {
    return (
        <button className={`card-dish ${props.class}`} >
            <img src={props.src} alt={props.alt} className="img-card-dish"/>
            <div className="name-card-dish">{props.name} </div>
            <img src={props.spicy} className="spicy-card-dish" />
            <img src={props.vegitarian} className="vegan-card-dish" />
            <img src={props.vegan} className="vegitarian-card-dish" />
            <div className="ingredients-card-dish">{props.ingredients}</div>
            <div className="price-card-dish">{props.price}</div>
        </button>
    ) 
}

export default CardDish