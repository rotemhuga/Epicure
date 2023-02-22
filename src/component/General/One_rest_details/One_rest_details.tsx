import React, { useEffect, useState } from "react";
import CardDish from "../../Card_dish/Card_dish";
import "./One_rest_details.css"
import { IRootState, IrestaurantsValue, IdishesValue } from "../../../interfaces"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import clockLogo from "../../../assets/icons/clock-icon.svg"
import restImg from "../../../assets/images/hero-rest-img.png"
import { dishesPageFilter } from "../../../store/slices/dishesSlice";


const OneRestDetails: React.FC = ()=> {
    const dispatch = useDispatch()
    const [activeButton, setActiveButton] = useState("all")
    
    const allRestaurants = useSelector(
            (state:IRootState) => state.restaurants.value
        );
    const allDishes = useSelector(
            (state:IRootState) => state.dishes.valueRestDishes
        );
        const allDishesState = useSelector(
            (state:IRootState) => state.dishes.value
        );
    const [dishCard, setDishCard] = useState<any>()

    const detailsrest = useParams()

    const restobj = allRestaurants.find((rest:IrestaurantsValue) => detailsrest.id == rest.id)
    const newArrDishes = restobj?.dishes?.map((dishId:any) => {
        const singleDish = allDishesState.find((dishObj:IdishesValue) => dishObj.id == dishId)
        return singleDish
    })

    console.log(newArrDishes)  
    useEffect(()=> {
    dispatch(dishesPageFilter({type: "all", data: newArrDishes}))
    },[])      

    useEffect(() => {
        console.log(allDishes)
        setDishCard(allDishes?.map((dish:any) => (
            <CardDish 
                class= {"single-rest-card-dish"}
                name = {dish.name}
                src= {require(`../../../assets/images/Dishes/${dish.img}.png`)}
                ingredients = {dish.ingredients}
                price = {dish.price} 
                key = {dish.id}  
            />
        ))) 
    },[allDishes])

    const [clicked, setClicked] = useState("all");
    const update=(e:React.MouseEvent<unknown>)=>{
        const type = (e.target as HTMLInputElement).name        
        dispatch(dishesPageFilter({type:type, data:newArrDishes}))
        setActiveButton(type )
        setClicked(type)
    }
return (
    <div className={"one-rest-details-all"}>
        <div className={`one-rest-details-container`} id={`rest-card ${restobj?.id}`} >
            {/* <img src={require(`../../../assets/images/Restaurants/${restobj?.img}.png`)} alt={restobj?.alt} className="img-one-rest"/> */}
            <img src={restImg} alt={restobj?.alt} className="img-one-rest"/>
            <div className="name-rest-details-card">{restobj?.name} </div>
            <div className="chef-rest-details-card">{restobj?.chef}</div> 
            <div className="open-rest-details-card">
                <img src={clockLogo} alt="clock-icon" />
                <span>{restobj?.isOpen? "open now":"close"}</span>
            </div> 
        </div>
        <div className="all-buttons-one-rest">
                <button value={"Breakfast"} name="breakfast" onClick= {(e:any)=> update(e)} className={clicked === "breakfast" ? "clicked" : "not-clicked"} >Breakfast</button>
                <button value={"Lanch"} name="lanch" onClick= {(e:any)=> update(e)} className={clicked === "lanch" ? "clicked" : "not-clicked"}>Lanch</button>
                <button value={"Dinner"} name="dinner" onClick= {(e:any)=> update(e)} className={clicked === "dinner"? "clicked" : "not-clicked"} >Dinner</button>
        </div>
        <div className="all-dish-cards">
            {dishCard}
        </div>
    </div>
)
}   
export default OneRestDetails

