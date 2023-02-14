import react from "react"
import CardWeekChef from "../Card_week_chef/Card_week_chef"
import data from "../../epicure.json"

const All_chefs:React.FC = () => {
    const chefs = data.chefs.map((chef:any) => {
        return <CardWeekChef 
        class= {chef.name}
        // srcChef= {chefImg}
        // srcChef= {require(`../../assets/images/Chefs/${chef.portrait}.png`)}
        ChefName = {chef.name}  
              />  
})
    return ( 
        <div className="all-chef-page" >
            <div className="all-chef-page-container">
                {chefs}
            </div>
        </div>
    ) 
}

export default All_chefs

{/* const Week_chef: React.FC = ()=> {
    const items = data.chefs.map((item:any) => {
        if (item.isChefOfTheWeek === true) {
            return < CardWeekChef
            class= {item.name}
            srcChef= {require(`../../../assets/images/${item.portrait}.png`)}
            ChefName = {item.name}
            info = {item.info}
            restTitle = {`${item.firstName}'s Restaurants`}
            // restaurants= {item.restaurants}
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

export default Week_chef */}