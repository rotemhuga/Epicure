import { createSlice } from "@reduxjs/toolkit";
import data from "../../epicure.json"
import { Idishes, IdishesValue } from "../../interfaces";

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: {
    value: data.dishes,
    valueRestDishes: data.dishes,
    valueHomeRestDishes: data.dishes
  },
  reducers: {
    dishesPageFilter: (state,action) => {
      switch (action.payload.type){
        case "all":
          state.value = action.payload.data;
          state.valueRestDishes =  action.payload.data;
          state.valueRestDishes = action.payload.data;
          break;
        case "breakfast":
          console.log(action.payload.data)
          state.valueRestDishes = action.payload.data.filter(
            (dish:IdishesValue) => dish.isBreakfast === true);
          break;
        case "Lunch":
          state.valueRestDishes = action.payload.data.filter(
            (dish:IdishesValue) => dish.isLunch === true);
          break;
        case "dinner":
          state.valueRestDishes = action.payload.data.filter(
            (dish:IdishesValue) => dish.isDinner === true);
          break;

      default:
        state.value = action.payload.data
      }
    }
  },
});

export const { dishesPageFilter } = dishesSlice.actions;
export default dishesSlice.reducer;
