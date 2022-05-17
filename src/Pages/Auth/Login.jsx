import React, { useState } from 'react'
import './Auth.css'
import { Link } from 'react-router-dom'

export const Login = () => {
  const [inputType, setinputType] = useState('password')
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
              Email address
              <input
                type="text"
                className="login_input showHideDiv"
                placeholder="Enter your email"
                id="loginInput"
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

            <button type="submit" className="primary_btn btn">
              Guest Login
            </button>
            <Link to="/home-page" className="primary_btn btn">
              <button type="submit">Login</button>
            </Link>
            <Link to="/signup-page" className="createAccount login_signup_link">
              Create New Account
            </Link>
          </div>
        </form>
      </section>
    </main>
  )
}
