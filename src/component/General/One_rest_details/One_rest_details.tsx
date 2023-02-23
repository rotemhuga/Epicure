import React, { useEffect, useState } from "react";
import CardDish from "../../Card_dish/Card_dish";
import CardDishModal from "../../Card_dish_modal/Card_dish_modal"
import "./One_rest_details.css"
import { IRootState, IrestaurantsValue, IdishesValue } from "../../../interfaces"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import clockLogo from "../../../assets/icons/clock-icon.svg"
import closeModal from "../../../assets/icons/close-icon-modal.svg"
import restImg from "../../../assets/images/hero-rest-img.png"
import { dishesPageFilter } from "../../../store/slices/dishesSlice";
import  "../../dish_modal/dish_modal.css"

const OneRestDetails: React.FC = ()=> {
    const dispatch = useDispatch()
    const [activeButton, setActiveButton] = useState("all")
    //Modal
    const [modal, setModal] = useState(false);
    const toggleModal = (dish:any) => {
        setClickedDish(dish);
        setModal(!modal);
      };
    
      if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }
    
    const [clickedDish, setClickedDish] = useState<any>(null);

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
                class={"single-rest-card-dish"}
                name={dish.name}
                src={require(`../../../assets/images/Dishes/${dish.img}.png`)}
                ingredients={dish.ingredients}
                price={dish.price}
                key={dish.id}
                onClick={() => toggleModal(dish)} 
                // sideDishes={[dish.sideDishes]} 
                // changes={[dish.changes]}
                />
        ))) 
    },[allDishes])

    const [clicked, setClicked] = useState("all");
    const update=(e:React.MouseEvent<unknown>)=>{
        const type = (e.target as HTMLInputElement).name        
        dispatch(dishesPageFilter({type:type, data:newArrDishes}))
        setActiveButton(type)
        setClicked(type)
    }

return (
    <div className={"one-rest-details-all"}>
        <div className={`one-rest-details-container`} id={`rest-card ${restobj?.id}`} onClick = {update} >
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
                <button value={"Breakfast"} name="breakfast" onClick= {(e:React.MouseEvent<unknown>)=> update(e)} className={clicked === "breakfast" ? "clicked" : "not-clicked"} >Breakfast</button>
                <button value={"Lunch"} name="Lunch" onClick= {(e:React.MouseEvent<unknown>)=> update(e)} className={clicked === "Lunch" ? "clicked" : "not-clicked"}>Lunch</button>
                <button value={"Dinner"} name="dinner" onClick= {(e:React.MouseEvent<unknown>)=> update(e)} className={clicked === "dinner"? "clicked" : "not-clicked"} >Dinner</button>
        </div>
        <div className="all-dish-cards">
            {dishCard}
        </div>
        <div>
        {modal && (
            <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                <CardDishModal 
                    class={"single-rest-dish-modal"}
                    name={clickedDish?.name}
                    src={require(`../../../assets/images/Dishes/${clickedDish?.img}.png`)}
                    ingredients={clickedDish?.ingredients}
                    price={clickedDish?.price}
                    key={clickedDish?.id}
                    onClick={() => toggleModal(clickedDish)} 
                    sideDishes={clickedDish?.sideDishes.map((side:string[]) => (
                        <div>
                            <label>
                                <input type="radio" />
                                <span>{side}</span>
                            </label>
                        </div>
                    ))
                    }
                    changes={clickedDish?.changes.map((changes:string[]) => (
                        <div>
                            <label>
                                <input type="checkbox" />
                                <span>{changes}</span>
                            </label>
                        </div>
                    ))
                } 
                />
                    <button className="close-modal" onClick={toggleModal}>
                        <img src={closeModal} alt="icon-close-modal" />
                    </button>                    
                </div>
            </div>   
        )}
        </div>
    </div>
)
}   
export default OneRestDetails

