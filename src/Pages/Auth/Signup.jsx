import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Signup = () => {
  const [inputType, setinputType] = useState({
    passwordType: 'password',
    confirmpaswd: 'password',
  })
  return (
    <main className="login_page">
      <section className="login_box content">
        <form>
          <div className="login_div">
            <h1 className="createAccount loginPageHeading primaryColorText">
              Welcome to SkyHub
            </h1>
            <h2 className="createAccount">Signup</h2>
            <div className="firstLastNameDiv">
              <label htmlFor="firstNameinput" className="login_lable">
                First Name
                <input
                  type="text"
                  className="login_input showHideDiv"
                  placeholder="Enter you first name"
                  id="firstNameinput"
                  required
                />
              </label>
              <label htmlFor="lastNameinput" className="login_lable">
                Last Name
                <input
                  type="text"
                  className="login_input showHideDiv"
                  placeholder="Enter your last name"
                  id="lastNameinput"
                  required
                />
              </label>
            </div>
            <label htmlFor="emailinput" className="login_lable">
              Email address
              <input
                type="email"
                className="login_input showHideDiv"
                placeholder="Enter your email"
                id="emailinput"
                required
              />
            </label>
            <label htmlFor="passwordinput" className="login_lable">
              Password
              <div className="showHideDiv">
                <input
                  type={inputType.passwordType}
                  className="login_input passwordInputDiv"
                  placeholder="Enter Password"
                  id="passwordinput"
                  required
                />
                <div
                  className="passwordIcon"
                  onClick={() =>
                    inputType.passwordType === 'text'
                      ? setinputType({ ...inputType, passwordType: 'password' })
                      : setinputType({ ...inputType, passwordType: 'text' })
                  }
                >
                  {inputType.passwordType === 'text' ? (
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

            <label htmlFor="confirmPswdinput" className="login_lable">
              Confirm Password
              <div className="showHideDiv">
                <input
                  type={inputType.confirmpaswd}
                  className="login_input passwordInputDiv"
                  placeholder="Reenter Password"
                  id="confirmPswdinput"
                  required
                />
                {
                  <div
                    className="passwordIcon"
                    onClick={() =>
                      inputType.confirmpaswd === 'text'
                        ? setinputType({
                            ...inputType,
                            confirmpaswd: 'password',
                          })
                        : setinputType({ ...inputType, confirmpaswd: 'text' })
                    }
                  >
                    {inputType.confirmpaswd === 'text' ? (
                      <p className="hideIcon">
                        <i className="fa-regular fa-eye"></i>
                      </p>
                    ) : (
                      <p className="hideIcon">
                        <i className="fa-regular fa-eye-slash"></i>
                      </p>
                    )}
                  </div>
                }
              </div>
            </label>
            <button type="submit" className="primary_btn btn">
              Create New Account
            </button>
            <Link to="/" className="createAccount login_signup_link">
              Already have an account
            </Link>
          </div>
        </form>
      </section>
    </main>
  )
}
