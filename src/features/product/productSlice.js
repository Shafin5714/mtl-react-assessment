import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  // Create Async Thunk only accepts one argument
  async ({ sort: sortData, category: filterData, search: searchData }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let { data } = await axios.get(`http://localhost:4000/products`, config);

      if (sortData) {
        if (sortData === "name") {
          const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
          return sortedData;
        } else {
          const sortedData = data.sort(
            (a, b) => parseFloat(a.price) - parseFloat(b.price)
          );
          return sortedData;
        }
      } else if (filterData) {
        const filteredData = data.filter((p) => p.category === filterData);
        return filteredData;
      } else if (searchData) {
        console.log(searchData);

        const filteredData = data.filter((p) =>
          p.name.toLowerCase().includes(searchData.toLowerCase())
        );
        return filteredData;
      } else {
        console.log("here");
        return data;
      }
    } catch (error) {
      return error;
    }
  }
);

export const getProductDetails = createAsyncThunk(
  "product/productDetails",
  async ({ id }) => {
    console.log(id);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(
        `http://localhost:4000/products/${id}`,
        config
      );
      console.log(data);
      return data;
    } catch (error) {
      return error;
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    products: [],
    product:"",
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = null;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
    // Details
    builder.addCase(getProductDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
      state.error = null;
    });
    builder.addCase(getProductDetails.rejected, (state, action) => {
      state.loading = false;
      state.product = null;
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
