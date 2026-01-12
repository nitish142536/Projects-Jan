import { createSlice } from '@reduxjs/toolkit';
import type {  PayloadAction } from '@reduxjs/toolkit';
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

interface ProductState {
  list: Product[];
}

const initialState: ProductState = {
  list: [
    { id: 1, name: 'Tomato', category: 'Vegetables', price: 28, image: '/images/tomato.jpg' },
    { id: 2, name: 'Onion', category: 'Vegetables', price: 25, image: '/images/onion.jpg' },
    { id: 3, name: 'Milk', category: 'Dairy', price: 60, image: '/images/milk.jpg' },
  ],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      state.list.push(action.payload);
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
