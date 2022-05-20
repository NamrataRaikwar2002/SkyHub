import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signup } from '../../redux/thunk'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const Signup = () => {
  const [inputType, setinputType] = useState({
    passwordType: 'password',
    confirmpaswd: 'password',
  })
  const [signupUser, setSignupUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {
    firstName,
    lastName,
    username,
    password,
    confirmPassword,
  } = signupUser

  const signupUserHandler = async (e) => {
    if (
      firstName !== '' &&
      lastName !== '' &&
      username !== '' &&
      password !== '' &&
      confirmPassword !== ''
    ) {
      e.preventDefault()
      const response = await dispatch(signup(signupUser))
      setSignupUser({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
      if (response?.payload?.status === 201) {
        localStorage.setItem(
          'user',
          JSON.stringify(response.payload.data.createdUser),
        )
        localStorage.setItem('token', response.payload.data.encodedToken)
        navigate(location?.state?.from?.pathname || '/home-page', {
          replace: true,
        })
        toast.success(
          'Congratulations, your account has been successfully created!',
        )
      } else {
        toast.error('Something went wrong!')
      }
    } else {
      toast.warning('Please fill the fields')
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
            <h2 className="createAccount">Signup</h2>
            <div className="firstLastNameDiv">
              <label htmlFor="firstNameinput" className="login_lable">
                First Name
                <input
                  type="text"
                  className="login_input showHideDiv"
                  placeholder="First name"
                  id="firstNameinput"
                  value={firstName}
                  onChange={(e) =>
                    setSignupUser({ ...signupUser, firstName: e.target.value })
                  }
                  required
                />
              </label>
              <label htmlFor="lastNameinput" className="login_lable">
                Last Name
                <input
                  type="text"
                  className="login_input showHideDiv"
                  placeholder="Last name"
                  id="lastNameinput"
                  value={lastName}
                  onChange={(e) =>
                    setSignupUser({ ...signupUser, lastName: e.target.value })
                  }
                  required
                />
              </label>
            </div>
            <label htmlFor="usernameinput" className="login_lable">
              Username
              <input
                type="text"
                className="login_input showHideDiv"
                placeholder="Username"
                id="usernameinput"
                value={username}
                onChange={(e) =>
                  setSignupUser({ ...signupUser, username: e.target.value })
                }
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
                  value={password}
                  onChange={(e) =>
                    setSignupUser({ ...signupUser, password: e.target.value })
                  }
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
                  value={confirmPassword}
                  onChange={(e) =>
                    setSignupUser({
                      ...signupUser,
                      confirmPassword: e.target.value,
                    })
                  }
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
            <button
              type="submit"
              className="primary_btn btn"
              onClick={signupUserHandler}
            >
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
