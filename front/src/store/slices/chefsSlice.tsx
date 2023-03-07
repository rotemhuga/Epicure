import { createSlice } from "@reduxjs/toolkit";
import data from "../../epicure.json"

export const chefsSlice = createSlice({
  name: "chefs",
  initialState: {
    value: data.chefs,
  },
  reducers: {
    chefsPageFilter: (state,action) => {
      const chefFilterType = action.payload;
        switch (chefFilterType){
          case "all":
            state.value = data.chefs
            break;
          case "new":
            state.value = data.chefs
            state.value = state.value.filter(
              (chef) => chef.isNew === true);
            break;
          case "mostViewed":
            state.value = data.chefs
            state.value = state.value.filter(
              (chef) => chef.mostViewed === true);
            break;

          default:
          state.value = state.value;
        }
      }
  }
});

export const { chefsPageFilter } = chefsSlice.actions;
export default chefsSlice.reducer;

