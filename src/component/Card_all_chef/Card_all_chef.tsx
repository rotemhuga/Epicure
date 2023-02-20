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
    return (
        <div>
            <button className={`card-all-chef ${props.class}`} >
                <img src={props.srcChef} alt={props.alt} className="img-all-chef-card"/>  
            </button>
        </div>
    ) 
}

export default CardAllChef