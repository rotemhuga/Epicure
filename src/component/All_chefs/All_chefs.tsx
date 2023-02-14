import react from "react"
import data from "../../epicure.json"
import "./All_chefs.css"
import CardAllChef from "../Card_all_chef/Card_all_chef"

const All_chefs:React.FC = () => {
    const chefs = data.chefs.map((chef:any) => {
        return <CardAllChef 
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

