import React from "react";
import "./Card_dish_modal.css"
import {Iprops} from "../../interfaces"
import shekel from "../../assets/icons/shekel-icon.svg"

const CardDishModal: React.FC<Iprops> = (props:Iprops)=> {
    return (
        <button className={`modal-dish-card ${props.class}`} onClick={props.onClick} >
            <div className="up-part-card-dish">
                <img src={props.src} alt={props.alt} className="img-card-dish-modal"/>
                <div className="name-card-dish">{props.name} </div>
                {/* <img src={props.spicy} className="spicy-card-dish" />
                <img src={props.vegitarian} className="vegan-card-dish" />
                <img src={props.vegan} className="vegitarian-card-dish" /> */}
                <div className="ingredients-card-dish-modal">
                    {props.ingredients}</div>
            </div>
            <div className="price-div-modal">
                <hr className="hr-left" />
                <img src={shekel} alt="" />
                <div className="price-card-dish">{props.price}</div>
                <hr className="hr-right"/>
                <hr className="hr-mobile" />
            </div>
            <div className="side-dish-container">
                <div className="title-side-dish"> Choose a side </div>
                <div className="side-dish-content">                    
                    {props.sideDishes}
                </div>
            </div>
            <div className="changes-container">
                <div className="title-changes-dish">Changes</div>
                <div className="changes-content">                    
                {props.changes}
            </div>
                </div>
        </button>
    ) 
}

export default CardDishModal