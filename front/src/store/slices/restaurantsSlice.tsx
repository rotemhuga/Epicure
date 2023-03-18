import { createSlice } from "@reduxjs/toolkit";

const getData = fetch("http://localhost:8000/epicure/restaurantsPage")
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err:any) => {
        console.log(err.message);
    });

const restaurant:any = await getData;

export const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState: {
      value: restaurant,
    },
    reducers: {
      restaurantPageFilter: (state, action) => {
      const filterType = action.payload;
        switch (filterType){
          case "all":
              state.value = restaurant
              break;
          case "new":
              state.value = restaurant
              state.value = state.value.filter(
                  (restaurant:any) => restaurant.isNew === true); 
              break;
          case "mostPopular":
              state.value = restaurant
              state.value = state.value.filter(
                  (restaurant:any) => restaurant.isPopular === true); 
              break;
        //   case "openNow":
        //       state.value = restaurant
        //       state.value = state.value.filter(
        //           (restaurant:any) => restaurant.isOpen === true); 
        //       break;
          case "mapView":
              state.value =restaurant
              state.value = state.value.filter(
                  (restaurant:any) => restaurant.isNew === true); 
              break;
          
          default:
          state.value = state.value;
        }
      }
  }
  })
  
  export const { restaurantPageFilter } = restaurantsSlice.actions;
  export default restaurantsSlice.reducer;
  

