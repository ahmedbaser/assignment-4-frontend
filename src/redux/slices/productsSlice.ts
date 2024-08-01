import { createSlice, PayloadAction, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '../types';
import { RootState } from '../store';

export interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchProducts: AsyncThunk<Product[], void, { state: RootState }> = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('https://assignment-4-backend-beta.vercel.app/api/products');
    if (response.status !== 200) {
      throw new Error('Failed to fetch products');
    }
    return response.data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      });
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
























