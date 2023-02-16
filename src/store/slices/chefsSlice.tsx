import { createSlice } from "@reduxjs/toolkit";
import data from "../../epicure.json"

export const chefsSlice = createSlice({
  name: "chefs",
  initialState: {
    value: data.chefs,
  },
  reducers: {
    // chefsPageFilter: (state,action) => {
    //   const chefFilterType = action.payload;
    //     switch (chefFilterType){
    //       case 
    //     }
    // }
//       setRestaurants: (state, action) => {
//         state.value = action.payload;
//       },
  },
});

export default chefsSlice.reducer;