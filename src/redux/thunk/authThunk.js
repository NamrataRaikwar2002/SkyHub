import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const signup = createAsyncThunk(
  'auth/signup',
  async ({ username, password, firstName, lastName }, rejectWithValue) => {
    console.log(password, 'signup')
    try {
      const response = await axios.post('/api/auth/signup', {
        username,
        password,
        firstName,
        lastName,
      })
      const data = { data: response.data, status: response.status }
      return data
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      })
    }
  },
)

const login = createAsyncThunk(
  'auth/login',
  async ({ username, password }, { rejectWithValue }) => {
    console.log(password)
    try {
      const response = await axios.post('/api/auth/login', {
        username,
        password,
      })
      console.log(response)
      const data = { data: response.data, status: response.status }
      return data
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      })
    }
  },
)
export { signup, login }
