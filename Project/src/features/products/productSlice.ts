import { Product } from './types';

export interface ProductsState {
  items: Product[];
}

const initialState: ProductsState = {
  items: [],
};

export const productsReducer = (state = initialState, action: any): ProductsState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
