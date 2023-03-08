import { createSlice } from "@reduxjs/toolkit";
import data from "../../epicure.json"
import { useDispatch } from "react-redux";

// fetch("http://localhost:8000/epicure")
// .then((response) => response.json())
// .then((data) => {
//   console.log(data)
//   // setStudents(data.studentsData);
// });

// export const restaurantsSlice = createSlice({
//   name: "restaurants",
//   initialState: { restaurants: [] },
//   reducers: {
//     setRestaurants: (state, action) => {
//         state.restaurants = action.payload;
//         // switch (state.restaurants){
//         //     case "all":
//         //         state.value = data.restaurants 
//         //         break;
//         //     case "new":
//         //         state.value = data.restaurants 
//         //         state.value = state.value.filter(
//         //             (restaurant) => restaurant.isNew === true); 
//         //         break;
//         //     case "mostPopular":
//         //         state.value = data.restaurants 
//         //         state.value = state.value.filter(
//         //             (restaurant) => restaurant.isPopular === true); 
//         //         break;
//         //     case "openNow":
//         //         state.value = data.restaurants 
//         //         state.value = state.value.filter(
//         //             (restaurant) => restaurant.isOpen === true); 
//         //         break;
//         //     case "mapView":
//         //         state.value = data.restaurants 
//         //         state.value = state.value.filter(
//         //             (restaurant) => restaurant.isNew === true); 
//         //         break;
            
//         //     default:
//         //     state.value = state.value;
//         //   }
//       }
//     }
//   });

// export const { setRestaurants } = restaurantsSlice.actions; 

// export const fetchRestaurants = () => async (dispatch: (arg0: { payload: any; type: "restaurants/setRestaurants"; }) => void) => {
//     try {
//         const response = await fetch("http://localhost:8000/epicure");
//         const data = await response.json();
//         dispatch(setRestaurants(data));
//     } catch (error) {
//         console.log(error);
//     }
//     };
    // restaurantPageFilter: (state, action) => {
    // const filterType = action.payload;
    //   switch (filterType){
    //     case "all":
    //         state.value = data.restaurants 
    //         break;
        // case "new":
        //     state.value = data.restaurants 
        //     state.value = state.value.filter(
        //         (restaurant) => restaurant.isNew === true); 
        //     break;
        // case "mostPopular":
        //     state.value = data.restaurants 
        //     state.value = state.value.filter(
        //         (restaurant) => restaurant.isPopular === true); 
        //     break;
        // case "openNow":
        //     state.value = data.restaurants 
        //     state.value = state.value.filter(
        //         (restaurant) => restaurant.isOpen === true); 
        //     break;
        // case "mapView":
        //     state.value = data.restaurants 
        //     state.value = state.value.filter(
        //         (restaurant) => restaurant.isNew === true); 
        //     break;
        
    //     default:
    //     state.value = state.value;
    //   }
    // }


// export default restaurantsSlice.reducer;

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
