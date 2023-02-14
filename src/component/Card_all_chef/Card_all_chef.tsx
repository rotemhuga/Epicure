import React from "react";
import "./Card_all_chef.css"

interface Iprops {
    class?: string,
    srcChef?: string,
    alt?:string,
    ChefName?: string,
    id?:string,
}

const CardAllChef: React.FC<Iprops> = (props:Iprops)=> {
    // const rest= data.restaurants
    // rest.map((restObj)=> {
    //     props.restaurants.includes(restObj.id)
       
    // })
    // console.log(props.restaurants)
    return (
        <div>
            <button className={`card-all-chef ${props.class}`} >
                <img src={props.srcChef} alt={props.alt} className="img-all-chef-card"/>  
                <div className="name-all-chef-card">{props.ChefName} </div>
            </button>
        </div>
    ) 
}

export default CardAllChef