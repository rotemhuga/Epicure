import { createSlice } from "@reduxjs/toolkit";
import data from "../../epicure.json"

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: {
    value: data.dishes,
  },
  reducers: {

  },
});


export default dishesSlice.reducer;
