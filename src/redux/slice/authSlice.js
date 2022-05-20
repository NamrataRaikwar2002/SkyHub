import { createSlice, current } from '@reduxjs/toolkit'
import { login, signup } from '../thunk'

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: localStorage.getItem('token') || null,
}

console.log(initialState, 'slidfe')

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null
      state.token = null
      localStorage.removeItem('user')
      localStorage.removeItem('token')
    },
  },
  extraReducers: {
    [signup.fulfilled]: (state, action) => {
      state.user = action.payload.data.createdUser
      state.token = action.payload.data.encodedToken
    },
    [signup.rejected]: (action) => {
      console.error(action)
    },
    [login.fulfilled]: (state, action) => {
      state.user = action.payload.data.foundUser
      state.token = action.payload.data.encodedToken
    },
    [login.rejected]: (action) => {
      console.error(action)
    },
  },
})

export const { logoutUser } = authSlice.actions
export default authSlice.reducer
