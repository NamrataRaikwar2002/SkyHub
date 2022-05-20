import React, { useState } from 'react'
import './Auth.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { login } from '../../redux/thunk'
import { useLocation } from 'react-router'

export const Login = () => {
  const [inputType, setinputType] = useState('password')
  const [loginUser, setLoginUser] = useState({ username: '', password: '' })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const { username, password } = loginUser

  const guestUserHandler = (e) => {
    e.preventDefault()
    setLoginUser((user) => ({
      ...user,
      username: 'adarshbalika',
      password: 'adarshBalika123',
    }))
  }

  const loginUserHandler = async (e) => {
    if (username && password) {
      e.preventDefault()
      const response = await dispatch(login(loginUser))
      if (response?.payload?.status === 200) {
        localStorage.setItem(
          'user',
          JSON.stringify(response.payload.data.foundUser),
        )
        localStorage.setItem('token', response.payload.data.encodedToken)
        navigate(location?.state?.from?.pathname || '/home-page', {
          replace: true,
        })
        toast.success('Login successfully')
      } else {
        toast.error('Something went wrong!')
      }
    } else {
      toast.warning('Please fill the fields.')
    }
  }

  return (
    <main className="login_page">
      <section className="login_box content">
        <form>
          <div className="login_div">
            <h1 className="createAccount loginPageHeading primaryColorText">
              Welcome to SkyHub
            </h1>
            <h2 className="createAccount">Login</h2>
            <label htmlFor="emailInput" className="login_lable">
              Username
              <input
                type="text"
                className="login_input showHideDiv"
                placeholder="UserName"
                id="loginInput"
                value={username}
                onChange={(e) =>
                  setLoginUser({ ...loginUser, username: e.target.value })
                }
                required
              />
            </label>
            <label htmlFor="passwordInput" className="login_lable">
              Password
              <div className="showHideDiv">
                <input
                  type={inputType}
                  className="login_input"
                  placeholder="Password"
                  id="passwordInput"
                  value={password}
                  onChange={(e) =>
                    setLoginUser({ ...loginUser, password: e.target.value })
                  }
                  required
                />
                <div
                  className="passwordIcon"
                  onClick={() =>
                    inputType === 'text'
                      ? setinputType('password')
                      : setinputType('text')
                  }
                >
                  {inputType === 'text' ? (
                    <p className="hideIcon">
                      <i className="fa-regular fa-eye"></i>
                    </p>
                  ) : (
                    <p className="hideIcon">
                      <i className="fa-regular fa-eye-slash"></i>
                    </p>
                  )}
                </div>
              </div>
            </label>

            <button
              type="submit"
              className="primary_btn btn"
              onClick={guestUserHandler}
            >
              Guest Login
            </button>
            <button
              type="submit"
              onClick={loginUserHandler}
              className="primary_btn btn"
            >
              Login
            </button>
            <Link to="/signup-page" className="createAccount login_signup_link">
              Create New Account
            </Link>
          </div>
        </form>
      </section>
    </main>
  )
}
