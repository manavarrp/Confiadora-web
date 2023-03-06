import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../featuress/auth/authSlice';



export const store = configureStore({
  reducer: {
    auth: authReducer,
    
  },
});
