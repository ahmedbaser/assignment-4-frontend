import { RootState } from './store';

export const selectAllProducts = (state: RootState) => state.products.products;
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartTotal = (state: RootState) => state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);





















