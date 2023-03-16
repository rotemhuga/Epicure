import React from "react";
import "../Rest_filter_link/Rest_filter_link.css"
import "../Filter_rest_options/Filter_rest_options.css"
import NavButton from "../NavButton_nav/NavButton";
import vectorDown from "../../../assets/icons/Vector-filter-down.svg"
import { useState } from "react";
import AllRestaurants from "../../All_restaurants/All_restaurants";
import { useEffect } from "react";
  
const FilterRestOptions: React.FC = () => {
const [modal, setModal] = useState(false);

const toggleModal = () => {
    setModal(!modal);
  };

  const [addRestInputs, setAddRestInputs] = useState({
    id: "",
    img: "",
    name: "",
    chef: "",
    rating: "",
    openHour: "",
    closeHour: "",
    address:"",
    dishes: [-1],
    isPopular:false,
    isNew:false,
    isOpen:false,
    map:false
})

const handleAddRest = async (event:any) => {
  event.preventDefault()
  // const linkImg = event.target[0].value
  // const restName = event.target[1].value
  // const chefName = event.target[2].value
  // const rating1 = event.target[3].checked
  // const rating2 = event.target[4].checked
  // const rating3 = event.target[5].checked
  // const rating4 = event.target[6].checked
  // const rating5 = event.target[7].checked
  // const openHours = event.target[8].value
  // const closeHours = event.target[9].value
  // const address = event.target[10].value
  // const popularYes = event.target[11].checked
  // const popularNo = event.target[12].checked
  // const isNewYes = event.target[13].checked
  // const isNewNo = event.target[14].checked
  setAddRestInputs({
    id: "1",
    img: event.target[0].value,
    name: event.target[1].value,
    chef: event.target[2].value,
    rating: "1",
    openHour: event.target[8].value,
    closeHour: event.target[9].value,
    address: event.target[10].value,
    dishes: [1,4,6],
    isPopular: true,
    isNew: true,
    isOpen: true,
    map:false
    // rating1 = event.target[3].checked,
    // rating2 = event.target[4].checked,
    // rating3 = event.target[5].checked,
    // rating4 = event.target[6].checked,
    // rating5 = event.target[7].checked,
    // popularYes = event.target[11].checked,
    // popularNo = event.target[12].checked,
    // isNewYes = event.target[13].checked,
    // isNewNo = event.target[14].checked
  })
  console.log(addRestInputs)
  await fetch("http://localhost:8000/epicure/restaurantsPage", {
    method: 'POST',
    body: JSON.stringify(addRestInputs),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then ((response) => {
    return response.json()
    }) 
    .then ((data) => {
        return data;
    }) 
    .catch((error)=> {
        console.log(error.massage);
    })
}

  // console.log(event, linkImg, restName, chefName, rating1, rating2,rating3,rating4,rating5, openHours,closeHours, address, popularYes, popularNo, isNewYes, isNewNo)


// useEffect(()=> {
//   console.log("use effect happend");

// fetch("http://localhost:8000/epicure/restaurantsPage", {
//       method: 'POST',
//       body: JSON.stringify(addRestInputs),
//       headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//           },
//       })
//       .then ((response) => {
//       return response.json()
//       }) 
//       .then ((data) => {
//           return data;
//       }) 
//       .catch((error)=> {
//           console.log(error.massage);
//       })
// },[addRestInputs])

const allRest = document.getElementById('all-rest-page-container')

  if(modal) {
    document.body.classList.add('active-modal')
    allRest!.style.display = 'none';

  } else {
    document.body.classList.remove('active-modal')
    // allRest!.style.display = 'grid';
  }
    
    return (
        <>
        <div className="all-buttons filter-options">
            <div className="button-filter left">
                <NavButton name={"Price Range"} class="button-all-rest"/>
                <img src={vectorDown} alt="vector" className="vectorDown" />
            </div>
            <div className="button-filter middle">
                <NavButton name={"Distance"} class="button-all-rest"/>
                <img src={vectorDown} alt="vector" />
            </div>
            <div className="button-filter right">
                <NavButton name={"Rating"} class="button-all-rest"/>
                <img src={vectorDown} alt="vector" />
            </div>        
            <button className="add-restaurant-button" onClick={toggleModal}>
                Add Restaurant
            </button>
        </div>
        {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Add New Restaurant</h2>
            <form onSubmit={handleAddRest} >
                <div className="inputs-content" >
                  <div className="img-div">
                    img: 
                    <label><input type="text" name="name" id="" placeholder="Enter Img Link" /></label> 
                  </div>
                
                  <label><input type="text" name="name" id="" placeholder="Restaurant Name" /></label>                
                  <label><input type="text" name="chefName" id="" placeholder="Chef Name" /></label>                
                  Rating:
                  <label><input type="radio" name="rating" id="" value="1"  /><span>1</span></label>                
                  <label><input type="radio" name="rating" id=""  value="2"  /><span>2</span></label>                
                  <label><input type="radio" name="rating" id="" value="3"   /><span>3</span></label>                
                  <label><input type="radio" name="rating" id=""  value="4"  /><span>4</span></label>                
                  <label><input type="radio" name="rating" id="" value="5"   /><span>5</span></label>                
                  <p>openHours:</p>
                  From:
                  <input type="time" id="appt" name="appt"
                  min="01:00" max="18:00" required/>
                  To:
                  <input type="time" id="appt" name="appt"
                  min="01:00" max="18:00" required/>
                  <label><input type="text" name="chefName" id="" placeholder="Restaurant Address" /></label> 
                  {/* <label>Dishes:</label>   */}
                  Popular Restauarnt:
                  <label><input type="radio" name="isPopular" id="" value="yes" /><span>Yes</span></label>                
                  <label><input type="radio" name="isPopular" id="" value="no"/><span>No</span></label>                
                  New Restauarnt:
                  <label><input type="radio" name="isNew" id="" value="yes" /><span>Yes</span></label>                
                  <label><input type="radio" name="isNew" id="" value="no" /><span>No</span></label>    
                  <button type="submit" id="button-add-rest">Add Restaurant</button>
                </div>
            </form> 
            <button className="close-modal" onClick={toggleModal}>
            CLOSE
            </button>
          </div>
        </div>
      )}
        </>
    )
}

export default FilterRestOptions