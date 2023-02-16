import React from "react";
import "../Week_chef/Week_chef.css"
import data from "../../../epicure.json"
import CardWeekChef from "../../Card_week_chef/Card_week_chef"
 

const Week_chef: React.FC = ()=> {
    const items = data.chefs.map((item:any) => {
        const chefRest = item.restaurants
       const choosen =  chefRest.map((restid:string) => {
            const choosenObj = data.restaurants.filter((restObj) => restObj.id === restid)[0]
            console.log(choosenObj)
            return choosenObj
        })
        console.log(choosen)
        if (item.isChefOfTheWeek === true) { 
                 return < CardWeekChef
            class= {item.name}
            srcChef= {require(`../../../assets/images/${item.portrait}.png`)}
            ChefName = {item.name}
            info = {item.info}
            restTitle = {`${item.firstName}'s Restaurants`}
            chefResturants = {choosen} 
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


