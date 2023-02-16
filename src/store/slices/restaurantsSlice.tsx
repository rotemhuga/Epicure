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

    // export const { filterRestaurants } = restaurantsSlice.actions;

    
    // checkIfPopular: state => {
    //     if (state.value[0].isPopular === true) {
    //         // return <CardRestaurant />
    // }
//       setRestaurants: (state, action) => {
//         state.value = action.payload;
//       },


//   reducers: {
//     filterRestaurants: (state, action) => {
//       const filterType = action.payload;
//       switch (filterType) {
//         case "all":
//           state.value = data.restaurant;
//           break;
//         case "new":
//           state.value = data.restaurant;
//           state.value = state.value.filter(
//             (restaurant) => restaurant.newRest === true
//           );
//           break;
//         case "popular":
//           state.value = data.restaurant;
//           state.value = state.value.filter(
//             (restaurant) => restaurant.popular === true
//           );
//           break;
//         case "open":
//           state.value = state.value.filter(
//             (restaurant) => restaurant.openNow === true
//           );
//           break;
//         case "threeRest":
//           state.value = state.filteredValue
//             .filter((restaurant) => restaurant.popular === true)
//             .slice(0, 3);
//           break;
//         default:
//           state.value = state.value;
//       }
//     },
//   },
// });

// export const { filterRestaurants } = restaurantsSlice.actions;
