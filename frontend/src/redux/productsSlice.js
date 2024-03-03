import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: "idle",
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.status = "idle";
      });
  },
});

export const selectProducts = (state) => state.products.products;

export default productsSlice.reducer;

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios("http://localhost:8000/products/");
    return response.data;
  }
);

export const addNewProduct = createAsyncThunk(
  "products/addNewProduct",
  async (initialProduct) => {
    const response = await axios.post(
      "http://localhost:8000/products/",
      initialProduct
    );
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    const response = await axios.delete("http://localhost:8000/products/", {
      data: id,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  }
);
