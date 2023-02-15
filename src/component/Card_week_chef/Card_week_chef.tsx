import React from "react";
import "./Card_week_chef.css"
import data from "../../epicure.json"

interface Iprops {
    class?: string,
    srcChef?: string,
    alt?:string,
    ChefName?: string,
    id?:string,
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
    // const rest= data.restaurants
    // rest.map((restObj)=> {
    // props.includes(restObj.id)
    // // props.restaurants.includes(restObj.id)
       
    // })
    // console.log("hello")'
    // function getRestaurantFromChef(chef: IChef, restaurantId: number): IRestaurant | undefined {
    //     const restaurant = data.restaurants.find((r) => r.id === restaurantId);
    //     if (restaurant && chef.restaurants.includes(restaurant.id)) {
    //       return restaurant;
    //     }
    //     return undefined;
    //   }





    return (
        <div>
            <button className={`card-week-chef ${props.class}`} id="all-chefs-card" >
                <img src={props.srcChef} alt={props.alt} className="img-week-chef-card"/>  
                {/* <div className="name-week-chef-card">{props.ChefName} </div> */}
            </button>
            <div className="info-week-chef-card">{props.info}</div>
            <div className="rest-title-week-chef-card">{props.restTitle}</div>
            <div className="rest-week-chef-container">
                <div className="all-rest-week-chef">
                    <button className="one rest-card">         
                        <img src={props.srcRest1} alt={props.alt} className="rest-img one"/>  
                        <div className="one-name rest-week">{props.restaurant1}</div>
                    </button>
                    <button className="two rest-card">
                        <img src={props.srcRest2} alt={props.alt} className="rest-img two"/>  
                        <div className="two-name rest-week">{props.restaurant2}</div>
                    </button>
                    <button className="three rest-card">
                        <img src={props.srcRest3} alt={props.alt} className="rest-img three"/>  
                        <div className="three-name rest-week">{props.restaurant3}</div>
                    </button>

                </div>
            </div>
        </div>
    ) 
}

export default CardWeekChef