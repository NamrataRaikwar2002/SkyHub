import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const signup = createAsyncThunk(
  'auth/signup',
  async ({ username, password, firstName, lastName }, rejectWithValue) => {
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
    try {
      const response = await axios.post('/api/auth/login', {
        username,
        password,
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

const addBookmark = createAsyncThunk(
  'auth/addBookmark',
  async ({ _id, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/bookmark/${_id}`,
        {},
        { headers: { authorization: token } },
      )
      const data = { data: response.data }
      return data
    } catch (error) {
      return rejectWithValue({ data: error.response.data })
    }
  },
)

const removeBookmark = createAsyncThunk(
  'auth/removeBookmark',
  async ({ _id, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/remove-bookmark/${_id}`,
        {},
        { headers: { authorization: token } },
      )
      const data = { data: response.data }
      return data
    } catch (error) {
      console.error(error)
      return rejectWithValue({ data: error.response.data })
    }
  },
)

const editProfile = createAsyncThunk(
  'user/editProfile',
  async ({ userData, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        '/api/users/edit',
        { userData },
        { headers: { authorization: token } },
      )
      const data = { data: response.data }
      return data
    } catch (error) {
      console.error(error)
      return rejectWithValue({ data: error.response.data })
    }
  },
)

export { signup, login, addBookmark, removeBookmark, editProfile }
