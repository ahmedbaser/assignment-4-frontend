  import { configureStore } from '@reduxjs/toolkit';
  import cartReducer from './slices/cartSlice';
  import productsReducer from './slices/productsSlice';
  import api from './api';


 const store = configureStore({
   reducer: {
     [api.reducerPath]: api.reducer,
      cart: cartReducer,
      products: productsReducer,
    
    },
       middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().concat(api.middleware),
 
});
 export type RootState = ReturnType<typeof store.getState>;
 export type AppDispatch = typeof store.dispatch;

 export default store;


















