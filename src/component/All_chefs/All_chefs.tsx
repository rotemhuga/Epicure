import react from "react"
import CardWeekChef from "../Card_week_chef/Card_week_chef"
import data from "../../epicure.json"
import "./All_chefs.css"

const All_chefs:React.FC = () => {
    const chefs = data.chefs.map((chef:any) => {
        return <CardWeekChef 
        class= {chef.name}
        ChefName = {chef.name}  
        srcChef = {require(`../../assets/images/Chefs/${chef.portrait}.png`)}
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

