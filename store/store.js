import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import personPhysical from '../features/physicalPersonForm/ppFormSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    physicalPersonForm: personPhysical
  }
})
