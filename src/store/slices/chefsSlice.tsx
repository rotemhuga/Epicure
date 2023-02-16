import { createSlice } from "@reduxjs/toolkit";
import data from "../../epicure.json"

export const chefsSlice = createSlice({
  name: "chefs",
  initialState: {
    value: data.chefs,
  },
  reducers: {
//       setRestaurants: (state, action) => {
//         state.value = action.payload;
//       },
  },
});

// Action creators are generated for each case reducer function
// export const { setRestaurants } = restaurantsSlice.actions;

export default chefsSlice.reducer;