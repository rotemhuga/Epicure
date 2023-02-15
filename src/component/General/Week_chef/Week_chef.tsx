import React from "react";
import "../Week_chef/Week_chef.css"
import data from "../../../epicure.json"
import CardWeekChef from "../../Card_week_chef/Card_week_chef"
 

const Week_chef: React.FC = ()=> {
    const items = data.chefs.map((item:any) => {
        if (item.isChefOfTheWeek === true) {
            return < CardWeekChef
            class= {item.name}
            srcChef= {require(`../../../assets/images/${item.portrait}.png`)}
            ChefName = {item.name}
            info = {item.info}
            restTitle = {`${item.firstName}'s Restaurants`}
            restaurant1 = {item.restaurants[0]} 
            srcRest1 = {require(`../../../assets/images/Restaurants/${item.restaurantsImg[0]}.png`)}
            restaurant2 = {item.restaurants[1]} 
            srcRest2 = {require(`../../../assets/images/Restaurants/${item.restaurantsImg[1]}.png`)}
            restaurant3 = {item.restaurants[2]} 
            srcRest3 = {require(`../../../assets/images/Restaurants/${item.restaurantsImg[2]}.png`)}
            />
        
        } else {
            return null;
        }   
    })
 
    return (
        <div id="week-chef-container">
            <div id="week-chef-title">CHEF OF THE WEEK:</div>
            <div id="week-chef-all-content">
                {items}
            </div>
        </div>
    ) 

}

export default Week_chef


