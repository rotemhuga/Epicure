import React from "react";
import "../Rest_filter_link/Rest_filter_link.css"
import "../Filter_rest_options/Filter_rest_options.css"
import NavButton from "../NavButton_nav/NavButton";
import vectorDown from "../../../assets/icons/Vector-filter-down.svg"
import { useState } from "react";
  
const FilterRestOptions: React.FC = () => {
const [modal, setModal] = useState(false);

const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')

  } else {
    document.body.classList.remove('active-modal')
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
            <h2>Add Restaurant</h2>
            <div>
                img: 
                <label><input type="text" name="name" id="" placeholder="Restaurant Name" /></label>                
                <label><input type="text" name="chefName" id="" placeholder="Chef Name" /></label>                
                Rating:
                <label><input type="radio" name="rating" id=""  /><span>1</span></label>                
                <label><input type="radio" name="rating" id=""  /><span>2</span></label>                
                <label><input type="radio" name="rating" id=""  /><span>3</span></label>                
                <label><input type="radio" name="rating" id=""  /><span>4</span></label>                
                <label><input type="radio" name="rating" id=""  /><span>5</span></label>                
                openHours:
                <label><input type="text" name="chefName" id="" placeholder="Restaurant Address" /></label> 
                dishes: 
                Popular Restauarnt:
                <label><input type="radio" name="isPopular" id="" placeholder="Restaurant Name" /><span>Yes</span></label>                
                <label><input type="radio" name="isPopular" id="" placeholder="Restaurant Name" /><span>No</span></label>                
                New Restauarnt:
                <label><input type="radio" name="isNew" id="" placeholder="Restaurant Name" /><span>Yes</span></label>                
                <label><input type="radio" name="isNew" id="" placeholder="Restaurant Name" /><span>No</span></label>                
                isOpen:
            </div> 
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