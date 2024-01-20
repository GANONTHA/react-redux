import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    products: [
      {
        id: 1,
        title: "iPhone X",
        price: 20000,
      },
      {
        id: 2,
        title: "iPhone 11",
        price: 30000,
      },
      {
        id: 3,
        title: "iPhone 12",
        price: 40000,
      },
      {
        id: 4,
        title: "iPhone 13",
        price: 50000,
      },
    ],
    cart: [],
  },
  reducers: {
    //add an item to cart
    addToCart: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      state.cart.push(product);
    },
    //remove an item from cart
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
    },
    //checkout
    clearCart: (state) => {
      state.cart = [];
    },
    //delete an item from products list
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart, clearCart, deleteItem } =
  shopSlice.actions;
export default shopSlice.reducer;
