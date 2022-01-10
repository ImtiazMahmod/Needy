import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// fetch products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(
      "https://sleepy-headland-99200.herokuapp.com/products"
    );

    return response.data;
  }
);

export const needySlice = createSlice({
  name: "needy",
  initialState: {
    products: [],
    myOrders: [],
    status: "idle",
  },
  reducers: {
    addToMyOrders: (state, action) => {},
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      // Add user to the state array
      state.products = action.payload;
      state.status = "success";
    });
  },
});

export const { addToMyOrders } = needySlice.actions;
export default needySlice.reducer;
