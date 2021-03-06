import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slice/authSlice'
import postReducer from '../slice/postSlice'
import userReducer from '../slice/userSlice'

export const store = configureStore({
  reducer: { auth: authReducer, post: postReducer, user: userReducer },
})
