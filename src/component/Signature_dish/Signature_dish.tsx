import React from "react";
import "./Signature_dish.css"

interface Iprops {
    class?: string,
    src?: string,
    alt?:string,
    name?:string,
    vegan?: string,
    ingredients?:string,
    price?:string
}

const CardRestaurant: React.FC<Iprops> = (props:Iprops)=> {
    return (
        <button className={`card ${props.class}`} >
            <img src={props.src} alt={props.alt} className="img-sign-rest"/>
            <div className="name-sign-rest">{props.name} </div>
            <div className="vegan-popular-card">{props.vegan}</div>
            <div className="rating-popular-div">
            </div>
        </button>
    ) 
}

export default CardRestaurant