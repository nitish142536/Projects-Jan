import productsReducer from '../features/products/productSlice';
import usersReducer from '../features/users/userSlice';

export const rootReducer = {
  products: productsReducer,
  users: usersReducer,
};

export default rootReducer;
