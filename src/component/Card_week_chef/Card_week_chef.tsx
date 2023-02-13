import React from "react";
import "./Card_week_chef.css"

interface Iprops {
    class?: string,
    srcChef?: string,
    alt?:string,
    ChefName?: string,
    info?:string,
    restaurant1?:any
    srcRest1?:string
    restaurant2?:any
    srcRest2?:string
    restaurant3?:any
    srcRest3?:string
    restTitle?:string
}

const CardWeekChef: React.FC<Iprops> = (props:Iprops)=> {
    return (
        <div>
            <button className={`card-week-chef ${props.class}`} >
                <img src={props.srcChef} alt={props.alt} className="img-week-chef-card"/>  
                <div className="name-week-chef-card">{props.ChefName} </div>
            </button>
            <div className="info-week-chef-card">{props.info}</div>
            <div className="rest-title-week-chef-card">{props.restTitle}</div>
            <div className="rest-week-chef-container">
                <div className="all-rest-week-chef">
                    <div className="one rest-card">
                        <img src={props.srcRest1} alt={props.alt} className="rest-img one"/>  
                        <div className="one-name rest-week">{props.restaurant1}</div>
                    </div>
                    <div className="two rest-card">
                        <img src={props.srcRest2} alt={props.alt} className="rest-img two"/>  
                        <div className="two-name rest-week">{props.restaurant2}</div>
                    </div>
                    <div className="three rest-card">
                        <img src={props.srcRest3} alt={props.alt} className="rest-img three"/>  
                        <div className="three-name rest-week">{props.restaurant3}</div>
                    </div>

                </div>
            </div>
        </div>
    ) 
}

export default CardWeekChef