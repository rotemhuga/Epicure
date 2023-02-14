import react from "react"
import data from "../../epicure.json"
import "../All_chefs/All_chefs.css"
import CardWeekChef from "../Card_week_chef/Card_week_chef"
// import chefImg from "../../assets/images/Chefs/asaf-granit-1.png"

const AllChefs:React.FC = () => {
const chefs = data.chefs.map((chef:any) => {
        return <CardWeekChef 
        class= {chef.name}
        // srcChef= {chefImg}
        srcChef= {require(`../../assets/images/Chefs/${chef.portrait}.png`)}
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
export default AllChefs