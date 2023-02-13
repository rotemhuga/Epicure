import React from "react";
import "./Card_week_chef.css"

interface Iprops {
    class?: string,
    src?: string,
    alt?:string,
    ChefName?: string,
    info?:string,
    restaurants?:any
    restTitle?:string
}

const CardWeekChef: React.FC<Iprops> = (props:Iprops)=> {
    return (
        <div>
            <button className={`card-week-chef ${props.class}`} >
                <img src={props.src} alt={props.alt} className="img-week-chef-card"/>  
                <div className="name-week-chef-card">{props.ChefName} </div>
            </button>
            <div className="info-week-chef-card">{props.info}</div>
            <div className="rest-week-chef-card">{props.restaurants}</div>
            <div className="rest-title-week-chef-card">{props.restTitle}</div>
        </div>
    ) 
}

export default CardWeekChef