import { createSlice } from "@reduxjs/toolkit";
import data from "../../epicure.json"

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    value: data.restaurants,
  },
  reducers: {
    restaurantPageFilter: (state, action) => {
    const filterType = action.payload;
      switch (filterType){
        case "all":
            state.value = data.restaurants 
            break;
        case "new":
            state.value = data.restaurants 
            state.value = state.value.filter(
                (restaurant) => restaurant.isNew === true); 
            break;
        case "mostPopular":
            state.value = data.restaurants 
            state.value = state.value.filter(
                (restaurant) => restaurant.isPopular === true); 
            break;
        case "openNow":
            state.value = data.restaurants 
            state.value = state.value.filter(
                (restaurant) => restaurant.isOpen === true); 
            break;
        case "mapView":
            state.value = data.restaurants 
            state.value = state.value.filter(
                (restaurant) => restaurant.isNew === true); 
            break;
        
        default:
        state.value = state.value;
      }
    }
}
})

export const { restaurantPageFilter } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
